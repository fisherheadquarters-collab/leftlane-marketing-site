import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyRecaptcha(token: string): Promise<{ success: boolean; score: number; error?: string }> {
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });
  const data = await res.json();
  console.log('reCAPTCHA response:', JSON.stringify(data));
  console.log('reCAPTCHA score:', data.score ?? 'N/A');
  if (!data.success) {
    return { success: false, score: 0, error: `reCAPTCHA failed: ${JSON.stringify(data['error-codes'])}` };
  }
  if ((data.score ?? 0) < 0.5) {
    return { success: false, score: data.score, error: `Score too low: ${data.score}` };
  }
  return { success: true, score: data.score };
}

function buildEmailHtml(body: Record<string, string>): string {
  const field = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:10px 16px;font-weight:600;color:#555;width:200px;vertical-align:top;border-bottom:1px solid #eee;">${label}</td>
          <td style="padding:10px 16px;color:#111;border-bottom:1px solid #eee;">${value}</td>
        </tr>`
      : '';

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 20px;">
    <tr><td>
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:4px;overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background:#0A0A0A;padding:28px 32px;">
            <p style="margin:0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#FCB402;font-weight:600;">New Application</p>
            <h1 style="margin:8px 0 0;font-size:28px;color:#ffffff;font-weight:700;">LeftLane Marketing</h1>
          </td>
        </tr>
        <!-- Alert bar -->
        <tr>
          <td style="background:#FCB402;padding:12px 32px;">
            <p style="margin:0;font-size:13px;font-weight:700;color:#000;letter-spacing:0.05em;text-transform:uppercase;">
              New application received from ${body.brandName || 'Unknown Brand'}
            </p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <!-- Funnel answers -->
            <h2 style="margin:0 0 16px;font-size:14px;text-transform:uppercase;letter-spacing:0.1em;color:#999;">Funnel Answers</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:2px;margin-bottom:32px;">
              ${field('Business Type', body.clientType)}
              ${field('Annual Revenue', body.revenue)}
              ${field('Social Following', body.following)}
              ${field('Giveaway Experience', body.experience)}
              ${field('Primary Goal', body.goal)}
            </table>
            <!-- Contact details -->
            <h2 style="margin:0 0 16px;font-size:14px;text-transform:uppercase;letter-spacing:0.1em;color:#999;">Contact Details</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:2px;">
              ${field('First Name', body.firstName)}
              ${field('Last Name', body.lastName)}
              ${field('Business Name', body.brandName)}
              ${field('Email', body.email)}
              ${field('Phone', body.phone)}
              ${field('Website', body.website)}
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f5f5f5;padding:20px 32px;border-top:1px solid #eee;">
            <p style="margin:0;font-size:12px;color:#999;">
              Submitted via leftlanemarketingllc.com/apply
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(req: NextRequest) {
  try {
    const body: Record<string, string> = await req.json();
    const { recaptchaToken, ...formData } = body;

    console.log('Apply API: received submission for:', formData.brandName || 'unknown');

    if (!recaptchaToken) {
      console.log('Apply API: missing reCAPTCHA token');
      return NextResponse.json({ success: false, error: 'Missing reCAPTCHA token.' }, { status: 400 });
    }

    const captcha = await verifyRecaptcha(recaptchaToken);
    if (!captcha.success) {
      console.log('Apply API: reCAPTCHA failed —', captcha.error);
      return NextResponse.json({ success: false, error: captcha.error }, { status: 400 });
    }

    const businessName = formData.brandName || 'Unknown Brand';

    console.log('Apply API: sending email to', process.env.NOTIFICATION_EMAIL);
    const emailResult = await resend.emails.send({
      from: 'LeftLane Marketing <notifications@leftlanemarketingllc.com>',
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `New LeftLane Application — ${businessName}`,
      html: buildEmailHtml(formData),
    });

    if (emailResult.error) {
      console.error('Apply API: Resend error:', emailResult.error);
      return NextResponse.json(
        { success: false, error: `Email failed: ${JSON.stringify(emailResult.error)}` },
        { status: 500 }
      );
    }

    console.log('Apply API: email sent successfully, id:', emailResult.data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Apply API: unexpected error:', err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

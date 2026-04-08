'use client';

import { useState } from 'react';
import styles from './page.module.css';

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const TOTAL_STEPS = 6;

type Selections = {
  clientType: string;
  revenue: string;
  following: string;
  experience: string;
  goal: string;
};

const emptySelections: Selections = {
  clientType: '',
  revenue: '',
  following: '',
  experience: '',
  goal: '',
};

/* ── Step 1 ─────────────────────────────────────────────── */
function Step1({ onSelect }: { onSelect: (v: string) => void }) {
  const options = [
    { icon: '🏆', label: 'Giveaway Brand',     desc: 'Running giveaways is my core business model' },
    { icon: '📱', label: 'Influencer / Creator', desc: 'I have an audience and want to monetize it' },
    { icon: '🛒', label: 'Ecom Brand',           desc: 'I want to use giveaways to grow my existing brand' },
    { icon: '🤔', label: 'Not Sure Yet',          desc: "I'm exploring what's possible" },
  ];
  return (
    <div className={styles.cardGrid}>
      {options.map((o) => (
        <button key={o.label} className={styles.optionCard} onClick={() => onSelect(o.label)}>
          <span className={styles.cardIcon}>{o.icon}</span>
          <span className={styles.cardLabel}>{o.label}</span>
          <span className={styles.cardDesc}>{o.desc}</span>
        </button>
      ))}
    </div>
  );
}

/* ── Step 2 ─────────────────────────────────────────────── */
function Step2({ onSelect }: { onSelect: (v: string) => void }) {
  const options = ['Under $500K', '$500K to $1M', '$1M to $5M', '$5M to $20M', '$20M+'];
  return (
    <div className={styles.listGrid}>
      {options.map((o) => (
        <button key={o} className={styles.listCard} onClick={() => onSelect(o)}>
          {o}
        </button>
      ))}
    </div>
  );
}

/* ── Step 3 ─────────────────────────────────────────────── */
function Step3({ onSelect }: { onSelect: (v: string) => void }) {
  const options = ['Under 50K', '50K to 250K', '250K to 500K', '500K to 1M', '1M+'];
  return (
    <div className={styles.listGrid}>
      {options.map((o) => (
        <button key={o} className={styles.listCard} onClick={() => onSelect(o)}>
          {o}
        </button>
      ))}
    </div>
  );
}

/* ── Step 4 ─────────────────────────────────────────────── */
function Step4({ onSelect }: { onSelect: (v: string) => void }) {
  const options = [
    { icon: '✅', label: "Yes, I've run giveaways before" },
    { icon: '🚀', label: 'No, this would be my first' },
    { icon: '🔄', label: "Yes, but it didn't go well" },
  ];
  return (
    <div className={styles.listGrid}>
      {options.map((o) => (
        <button key={o.label} className={styles.listCard} onClick={() => onSelect(o.label)}>
          <span className={styles.listIcon}>{o.icon}</span>
          {o.label}
        </button>
      ))}
    </div>
  );
}

/* ── Step 5 ─────────────────────────────────────────────── */
function Step5({ onSelect }: { onSelect: (v: string) => void }) {
  const options = [
    { icon: '💰', label: 'Generate more revenue and profit' },
    { icon: '📈', label: 'Grow my social following and brand' },
    { icon: '🎯', label: 'Acquire new customers at scale' },
    { icon: '⚙️', label: 'Fix my current giveaway operations' },
  ];
  return (
    <div className={styles.cardGrid}>
      {options.map((o) => (
        <button key={o.label} className={styles.optionCard} onClick={() => onSelect(o.label)}>
          <span className={styles.cardIcon}>{o.icon}</span>
          <span className={styles.cardLabel}>{o.label}</span>
        </button>
      ))}
    </div>
  );
}

/* ── Step 6 ─────────────────────────────────────────────── */
type FieldErrors = Partial<Record<'firstName' | 'lastName' | 'brandName' | 'email' | 'phone' | 'website', string>>;

function Step6({ onSubmit, loading, error }: { onSubmit: (data: Record<string, string>) => Promise<void>; loading: boolean; error: string }) {
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function clearError(name: keyof FieldErrors) {
    if (fieldErrors[name]) {
      setFieldErrors((prev) => { const next = { ...prev }; delete next[name]; return next; });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((v, k) => { data[k] = v.toString().trim(); });

    // Validate
    const errors: FieldErrors = {};
    const required: (keyof FieldErrors)[] = ['firstName', 'lastName', 'brandName', 'email', 'phone', 'website'];
    for (const key of required) {
      if (!data[key]) errors[key] = 'This field is required';
    }
    if (!errors.email && data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    await onSubmit(data);
  }

  function inputClass(name: keyof FieldErrors) {
    return `${styles.input}${fieldErrors[name] ? ` ${styles.inputError}` : ''}`;
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="firstName">First Name</label>
          <input className={inputClass('firstName')} id="firstName" name="firstName" type="text" autoComplete="given-name"
            onChange={() => clearError('firstName')} />
          {fieldErrors.firstName && <span className={styles.fieldError}>{fieldErrors.firstName}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="lastName">Last Name</label>
          <input className={inputClass('lastName')} id="lastName" name="lastName" type="text" autoComplete="family-name"
            onChange={() => clearError('lastName')} />
          {fieldErrors.lastName && <span className={styles.fieldError}>{fieldErrors.lastName}</span>}
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.fieldLabel} htmlFor="brandName">Business / Brand Name</label>
        <input className={inputClass('brandName')} id="brandName" name="brandName" type="text"
          onChange={() => clearError('brandName')} />
        {fieldErrors.brandName && <span className={styles.fieldError}>{fieldErrors.brandName}</span>}
      </div>
      <div className={styles.field}>
        <label className={styles.fieldLabel} htmlFor="email">Email Address</label>
        <input className={inputClass('email')} id="email" name="email" type="email" autoComplete="email"
          onChange={() => clearError('email')} />
        {fieldErrors.email && <span className={styles.fieldError}>{fieldErrors.email}</span>}
      </div>
      <div className={styles.field}>
        <label className={styles.fieldLabel} htmlFor="phone">Phone Number</label>
        <input className={inputClass('phone')} id="phone" name="phone" type="tel" autoComplete="tel"
          onChange={() => clearError('phone')} />
        {fieldErrors.phone && <span className={styles.fieldError}>{fieldErrors.phone}</span>}
      </div>
      <div className={styles.field}>
        <label className={styles.fieldLabel} htmlFor="website">Website URL</label>
        <input className={inputClass('website')} id="website" name="website" type="url" placeholder="https://yoursite.com"
          onChange={() => clearError('website')} />
        {fieldErrors.website && <span className={styles.fieldError}>{fieldErrors.website}</span>}
      </div>
      <button className={styles.submitBtn} type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>
      {error && <p className={styles.submitError}>{error}</p>}
    </form>
  );
}

/* ── Success ─────────────────────────────────────────────── */
function Success() {
  return (
    <div className={styles.success}>
      <div className={styles.successCheck}>✓</div>
      <h1 className={styles.successHeadline}>Application Received.</h1>
      <p className={styles.successBody}>
        We review every application personally. If you&rsquo;re a fit, you&rsquo;ll
        hear from us within 2 business days with a calendar link to schedule your
        discovery call.
      </p>
      <a href="/blog" className={styles.resourcesBtn}>
        Explore Giveaway Resources
      </a>
    </div>
  );
}

/* ── Funnel shell ────────────────────────────────────────── */
const stepMeta = [
  { stepLabel: 'STEP 1 OF 6 — WHO ARE YOU',      question: 'What best describes your business?' },
  { stepLabel: 'STEP 2 OF 6 — YOUR BUSINESS',    question: 'What is your approximate annual revenue?' },
  { stepLabel: 'STEP 3 OF 6 — YOUR AUDIENCE',    question: 'What is your total social media following?' },
  { stepLabel: 'STEP 4 OF 6 — YOUR EXPERIENCE',  question: 'Have you run a vehicle giveaway before?' },
  { stepLabel: 'STEP 5 OF 6 — YOUR GOAL',        question: "What's your primary goal with a giveaway?" },
  { stepLabel: 'STEP 6 OF 6 — ALMOST DONE',      question: 'Where should we send your strategy call invite?' },
];

export default function ApplyFunnel() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<Selections>(emptySelections);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  function advance() {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 1));
  }

  function select(key: keyof Selections, value: string) {
    setSelections((prev) => ({ ...prev, [key]: value }));
    advance();
  }

  async function handleSubmit(contactData: Record<string, string>): Promise<void> {
    setLoading(true);
    setSubmitError('');

    try {
      // Get reCAPTCHA token
      const token = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(async () => {
          try {
            const t = await window.grecaptcha.execute(SITE_KEY, { action: 'apply_submit' });
            resolve(t);
          } catch (e) {
            reject(e);
          }
        });
      });

      console.log('reCAPTCHA token obtained, submitting...');

      // Submit to API
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...selections,
          ...contactData,
          recaptchaToken: token,
        }),
      });

      const data = await response.json();
      console.log('Apply API response:', response.status, JSON.stringify(data));

      if (!data.success) {
        throw new Error(data.error || 'Submission failed');
      }

      // Only reach here on confirmed success
      setSubmitted(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('Funnel submit error:', msg);
      setSubmitError('Something went wrong. Please try again or email us directly at Alex@leftlanemarketingllc.com');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className={styles.page}>
        <Nav />
        <main className={styles.main}>
          <Success />
        </main>
      </div>
    );
  }

  const meta = stepMeta[step - 1];
  const progress = ((step - 1) / TOTAL_STEPS) * 100;

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.progressTrack}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>
      <main className={styles.main}>
        <div className={styles.stepWrap}>
          <p className={styles.stepLabel}>{meta.stepLabel}</p>
          <h2 className={styles.stepQuestion}>{meta.question}</h2>

          {step === 1 && <Step1 onSelect={(v) => select('clientType', v)} />}
          {step === 2 && <Step2 onSelect={(v) => select('revenue', v)} />}
          {step === 3 && <Step3 onSelect={(v) => select('following', v)} />}
          {step === 4 && <Step4 onSelect={(v) => select('experience', v)} />}
          {step === 5 && <Step5 onSelect={(v) => select('goal', v)} />}
          {step === 6 && <Step6 onSubmit={handleSubmit} loading={loading} error={submitError} />}

          {step > 1 && (
            <button className={styles.backBtn} onClick={back} type="button">
              ← Back
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.navLogoLink}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/leftlane-logo.png"
          alt="LeftLane Marketing"
          style={{ height: '44px', width: 'auto', mixBlendMode: 'screen' }}
        />
      </a>
      <a href="/" className={styles.navBack}>
        ← Back to Site
      </a>
    </nav>
  );
}

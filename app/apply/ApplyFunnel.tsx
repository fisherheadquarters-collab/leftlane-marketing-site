'use client';

import { useState } from 'react';
import styles from './page.module.css';

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
function Step6({ onSubmit, loading }: { onSubmit: (data: Record<string, string>) => void; loading: boolean }) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((v, k) => { data[k] = v.toString(); });
    onSubmit(data);
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="firstName">First Name</label>
          <input className={styles.input} id="firstName" name="firstName" type="text" required autoComplete="given-name" />
        </div>
        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="lastName">Last Name</label>
          <input className={styles.input} id="lastName" name="lastName" type="text" required autoComplete="family-name" />
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.fieldLabel} htmlFor="brandName">Business / Brand Name</label>
        <input className={styles.input} id="brandName" name="brandName" type="text" required />
      </div>
      <div className={styles.field}>
        <label className={styles.fieldLabel} htmlFor="email">Email Address</label>
        <input className={styles.input} id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className={styles.field}>
        <label className={styles.fieldLabel} htmlFor="phone">Phone Number</label>
        <input className={styles.input} id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className={styles.field}>
        <label className={styles.fieldLabel} htmlFor="website">Website URL</label>
        <input className={styles.input} id="website" name="website" type="url" placeholder="https://yoursite.com" />
      </div>
      <button className={styles.submitBtn} type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>
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

  async function handleSubmit(contactData: Record<string, string>) {
    setLoading(true);
    // Placeholder — wire to /api/contact when Resend is configured
    await new Promise((r) => setTimeout(r, 900));
    console.log('Application submitted:', { ...selections, ...contactData });
    setLoading(false);
    setSubmitted(true);
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
          {step === 6 && <Step6 onSubmit={handleSubmit} loading={loading} />}

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

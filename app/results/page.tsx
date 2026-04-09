import type { Metadata } from 'next';
import Nav from '@/components/Nav/Nav';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Client Results | LeftLane Marketing Giveaway Growth',
  description:
    'Real results from real LeftLane Marketing clients. See how brands scaled from $240K to $4.65M, tripled revenue, and generated $250M+ using giveaway marketing.',
  openGraph: {
    title: 'Client Results | LeftLane Marketing',
    description:
      'Real results from real LeftLane Marketing clients. See how brands scaled from $240K to $4.65M, tripled revenue, and generated $250M+ using giveaway marketing.',
  },
};

/* ── Hero ────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.label}>PROOF</p>
        <h1 className={styles.heroHeadline}>The Numbers Don&rsquo;t Lie.</h1>
        <p className={styles.heroSub}>
          We don&rsquo;t win on price. We win on results. Every number below
          represents a real brand that trusted us with their growth.
        </p>
        <div className={styles.trustStrip}>
          {[
            { value: '400+',   label: 'Giveaways' },
            { value: '10',     label: 'Years' },
            { value: '$250M+', label: 'in 2025' },
          ].map((s) => (
            <div key={s.label} className={styles.trustItem}>
              <span className={styles.trustValue}>{s.value}</span>
              <span className={styles.trustLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Headline Stats Bar ──────────────────────────────────── */
function StatsBar() {
  const stats = [
    { value: '$250M+', label: 'Revenue Generated in 2025' },
    { value: '400+',   label: 'Successful Giveaways Fulfilled' },
    { value: '0',      label: 'Clients Ever Lost' },
    { value: '10',     label: 'Years in the Game' },
  ];
  return (
    <section className={styles.statsBar}>
      <div className={styles.statsBarInner}>
        {stats.map((s) => (
          <div key={s.label} className={styles.statItem}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Case Studies ────────────────────────────────────────── */
function CaseStudies() {
  const cards = [
    {
      result: '$4.65M',
      from: '↑ from $240K',
      label: 'NET PROFIT IN 12 MONTHS',
      desc: 'A brand new to giveaways entered the space with our system. Within 12 months their net profit went from $240K to $4.65M.',
    },
    {
      result: '$3.85M',
      from: '↑ from $750K',
      label: 'ANNUAL PROFIT GROWTH',
      desc: 'An established ecom brand plugged our Giveaway Growth Engine into their existing business. Annual profit grew from $750K to $3.85M.',
    },
    {
      result: '5× PROFIT',
      from: '3× REVENUE',
      label: 'IN FIRST 12 MONTHS',
      desc: 'We tripled revenue and quintupled profit for a client in their first 12 months running giveaways with our system.',
    },
    {
      result: '$75M+',
      from: '50+ Giveaways',
      label: 'GENERATED OVER 9 YEARS',
      desc: 'Our longest running client partnership. 9 years, 50+ successful giveaways, $75M+ in total revenue generated together.',
    },
  ];

  return (
    <section className={styles.caseStudies}>
      <div className={styles.container}>
        <p className={styles.label}>CLIENT RESULTS</p>
        <h2 className={styles.sectionH2}>Real Brands. Real Numbers.</h2>
        <p className={styles.sectionBody}>
          These aren&rsquo;t projections. These are outcomes from real clients
          who trusted LeftLane with their giveaway growth.
        </p>
        <div className={styles.caseGrid}>
          {cards.map((c) => (
            <div key={c.label} className={styles.caseCard}>
              <div className={styles.caseLeft}>
                <span className={styles.caseResult}>{c.result}</span>
                <span className={styles.caseFrom}>{c.from}</span>
                <span className={styles.caseLabel}>{c.label}</span>
              </div>
              <p className={styles.caseDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── What Makes the Difference ───────────────────────────── */
function WhyItWorks() {
  const cols = [
    {
      title: '10 Years of Data',
      body: "We've run 400+ giveaways. We see more data than any agency in this space. That means better forecasting and fewer costly mistakes.",
    },
    {
      title: 'Full System Approach',
      body: "We don't just run ads. We fix operations, streamline fulfillment, build the merch, handle legal. The whole machine.",
    },
    {
      title: 'Profit Over Revenue',
      body: 'Anyone can inflate revenue numbers. We obsess over net profit. That is what builds a real business.',
    },
  ];

  return (
    <section className={styles.whyItWorks}>
      <div className={styles.container}>
        <p className={styles.label}>WHY IT WORKS</p>
        <h2 className={styles.sectionH2}>We Fix the Business. Not Just the Ads.</h2>
        <div className={styles.whyGrid}>
          {cols.map((c) => (
            <div key={c.title} className={styles.whyCard}>
              <h3 className={styles.whyTitle}>{c.title}</h3>
              <p className={styles.whyBody}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Meta Partner ────────────────────────────────────────── */
function MetaPartner() {
  return (
    <section className={styles.metaPartner}>
      <div className={styles.container}>
        <p className={styles.label}>CREDENTIALS</p>
        <h2 className={styles.sectionH2}>Meta Agency Partner</h2>
        <p className={styles.metaBody}>
          LeftLane Marketing is an official Meta Agency Partner, giving our
          clients priority support, early access to ad products, and dedicated
          account management.
        </p>
      </div>
    </section>
  );
}

/* ── Final CTA ───────────────────────────────────────────── */
function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaH2}>Ready to See Results Like These?</h2>
        <p className={styles.ctaSub}>
          Apply to work with us. We&rsquo;ll tell you honestly if giveaways are
          the right move for your business.
        </p>
        <a href="/apply" className={styles.btnPrimary}>
          Apply to Work With Us
        </a>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="/" className={styles.footerLogoLink}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/leftlane-logo.png"
          alt="LeftLane Marketing"
          style={{ height: '32px', width: 'auto', mixBlendMode: 'screen' }}
        />
      </a>
      <nav className={styles.footerNav}>
        <a href="/apply">Apply</a>
        <a href="/results">Results</a>
        <a href="/giveaway-marketing-guide">Free Guide</a>
        <a href="/blog">Blog</a>
      </nav>
      <span className={styles.footerCopy}>
        &copy; {new Date().getFullYear()} LeftLane Marketing LLC. All rights reserved.
      </span>
    </footer>
  );
}

/* ── Page ────────────────────────────────────────────────── */
export default function ResultsPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <CaseStudies />
        <WhyItWorks />
        <MetaPartner />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

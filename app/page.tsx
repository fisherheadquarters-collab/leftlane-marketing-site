import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "LeftLane Marketing — The Giveaway Growth Engine | Vehicle Giveaway Agency",
  description:
    "LeftLane Marketing is the industry's leading vehicle giveaway consultancy. $250M+ generated. 400+ giveaways. 0 clients lost. Apply to work with us.",
};

/* ── Nav ─────────────────────────────────────────────────── */
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
      <a href="/apply" className={styles.navCta}>
        Apply to Work With Us
      </a>
    </nav>
  );
}

/* ── Hero ────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.label}>GIVEAWAY GROWTH CONSULTANCY</p>
        <h1 className={styles.heroHeadline}>
          We&rsquo;ve Run 400 Giveaways.{" "}
          <span className={styles.accent}>$250M Generated.</span>{" "}
          Zero Clients Lost.
        </h1>
        <p className={styles.heroSub}>
          LeftLane Marketing is the industry&rsquo;s most proven giveaway growth
          consultancy. We handle strategy, ads, merch, and fulfillment so you
          can focus on your brand while we scale your revenue.
        </p>
        <a href="/apply" className={styles.btnPrimary}>
          Apply to Work With Us
        </a>

        <div className={styles.statStrip}>
          {[
            { value: "$250M+", label: "Revenue Generated in 2025" },
            { value: "400+",   label: "Successful Giveaways" },
            { value: "10",     label: "Years in the Game" },
            { value: "0",      label: "Clients Ever Lost" },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── The Problem ─────────────────────────────────────────── */
function Problem() {
  const cards = [
    {
      title: "No Proven Playbook",
      body: "Most brands enter the giveaway space with zero framework. They guess on pricing, prize value, and ad spend. They eat the loss when it doesn't convert.",
    },
    {
      title: "Wrong Ad Strategy",
      body: "Giveaway advertising is not standard ecom. Slow testing and conservative budgets kill a giveaway campaign dead in the first week.",
    },
    {
      title: "Operations Breakdown",
      body: "A giveaway that sells but can't fulfill, handle support, or stay legally compliant will destroy your brand faster than the revenue can save it.",
    },
  ];

  return (
    <section className={styles.problem}>
      <div className={styles.container}>
        <p className={styles.label}>WHY MOST GIVEAWAYS FAIL</p>
        <h2 className={styles.sectionH2}>
          Running a Giveaway Without a System Is How You Lose $50,000.
        </h2>
        <p className={styles.sectionBody}>
          A vehicle giveaway is a high-stakes revenue engine. The prize alone
          is $50K+. You need 3&times; that in revenue just to break even. Do it
          wrong and you absorb the entire loss. Do it right with a battle-tested
          system behind it and your profit margins explode once the prize is paid off.
        </p>
        <div className={styles.cardGrid}>
          {cards.map((c) => (
            <div key={c.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardBody}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Giveaway Growth Engine ──────────────────────────────── */
function Engine() {
  const services = [
    { title: "Strategy & Consulting",      body: "Full giveaway playbook, prize selection, pricing strategy, and campaign calendar built for your brand." },
    { title: "Paid Advertising",           body: "Meta, Snapchat, Google, YouTube, TikTok. Find winners fast, scale hard, kill losers immediately." },
    { title: "Merch Design & Fulfillment", body: "Merchandise design, sourcing, manufacturing, 3PL fulfillment, shipping, and printing handled end-to-end." },
    { title: "Shopify & Tech",             body: "Storefront buildout and optimization so your giveaway converts at every stage of the campaign." },
    { title: "Email & SMS",                body: "Full lifecycle email and SMS strategy and execution across launch, middle weeks, and final push." },
    { title: "Legal Compliance",           body: "USA and Canada sweepstakes law compliance, official rules, alternative entry methods, and all required disclosures." },
  ];

  return (
    <section className={styles.engine}>
      <div className={styles.container}>
        <p className={styles.label}>OUR SYSTEM</p>
        <h2 className={styles.sectionH2}>The Giveaway Growth Engine.</h2>
        <p className={styles.sectionBody}>
          A fully turnkey system that handles everything from giveaway strategy
          through physical fulfillment. You source and customize the vehicle.
          We handle every single thing after that. The only variable is how fast
          you want to grow.
        </p>
        <div className={styles.serviceGrid}>
          {services.map((s) => (
            <div key={s.title} className={styles.serviceTile}>
              <h3 className={styles.serviceTileTitle}>{s.title}</h3>
              <p className={styles.serviceTileBody}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Who It's For ────────────────────────────────────────── */
function WhoItsFor() {
  const clients = [
    {
      title: "Giveaway Brands",
      body: "Your core business model IS giveaways. You need a growth partner who understands the full revenue cycle, scales your ad spend intelligently, and keeps operations running clean.",
    },
    {
      title: "Influencers",
      body: "You have 500K+ followers and real audience trust. We turn that into a revenue-generating giveaway business built entirely around your personal brand.",
    },
    {
      title: "Ecom Brands",
      body: "You run an established ecommerce brand and want to use giveaways as a high-leverage promotional lever to grow your audience, spike revenue, and acquire new customers.",
    },
  ];

  return (
    <section className={styles.whoItsFor}>
      <div className={styles.container}>
        <p className={styles.label}>WHO WE WORK WITH</p>
        <h2 className={styles.sectionH2}>Built for Three Types of Operators.</h2>
        <div className={styles.clientGrid}>
          {clients.map((c) => (
            <div key={c.title} className={styles.clientCard}>
              <h3 className={styles.clientCardTitle}>{c.title}</h3>
              <p className={styles.clientCardBody}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Results ─────────────────────────────────────────────── */
function Results() {
  const stats = [
    { value: "$4.65M", sub: "↑ $240K", label: "Net profit in 12 months" },
    { value: "$3.85M", sub: "↑ $750K", label: "Annual profit growth" },
    { value: "3× Revenue", sub: "↑ 5× Profit", label: "In first 12 months" },
    { value: "$250M+",     sub: null,  label: "Generated for clients in 2025" },
    { value: "400+",       sub: null,  label: "Successful giveaways fulfilled" },
    { value: "0",          sub: null,  label: "Clients ever lost" },
  ];

  return (
    <section className={styles.results}>
      <div className={styles.container}>
        <p className={styles.label}>PROOF</p>
        <h2 className={styles.sectionH2}>The Numbers Don&rsquo;t Lie.</h2>
        <p className={styles.sectionBody}>
          We don&rsquo;t win on price. We win on results. Every number below
          represents a real brand that trusted us with their growth and got a
          return that changed their business.
        </p>
        <div className={styles.resultsGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.resultCard}>
              <span className={styles.resultValue}>{s.value}</span>
              {s.sub && <span className={styles.resultSub}>{s.sub}</span>}
              <span className={styles.resultLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ───────────────────────────────────────────── */
function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <div className={styles.container}>
        <h2 className={styles.ctaH2}>Ready to Scale With the Best?</h2>
        <p className={styles.ctaSub}>
          We are selective about who we work with. If you are serious about
          building a profitable giveaway business, apply below. If you are a
          fit, we will be in touch within 2 business days to schedule a
          discovery call.
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
        <a href="/blog">Blog</a>
      </nav>
      <span className={styles.footerCopy}>
        &copy; {new Date().getFullYear()} LeftLane Marketing LLC. All rights reserved.
      </span>
    </footer>
  );
}

/* ── Page ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Engine />
        <WhoItsFor />
        <Results />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

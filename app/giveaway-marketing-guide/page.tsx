import type { Metadata } from 'next';
import Nav from '@/components/Nav/Nav';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Giveaway Marketing Guide: How to Run a Vehicle Giveaway | LeftLane Marketing',
  description:
    "Learn how to run a profitable vehicle giveaway with LeftLane Marketing's complete guide. 400+ giveaways. $250M+ generated. See if you qualify.",
  openGraph: {
    title: 'Giveaway Marketing Guide | LeftLane Marketing',
    description:
      "Learn how to run a profitable vehicle giveaway with LeftLane Marketing's complete guide. 400+ giveaways. $250M+ generated. See if you qualify.",
  },
};

const faqs = [
  {
    q: 'How long does it take to launch a giveaway?',
    a: 'Most brands can go from signed agreement to live campaign in 4 to 6 weeks. That includes strategy development, creative production, Shopify buildout, merchandise sourcing, legal setup, and ad account preparation. If you already have a vehicle selected and your brand assets ready, it can move faster. We handle the entire buildout so you are not scrambling to figure it out yourself.',
  },
  {
    q: 'Do I need to already have an audience?',
    a: 'Having an existing audience helps but is not required. We have launched successful giveaways for brands with zero social following by running paid traffic from day one. The giveaway itself becomes the audience-building engine. That said, brands with 50K+ followers tend to see faster traction because organic reach compounds on top of paid. We tailor the strategy to wherever you are starting from.',
  },
  {
    q: 'What kinds of vehicles work best for giveaways?',
    a: 'Trucks, Jeeps, UTVs, and adventure-style builds consistently outperform everything else. The vehicle needs to be aspirational and visually compelling. A stock sedan off a dealer lot will not generate the entry volume you need. Custom builds with lifted suspensions, aftermarket wheels, branded wraps, and lifestyle accessories create emotional engagement that drives purchases. The more shareable the vehicle looks, the better your campaign will perform.',
  },
  {
    q: 'How do you handle winner selection and fulfillment?',
    a: 'We manage the entire fulfillment process from winner drawing through vehicle delivery. Winner selection is conducted through a verified random drawing that complies with all applicable sweepstakes laws. We handle winner notification, identity verification, tax documentation, title transfer, shipping logistics, and delivery coordination. We have fulfilled over 400 vehicle giveaways and have the process down to a system.',
  },
  {
    q: 'Is giveaway marketing legal?',
    a: 'Yes. Sweepstakes are legal in all 50 US states and Canada when structured correctly. Every campaign requires official rules, a no-purchase-necessary alternative entry method, proper disclosures, void-where-prohibited language, and compliance with state-specific registration requirements. We handle all of this. Legal compliance is one of the biggest reasons brands need an experienced partner rather than trying to run giveaways on their own.',
  },
  {
    q: 'What makes LeftLane different from other agencies?',
    a: 'We built one of the most successful giveaway brands on the internet before we helped anyone else. We are not an agency that learned giveaways from a course. We ran them ourselves for over a decade, changed 50+ lives through our own campaigns, and generated $250M+ for clients in 2025 alone. We are the only fully turnkey giveaway system that handles everything from strategy through physical fulfillment. And we have never lost a client.',
  },
  {
    q: 'How do I get started?',
    a: 'Submit an application through our Apply page. We review every application personally and respond within 2 business days. If you are a fit, we will schedule a discovery call to learn about your brand, your goals, and whether the giveaway model makes sense for your business. We are selective about who we work with because our reputation depends on every client succeeding.',
  },
];

export default function GiveawayMarketingGuide() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Nav />

      <main className={styles.main}>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <p className={styles.label}>THE DEFINITIVE RESOURCE</p>
            <h1 className={styles.heroH1}>
              The Complete Guide to Giveaway Marketing: How Top Brands Generate Millions
            </h1>
            <p className={styles.heroSub}>
              Learn the exact system LeftLane Marketing has used to run 400+ vehicle
              giveaways and generate $250M+ for clients.
            </p>
            <a href="/apply" className={styles.btnPrimary}>
              Apply to Work With Us
            </a>
          </div>
        </section>

        {/* ── Table of Contents ─────────────────────────── */}
        <section className={styles.tocSection}>
          <div className={styles.container}>
            <div className={styles.tocCard}>
              <h2 className={styles.tocTitle}>What You Will Learn</h2>
              <ol className={styles.tocList}>
                <li><a href="#what-is-giveaway-marketing">What Is Giveaway Marketing?</a></li>
                <li><a href="#why-vehicle-giveaways-work">Why Vehicle Giveaways Work Better Than Traditional Ads</a></li>
                <li><a href="#giveaway-growth-engine">The Giveaway Growth Engine: Our Proven System</a></li>
                <li><a href="#vehicle-giveaway-cost">How Much Does a Vehicle Giveaway Cost?</a></li>
                <li><a href="#giveaway-marketing-results">Real Results: What Our Clients Have Achieved</a></li>
                <li><a href="#is-giveaway-marketing-right-for-you">Who Is Giveaway Marketing Right For?</a></li>
                <li><a href="#choose-giveaway-marketing-agency">How to Choose a Giveaway Marketing Agency</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ── Section 1: What Is Giveaway Marketing ────── */}
        <section id="what-is-giveaway-marketing" className={styles.section}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>SECTION 1</p>
            <h2 className={styles.sectionH2}>What Is Giveaway Marketing?</h2>
            <div className={styles.prose}>
              <p>
                Giveaway marketing is a customer acquisition and revenue generation strategy
                where brands use sweepstakes and prize-based campaigns to drive traffic,
                build email lists, and generate sales at scale. Instead of running discounts
                or traditional promotions, brands offer a high-value prize, typically a
                custom vehicle, and sell merchandise or entries to fund the campaign.
              </p>
              <p>
                The model works because it creates a compelling exchange. Customers get a
                shot at winning something they genuinely want. Brands get purchases, email
                addresses, social followers, and customer data they can monetize across
                future campaigns. When executed correctly, the giveaway pays for itself and
                produces significant profit on top.
              </p>
              <p>
                This is not a gimmick or a growth hack. It is a complete business model
                that has generated over <a href="/results">$250M for LeftLane clients</a> in
                2025 alone. The brands using this model are running 6 to 10 campaigns per
                year and scaling revenue predictably with each one.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 2: Why Vehicle Giveaways Work ───── */}
        <section id="why-vehicle-giveaways-work" className={styles.sectionAlt}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>SECTION 2</p>
            <h2 className={styles.sectionH2}>Why Vehicle Giveaways Work Better Than Traditional Ads</h2>
            <div className={styles.prose}>
              <p>
                Vehicles are the most effective giveaway prize category for one reason.
                They generate an immediate emotional response. A custom-built truck or a
                fully loaded Jeep stops the scroll in a way that a discount code never will.
                That emotional reaction is what drives shares, tags, saves, and ultimately
                purchases.
              </p>
              <p>
                The cost per lead on a well-run vehicle giveaway is a fraction of what
                brands pay through Meta or Google ads for the same quality of customer.
                Giveaway entrants give you their email, their phone number, and their
                purchase data. You own that relationship from day one. With traditional ads,
                you are renting attention on someone else&rsquo;s platform and starting from
                zero every time your budget runs out.
              </p>
              <p>
                Giveaway campaigns also create compounding returns. Each campaign builds
                your email list, grows your social following, and trains your ad
                algorithms. The second campaign always outperforms the first. The third
                outperforms the second. Over 12 months, the gap between giveaway marketing
                ROI and traditional ad ROI becomes enormous.
              </p>
            </div>

            <div className={styles.comparisonBox}>
              <h3 className={styles.comparisonTitle}>Giveaway Marketing vs Traditional Advertising</h3>
              <div className={styles.comparisonGrid}>
                <div className={styles.comparisonHeader}>
                  <span>Factor</span>
                  <span>Traditional Ads</span>
                  <span>Giveaway Marketing</span>
                </div>
                {[
                  ['Cost per lead', '$5 to $25+', '$0.50 to $3'],
                  ['Email/SMS capture', 'Low opt-in rates', 'Built into every purchase'],
                  ['Social growth', 'Minimal organic lift', '10K to 100K+ new followers per campaign'],
                  ['Repeat purchases', 'Requires retargeting spend', 'Built-in with next giveaway cycle'],
                  ['Brand virality', 'Rare without UGC', 'Sharing is incentivized by entries'],
                ].map(([factor, trad, give]) => (
                  <div key={factor} className={styles.comparisonRow}>
                    <span className={styles.compFactor}>{factor}</span>
                    <span className={styles.compTrad}>{trad}</span>
                    <span className={styles.compGive}>{give}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: The Giveaway Growth Engine ───── */}
        <section id="giveaway-growth-engine" className={styles.section}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>SECTION 3</p>
            <h2 className={styles.sectionH2}>The Giveaway Growth Engine: Our Proven System</h2>
            <div className={styles.prose}>
              <p>
                LeftLane does not run individual campaigns. We install a complete revenue
                system inside your business. We call it The Giveaway Growth Engine. It
                handles everything from initial strategy through physical vehicle delivery
                to the winner. You source the vehicle. We handle everything else.
              </p>
              <p>
                This system has been refined over 400+ campaigns and 10 years of operator
                experience. Every step is designed to maximize revenue during the campaign
                and build long-term customer value after it ends.
              </p>
            </div>

            <div className={styles.steps}>
              {[
                { num: '01', title: 'Strategy & Planning', desc: 'We build your campaign playbook. Prize selection, pricing, entry structure, timeline, and revenue targets. Every campaign starts with a plan built on real data from 400+ campaigns.' },
                { num: '02', title: 'Creative & Ad Production', desc: 'We develop the messaging, creative direction, and ad assets for Meta, Snapchat, Google, YouTube, and TikTok. Giveaway ads move faster and more aggressively than traditional ecom creative.' },
                { num: '03', title: 'Traffic & Acquisition', desc: 'We drive qualified traffic to your giveaway storefront through paid advertising. Find winners fast, scale hard, kill losers immediately. No slow agency pacing.' },
                { num: '04', title: 'Entry Flow & Conversion', desc: 'Shopify storefront optimized for giveaway conversion. Entry multipliers replace discounts. Merchandise bundles drive higher AOV. Every touchpoint is designed to convert.' },
                { num: '05', title: 'Email & SMS Nurture', desc: 'Full lifecycle messaging from launch through final week. Automated flows for abandoned carts, entry confirmations, mini promo announcements, and scarcity countdowns.' },
                { num: '06', title: 'Fulfillment & Delivery', desc: 'Merchandise fulfillment, customer support, winner selection, legal compliance, tax documentation, title transfer, and physical vehicle delivery. All handled by our team.' },
              ].map((step) => (
                <div key={step.num} className={styles.step}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Cost ────────────────────────── */}
        <section id="vehicle-giveaway-cost" className={styles.sectionAlt}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>SECTION 4</p>
            <h2 className={styles.sectionH2}>How Much Does a Vehicle Giveaway Cost?</h2>
            <div className={styles.prose}>
              <p>
                The total investment for a vehicle giveaway depends on the prize value and
                scale of the campaign. The vehicle itself is the largest line item, ranging
                from $30,000 for an entry-level build to $150,000+ for a fully customized
                truck, toy hauler, and UTV package. Our highest-end campaigns through
                Enthuzst ran $350,000 adventure setups.
              </p>
              <p>
                Ad spend typically runs $10,000 to $50,000 per month depending on audience
                size and campaign aggressiveness. Platform costs, merchandise production,
                fulfillment, and customer service add another layer. The rule of thumb is
                that you need 3x the prize value in revenue to break even. One third covers
                the prize. One third covers ad spend. One third covers COGS and operations.
              </p>
              <p>
                Once the prize is paid off, profit margins expand rapidly. Clients
                routinely generate 3 to 10x their total investment when running the system
                correctly. A $100,000 prize campaign generating $500,000 in revenue is a
                realistic outcome for a well-executed first campaign. Read more about real
                client results on our <a href="/results">Results page</a>.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 5: Results ──────────────────────── */}
        <section id="giveaway-marketing-results" className={styles.section}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>SECTION 5</p>
            <h2 className={styles.sectionH2}>Real Results: What Our Clients Have Achieved</h2>
            <div className={styles.prose}>
              <p>
                These are real numbers from real clients. Not projections. Not case studies
                with asterisks. Every stat below came from campaigns we managed end-to-end.
              </p>
            </div>

            <div className={styles.resultsGrid}>
              {[
                { value: '$240K → $4.65M', label: 'Net profit growth in 12 months' },
                { value: '$750K → $3.85M', label: 'Annual profit scaling' },
                { value: '3x Revenue, 5x Profit', label: 'In first 12 months with LeftLane' },
                { value: '$75M+', label: 'Generated across 50+ giveaways over 9 years with one client' },
                { value: '$250M+', label: 'Generated for clients in 2025 alone' },
                { value: '400+', label: 'Successful vehicle giveaways fulfilled' },
                { value: '0', label: 'Clients ever lost' },
              ].map((s) => (
                <div key={s.label} className={styles.resultCard}>
                  <span className={styles.resultValue}>{s.value}</span>
                  <span className={styles.resultLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.resultsCta}>
              <a href="/results" className={styles.btnSecondary}>
                See Full Results →
              </a>
            </div>
          </div>
        </section>

        {/* ── Section 6: Who Is It For ────────────────── */}
        <section id="is-giveaway-marketing-right-for-you" className={styles.sectionAlt}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>SECTION 6</p>
            <h2 className={styles.sectionH2}>Who Is Giveaway Marketing Right For?</h2>
            <div className={styles.twoCol}>
              <div className={styles.fitCard}>
                <h3 className={styles.fitTitle}>Good Fit</h3>
                <ul className={styles.fitList}>
                  <li>Existing brand with a product and audience</li>
                  <li>$500K+ annual revenue</li>
                  <li>Willing to invest in a high-value vehicle prize</li>
                  <li>Automotive, outdoor, or lifestyle niche</li>
                  <li>Ready for aggressive, data-driven growth</li>
                  <li>Influencers with 500K+ followers looking to monetize</li>
                </ul>
              </div>
              <div className={styles.notFitCard}>
                <h3 className={styles.notFitTitle}>Not the Right Fit</h3>
                <ul className={styles.fitList}>
                  <li>Brand new business with no product or revenue</li>
                  <li>No existing audience and no budget for paid traffic</li>
                  <li>Not willing to invest in a vehicle prize ($50K minimum)</li>
                  <li>Looking for a cheap marketing tactic, not a system</li>
                  <li>Unwilling to commit to a 6-week campaign cycle</li>
                </ul>
              </div>
            </div>
            <div className={styles.prose}>
              <p>
                If you are on the fence, the best move is
                to <a href="/apply">submit an application</a>. Our team will review your
                brand, your revenue, and your goals and tell you honestly whether the
                giveaway model is the right fit right now. We turn down brands that are not
                ready because our reputation depends on every client succeeding.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 7: Choosing an Agency ───────────── */}
        <section id="choose-giveaway-marketing-agency" className={styles.section}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>SECTION 7</p>
            <h2 className={styles.sectionH2}>How to Choose a Giveaway Marketing Agency</h2>
            <div className={styles.prose}>
              <p>
                Not all agencies are equal, especially in this niche. Most marketing
                agencies have never run a single vehicle giveaway. Here are the five things
                to evaluate before you trust anyone with your campaign.
              </p>
            </div>
            <div className={styles.checklistGrid}>
              {[
                { title: 'Proven Track Record', desc: 'Ask for specific numbers. How many giveaways have they run? What results did they produce? LeftLane has run 400+ campaigns and generated $250M+ for clients.' },
                { title: 'Fulfillment Experience', desc: 'Running ads is one piece. Can they handle merchandise, shipping, customer support, and vehicle delivery? LeftLane manages the entire fulfillment pipeline.' },
                { title: 'Meta Agency Partner Status', desc: 'This designation means the agency manages significant ad spend at a high level of performance. LeftLane is a certified Meta Agency Partner.' },
                { title: 'Full-Service, Not Just Ads', desc: 'If the agency only runs your ads, you still need to figure out operations, legal, email, merch, and fulfillment yourself. LeftLane is the only fully turnkey giveaway system.' },
                { title: 'Client References', desc: 'Ask to talk to current clients. Ask about communication, results, and whether they would work with the agency again. LeftLane has never lost a client. That is the only reference you need.' },
              ].map((item) => (
                <div key={item.title} className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <div>
                    <h3 className={styles.checkTitle}>{item.title}</h3>
                    <p className={styles.checkDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 8: FAQ ──────────────────────────── */}
        <section id="faq" className={styles.sectionAlt}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>SECTION 8</p>
            <h2 className={styles.sectionH2}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {faqs.map((faq, i) => (
                <details key={i} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{faq.q}</summary>
                  <p className={styles.faqA}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ───────────────────────────────── */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <h2 className={styles.ctaH2}>Ready to Build Your Giveaway Growth Engine?</h2>
            <p className={styles.ctaSub}>
              We only work with a limited number of clients at a time. Apply now to see if
              you qualify.
            </p>
            <a href="/apply" className={styles.btnPrimary}>
              Apply to Work With Us
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────────── */}
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
    </>
  );
}

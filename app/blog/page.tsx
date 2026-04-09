import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav/Nav';
import { blogPosts } from '@/lib/blog-posts';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Giveaway Marketing Blog | LeftLane Marketing',
  description:
    "The LeftLane Marketing blog. Strategy, insights, and data from 400+ vehicle giveaway campaigns.",
  openGraph: {
    title: 'Giveaway Marketing Blog | LeftLane Marketing',
    description:
      "The LeftLane Marketing blog. Strategy, insights, and data from 400+ vehicle giveaway campaigns.",
  },
};

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.container}>
            <p className={styles.label}>GIVEAWAY MARKETING INSIGHTS</p>
            <h1 className={styles.headline}>The LeftLane Blog</h1>
            <p className={styles.sub}>
              Strategy, data, and hard-won lessons from 400+ vehicle giveaways
              and $250M in client revenue.
            </p>
          </div>
        </header>

        <section className={styles.grid}>
          <div className={styles.container}>
            <div className={styles.postGrid}>
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={styles.card}
                >
                  <span className={styles.cardCategory}>{post.category}</span>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardTime}>{post.readTime}</span>
                    <span className={styles.cardLink}>Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

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
          &copy; {new Date().getFullYear()} LeftLane Marketing LLC. All rights
          reserved.
        </span>
      </footer>
    </>
  );
}

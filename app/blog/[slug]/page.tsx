import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav/Nav';
import { blogPosts } from '@/lib/blog-posts';
import styles from './page.module.css';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={`h2-${i}`} className={styles.contentH2}>
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${i}`} className={styles.contentH3}>
          {line.slice(4)}
        </h3>
      );
    } else if (line.trim() === '') {
      // skip blank lines
    } else {
      elements.push(
        <p key={`p-${i}`} className={styles.contentP}>
          {line}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    author: { '@type': 'Organization', name: 'LeftLane Marketing' },
    publisher: { '@type': 'Organization', name: 'LeftLane Marketing' },
    datePublished: '2026-04-01',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Nav />

      <main className={styles.main}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumbWrap}>
          <div className={styles.container}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span className={styles.breadcrumbSep}>›</span>
              <Link href="/blog">Blog</Link>
              <span className={styles.breadcrumbSep}>›</span>
              <span className={styles.breadcrumbCurrent}>{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Post header */}
        <header className={styles.postHeader}>
          <div className={styles.container}>
            <span className={styles.category}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.subtitle}>{post.subtitle}</p>
            <div className={styles.meta}>
              <span>LeftLane Marketing Team</span>
              <span className={styles.metaDot}>·</span>
              <span>{post.publishDate}</span>
              <span className={styles.metaDot}>·</span>
              <span>{post.readTime}</span>
            </div>
            <div className={styles.headerRule} />
          </div>
        </header>

        {/* Post body */}
        <article className={styles.article}>
          <div className={styles.container}>
            {renderContent(post.content)}
          </div>
        </article>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {post.faqs.map((faq, idx) => (
                <div key={idx} className={styles.faqItem}>
                  <h3 className={styles.faqQ}>{faq.question}</h3>
                  <p className={styles.faqA}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Box */}
        <section className={styles.ctaBox}>
          <div className={styles.container}>
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaHeading}>Ready to Run Your Own Giveaway?</h2>
              <p className={styles.ctaSub}>
                We have run 400+ vehicle giveaways and generated $250M+ for our
                clients. If you are serious about building a profitable giveaway
                business, apply to work with us.
              </p>
              <a href="/apply" className={styles.ctaBtn}>
                Apply to Work With Us
              </a>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.relatedHeading}>Keep Reading</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className={styles.relatedCard}
                >
                  <span className={styles.relatedCategory}>{r.category}</span>
                  <h3 className={styles.relatedTitle}>{r.title}</h3>
                  <span className={styles.relatedTime}>{r.readTime}</span>
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

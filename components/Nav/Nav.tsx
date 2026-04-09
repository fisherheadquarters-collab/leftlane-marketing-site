'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen]);

  return (
    <div ref={menuRef}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logoLink}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/leftlane-logo.png"
            alt="LeftLane Marketing"
            style={{ height: '44px', width: 'auto', mixBlendMode: 'screen' }}
          />
        </a>

        {/* Desktop links */}
        <div className={styles.desktopLinks}>
          <a href="/results" className={styles.link}>Results</a>
          <a href="/giveaway-marketing-guide" className={styles.link}>Free Guide</a>
          <a href="/blog" className={styles.link}>Blog</a>
          <a href="/apply" className={styles.cta}>Apply to Work With Us</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          type="button"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <a href="/results" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
          Results
        </a>
        <a href="/giveaway-marketing-guide" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
          Free Guide
        </a>
        <a href="/blog" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
          Blog
        </a>
        <a href="/apply" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
          Apply to Work With Us
        </a>
      </div>
    </div>
  );
}

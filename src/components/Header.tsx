'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className="site-header" role="banner">
        <div className="header-container">
          <div className="brand-group">
            <Link href="/" className="brand-logo" onClick={closeMobileMenu}>
              <span className="brand-title">Computer Basics Made Simple</span>
              <span className="brand-tagline">Bright Future Academy • Chakswari</span>
            </Link>
          </div>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>

          <nav
            className={`main-nav ${mobileMenuOpen ? 'is-open' : ''}`}
            role="navigation"
            aria-label="Main Navigation"
          >
            <ul className="nav-list">
              <li>
                <Link href="/" className="nav-link" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/what-is-a-computer" className="nav-link" onClick={closeMobileMenu}>
                  Start Here
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="nav-link" onClick={closeMobileMenu}>
                  A-Z Glossary
                </Link>
              </li>
              <li>
                <Link href="/about" className="nav-link" onClick={closeMobileMenu}>
                  About & Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

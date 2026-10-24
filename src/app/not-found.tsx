import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-container" role="region" aria-label="Page not found">
      <p className="not-found-code">404</p>
      <h1 className="not-found-title">Oops! Page Not Found</h1>
      <p className="not-found-desc">
        We could not find the web page you were looking for. The link might be typed incorrectly, or the page may have moved. Don&apos;t worry—computer mistakes happen to everyone!
      </p>

      <div className="not-found-links">
        <Link href="/" className="btn-primary">
          Back to Home Page →
        </Link>
        <Link href="/what-is-a-computer" className="btn-secondary" style={{ color: 'var(--navy-900)', borderColor: 'var(--navy-900)' }}>
          Start Lesson 1: What is a Computer?
        </Link>
        <Link href="/glossary" className="btn-secondary" style={{ color: 'var(--navy-900)', borderColor: 'var(--navy-900)' }}>
          Browse A-Z Glossary
        </Link>
      </div>
    </div>
  );
}

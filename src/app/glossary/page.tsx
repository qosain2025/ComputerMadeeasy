import type { Metadata } from 'next';
import { glossaryTerms, glossaryLetters } from '../../data/glossary';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { getCanonicalUrl, generateBreadcrumbJsonLd } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'A to Z Computer Glossary | Simple Definitions for Beginners',
  description:
    'Browse our comprehensive A to Z dictionary of simple computer words. Plain English explanations of CPU, RAM, hardware, software, cookies, URLs, and more.',
  alternates: {
    canonical: getCanonicalUrl('/glossary'),
  },
  openGraph: {
    title: 'A to Z Computer Glossary | Simple Definitions for Beginners',
    description:
      'Browse our comprehensive A to Z dictionary of simple computer words. Plain English explanations with real-world examples.',
    url: getCanonicalUrl('/glossary'),
  },
};

export default function GlossaryPage() {
  const breadcrumbs = [{ label: 'A to Z Glossary', href: '/glossary' }];

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'A to Z Glossary', path: '/glossary' },
  ]);

  const definedTermSetJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'A to Z Computer Glossary for Beginners',
    description: 'A beginner-friendly dictionary of essential computer and technology terminology.',
    url: getCanonicalUrl('/glossary'),
    hasDefinedTerm: glossaryTerms.map((term) => ({
      '@type': 'DefinedTerm',
      name: term.term,
      description: term.simpleDefinition,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetJsonLd) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="glossary-page-container">
        <header className="glossary-hero">
          <h1 className="glossary-h1">A to Z Simple Computer Glossary</h1>
          <p className="glossary-intro">
            Confused by tech jargon? Here is our curated dictionary of fundamental computer terms explained in very simple English with everyday examples.
          </p>

          {/* Quick Letter Navigation Bar */}
          <nav className="letter-nav-bar" aria-label="Jump to letter in glossary">
            {glossaryLetters.map((letter) => (
              <a key={letter} href={`#letter-${letter}`} className="letter-btn">
                {letter}
              </a>
            ))}
          </nav>
        </header>

        {/* Glossary Terms List */}
        <div className="glossary-list-grid">
          {glossaryTerms.map((item, index) => (
            <article key={index} id={`letter-${item.letter}`} className="glossary-card">
              <div className="glossary-card-header">
                <h2 className="glossary-term">{item.term}</h2>
                <span className="glossary-cat-tag">{item.category}</span>
              </div>
              <p className="glossary-definition">{item.simpleDefinition}</p>
              <div className="glossary-example-box">
                <strong>Everyday Example: </strong>
                {item.example}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

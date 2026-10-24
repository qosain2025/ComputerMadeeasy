import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allLessons, getLessonBySlug } from '../../data/lessons';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Diagram } from '../../components/Diagram';
import { TestYourself } from '../../components/TestYourself';
import { FaqSection } from '../../components/FaqSection';
import { LessonNavigation } from '../../components/LessonNavigation';
import {
  getCanonicalUrl,
  generateBreadcrumbJsonLd,
  generateArticleJsonLd,
  generateFaqJsonLd,
} from '../../lib/seo';

interface LessonPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return allLessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    return {
      title: 'Lesson Not Found',
    };
  }

  const canonicalUrl = getCanonicalUrl(lesson.slug);

  return {
    title: lesson.metaTitle,
    description: lesson.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: lesson.metaTitle,
      description: lesson.metaDescription,
      url: canonicalUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: lesson.metaTitle,
      description: lesson.metaDescription,
    },
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  const breadcrumbs = [
    { label: lesson.category },
    { label: lesson.shortTitle, href: `/${lesson.slug}` },
  ];

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: lesson.category, path: `/#learning-path` },
    { name: lesson.shortTitle, path: `/${lesson.slug}` },
  ]);

  const articleJsonLd = generateArticleJsonLd({
    title: lesson.title,
    metaDescription: lesson.metaDescription,
    slug: lesson.slug,
    category: lesson.category,
  });

  const faqJsonLd = generateFaqJsonLd(lesson.faqs);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <article className="lesson-article" itemScope itemType="https://schema.org/Article">
        <header className="lesson-header">
          <span className="lesson-category-pill">{lesson.category}</span>
          <h1 className="lesson-h1" itemProp="headline">
            {lesson.h1}
          </h1>
          <div className="lesson-meta-bar">
            <span>Lesson {lesson.order} of 11</span>
            <span>•</span>
            <span>{lesson.readingTime}</span>
            <span>•</span>
            <span>Level: Absolute Beginner</span>
          </div>

          {/* Direct Answer Box (Answers the title immediately) */}
          <div className="direct-answer-box" role="region" aria-label="Direct answer to lesson question">
            <p className="direct-answer-label">Direct Answer (In Plain English)</p>
            <p className="direct-answer-text">{lesson.directAnswer}</p>
          </div>
        </header>

        {/* Quick Summary Box */}
        <div className="quick-summary-box" role="region" aria-label="Quick lesson summary">
          <h2 className="summary-heading">
            <span aria-hidden="true">📋</span> Quick Summary of What You Will Learn
          </h2>
          <ul className="summary-list">
            {lesson.summary.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Inline SVG Diagram */}
        {lesson.diagramType && <Diagram type={lesson.diagramType} />}

        {/* Main Lesson Body */}
        <div className="lesson-body" itemProp="articleBody">
          {lesson.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.h2}</h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}

              {section.callout && (
                <aside className={`callout-box ${section.callout.type}`}>
                  <h3 className="callout-title">{section.callout.title}</h3>
                  <p className="callout-text">{section.callout.text}</p>
                </aside>
              )}

              {section.bullets && (
                <ul>
                  {section.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              )}

              {section.subsections &&
                section.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="lesson-subsection">
                    <h3>{sub.h3}</h3>
                    {sub.paragraphs.map((subP, spIdx) => (
                      <p key={spIdx}>{subP}</p>
                    ))}
                    {sub.analogy && (
                      <div className="callout-box analogy">
                        <p className="callout-text">{sub.analogy}</p>
                      </div>
                    )}
                    {sub.bullets && (
                      <ul>
                        {sub.bullets.map((sb, sbIdx) => (
                          <li key={sbIdx}>{sb}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </section>
          ))}
        </div>

        {/* Comparison Table if Present */}
        {lesson.comparisonTable && (
          <div className="table-wrapper">
            <h2 className="table-title">{lesson.comparisonTable.title}</h2>
            {lesson.comparisonTable.caption && (
              <p className="table-caption">{lesson.comparisonTable.caption}</p>
            )}
            <table className="comparison-table">
              <thead>
                <tr>
                  {lesson.comparisonTable.headers.map((h, hIdx) => (
                    <th key={hIdx} scope="col">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lesson.comparisonTable.rows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Practice Exercise if Present */}
        {lesson.practiceExercise && (
          <aside className="practice-box" aria-label="Practice exercise">
            <h2 className="practice-title">✏️ {lesson.practiceExercise.title}</h2>
            <p className="practice-scenario">{lesson.practiceExercise.scenario}</p>
            <ol className="practice-steps">
              {lesson.practiceExercise.steps.map((step, sIdx) => (
                <li key={sIdx}>{step}</li>
              ))}
            </ol>
            {lesson.practiceExercise.sampleResult && (
              <div className="practice-result">
                <strong>Expected Result: </strong>
                {lesson.practiceExercise.sampleResult}
              </div>
            )}
          </aside>
        )}

        {/* 5 FAQs Section */}
        <FaqSection faqs={lesson.faqs} />

        {/* Test Yourself Section */}
        <TestYourself items={lesson.testYourself} />

        {/* Lesson Progression & Related Lessons */}
        <LessonNavigation
          previousSlug={lesson.previousSlug}
          nextSlug={lesson.nextSlug}
          relatedSlugs={lesson.relatedSlugs}
        />
      </article>
    </>
  );
}

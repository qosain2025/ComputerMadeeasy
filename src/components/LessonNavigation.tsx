import React from 'react';
import Link from 'next/link';
import { Lesson } from '../types';
import { getLessonBySlug } from '../data/lessons';

interface LessonNavigationProps {
  previousSlug?: string;
  nextSlug?: string;
  relatedSlugs: string[];
}

export function LessonNavigation({
  previousSlug,
  nextSlug,
  relatedSlugs,
}: LessonNavigationProps) {
  const prevLesson = previousSlug ? getLessonBySlug(previousSlug) : undefined;
  const nextLesson = nextSlug ? getLessonBySlug(nextSlug) : undefined;
  const relatedLessons = relatedSlugs
    .map((slug) => getLessonBySlug(slug))
    .filter((lesson): lesson is Lesson => !!lesson)
    .slice(0, 3);

  return (
    <nav className="lesson-nav-section" aria-label="Lesson progression and related content">
      {/* Previous / Next buttons */}
      <div className="prev-next-container">
        {prevLesson ? (
          <Link href={`/${prevLesson.slug}`} className="nav-step-card prev-card">
            <span className="step-direction">← Previous Lesson</span>
            <span className="step-title">{prevLesson.shortTitle}</span>
          </Link>
        ) : (
          <div className="nav-step-card disabled">
            <span className="step-direction">First Lesson</span>
            <span className="step-title">You are at the start!</span>
          </div>
        )}

        {nextLesson ? (
          <Link href={`/${nextLesson.slug}`} className="nav-step-card next-card">
            <span className="step-direction">Next Lesson →</span>
            <span className="step-title">{nextLesson.shortTitle}</span>
          </Link>
        ) : (
          <Link href="/glossary" className="nav-step-card next-card">
            <span className="step-direction">Next Step →</span>
            <span className="step-title">Explore A-Z Glossary</span>
          </Link>
        )}
      </div>

      {/* Related 3 lessons */}
      {relatedLessons.length > 0 && (
        <div className="related-lessons-container">
          <h2 className="related-heading">Related Topics You Might Like</h2>
          <div className="related-grid">
            {relatedLessons.map((rel) => (
              <Link key={rel.slug} href={`/${rel.slug}`} className="related-card">
                <span className="related-category">{rel.category}</span>
                <h3 className="related-title">{rel.shortTitle}</h3>
                <p className="related-desc">{rel.metaDescription}</p>
                <span className="related-link-text">Read Lesson →</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

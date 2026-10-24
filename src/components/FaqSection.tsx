import React from 'react';
import { FAQItem } from '../types';

interface FaqSectionProps {
  faqs: FAQItem[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section className="faq-section" aria-label="Frequently Asked Questions">
      <h2 className="faq-heading">Frequently Asked Questions (FAQs)</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item">
            <summary className="faq-question">
              <span className="faq-question-text">{faq.question}</span>
              <span className="faq-icon" aria-hidden="true">+</span>
            </summary>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

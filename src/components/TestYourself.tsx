'use client';

import React, { useState } from 'react';
import { QuizItem } from '../types';

interface TestYourselfProps {
  items: QuizItem[];
}

export function TestYourself({ items }: TestYourselfProps) {
  const [revealed, setRevealed] = useState<{ [key: number]: boolean }>({});
  const [showHint, setShowHint] = useState<{ [key: number]: boolean }>({});

  const toggleAnswer = (index: number) => {
    setRevealed((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleHint = (index: number) => {
    setShowHint((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="quiz-container" aria-label="Test yourself quiz section">
      <div className="quiz-header">
        <h2 className="quiz-title">Test Yourself: 5 Quick Questions</h2>
        <p className="quiz-subtitle">
          Test what you learned in this lesson before moving on. Try answering in your mind first, then click &quot;Check Answer&quot;.
        </p>
      </div>

      <div className="quiz-list">
        {items.map((item, index) => {
          const isAnswerShown = !!revealed[index];
          const isHintShown = !!showHint[index];

          return (
            <div key={index} className="quiz-card">
              <div className="quiz-question-row">
                <span className="quiz-badge">Question {index + 1}</span>
                <h3 className="quiz-question-text">{item.question}</h3>
              </div>

              {item.hint && (
                <div className="quiz-hint-wrapper">
                  <button
                    type="button"
                    onClick={() => toggleHint(index)}
                    className="quiz-hint-btn"
                    aria-expanded={isHintShown}
                  >
                    {isHintShown ? 'Hide Hint' : 'Need a Hint?'}
                  </button>
                  {isHintShown && <p className="quiz-hint-text">{item.hint}</p>}
                </div>
              )}

              <div className="quiz-action-wrapper">
                <button
                  type="button"
                  onClick={() => toggleAnswer(index)}
                  className={`quiz-reveal-btn ${isAnswerShown ? 'revealed' : ''}`}
                  aria-expanded={isAnswerShown}
                >
                  {isAnswerShown ? 'Hide Answer' : 'Check Answer'}
                </button>

                {isAnswerShown && (
                  <div className="quiz-answer-box" role="region" aria-live="polite">
                    <p className="quiz-answer-label">Correct Answer:</p>
                    <p className="quiz-answer-content">{item.answer}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

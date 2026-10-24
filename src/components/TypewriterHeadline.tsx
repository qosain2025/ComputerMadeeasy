'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterHeadlineProps {
  fullText: string;
  prefix?: string;
}

export function TypewriterHeadline({
  fullText,
  prefix = 'Computer Basics Made Simple',
}: TypewriterHeadlineProps) {
  const [displayText, setDisplayText] = useState(fullText);
  const [isReducedMotion, setIsReducedMotion] = useState(true);

  useEffect(() => {
    // Check user preference for reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setIsReducedMotion(true);
      return;
    }

    setIsReducedMotion(false);
    setDisplayText(''); // Start empty for typing effect

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 45); // gentle, readable speed

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <h1 className="hero-headline">
      <span className="hero-prefix">{prefix}</span>
      <span className="hero-animated-wrap">
        <span className="hero-typed-text">{isReducedMotion ? fullText : displayText}</span>
        {!isReducedMotion && <span className="typewriter-cursor" aria-hidden="true">|</span>}
      </span>
    </h1>
  );
}

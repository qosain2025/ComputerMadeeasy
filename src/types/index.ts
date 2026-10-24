export interface LessonSection {
  id: string;
  h2: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: {
    h3: string;
    paragraphs: string[];
    bullets?: string[];
    analogy?: string;
  }[];
  callout?: {
    type: 'note' | 'tip' | 'warning' | 'analogy';
    title: string;
    text: string;
  };
}

export interface ComparisonTable {
  title: string;
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface PracticeExercise {
  title: string;
  scenario: string;
  steps: string[];
  sampleResult?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QuizItem {
  question: string;
  answer: string;
  hint?: string;
}

export interface Lesson {
  slug: string;
  order: number;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  directAnswer: string;
  readingTime: string;
  category: string;
  summary: string[];
  sections: LessonSection[];
  diagramType?: 'ipsv' | 'parts' | 'types' | 'input-output' | 'excel-grid' | 'web-request' | 'ai-layers' | 'careers';
  comparisonTable?: ComparisonTable;
  practiceExercise?: PracticeExercise;
  faqs: FAQItem[];
  testYourself: QuizItem[];
  previousSlug?: string;
  nextSlug?: string;
  relatedSlugs: string[];
}

export interface GlossaryTerm {
  term: string;
  letter: string;
  category: string;
  simpleDefinition: string;
  example: string;
}

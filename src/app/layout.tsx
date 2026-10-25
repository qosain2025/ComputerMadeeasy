import type { Metadata } from 'next';
import '../styles/globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SITE_NAME, SITE_URL, ACADEMY_NAME, generateOrganizationJsonLd } from '../lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Computer Basics Made Simple | Free Beginner Lessons in Easy English',
    template: '%s | Computer Basics Made Simple',
  },
  description:
    'Learn computer basics in very simple English. Clear, beginner-friendly lessons on hardware, software, MS Office, Excel, websites, AI, and IT careers by Bright Future Academy, Chakswari.',
  keywords: [
    'computer basics',
    'learn computer in simple english',
    'what is a computer',
    'parts of a computer',
    'types of computers',
    'input devices',
    'output devices',
    'what is ms office',
    'what is microsoft excel',
    'what is a website',
    'what is ai',
    'types of ai',
    'careers in computer fields',
    'computer glossary',
    'Bright Future Academy Chakswari',
  ],
  authors: [{ name: ACADEMY_NAME, url: SITE_URL }],
  creator: ACADEMY_NAME,
  publisher: ACADEMY_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Computer Basics Made Simple | Free Lessons for Beginners',
    description:
      'Master essential computer skills in plain, easy English with practical examples, diagrams, and quizzes. Published by Bright Future Academy, Chakswari.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computer Basics Made Simple | Learn in Easy English',
    description:
      'Free, beginner-friendly computer education without complex jargon. Published by Bright Future Academy, Chakswari.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      'msvalidate.01': 'B2AA2036A4760C3C5A9C88A2B9FC84A6',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = generateOrganizationJsonLd();

  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3497985227910305"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

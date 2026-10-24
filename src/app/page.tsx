import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { allLessons } from '../data/lessons';
import { TypewriterHeadline } from '../components/TypewriterHeadline';
import {
  SITE_NAME,
  SITE_URL,
  FOUNDER_NAME,
  CONTACT_WHATSAPP,
  getCanonicalUrl,
} from '../lib/seo';

export const metadata: Metadata = {
  title: 'Computer Basics Made Simple | Free Computer Education for Children & Beginners Worldwide',
  description:
    'A free global computer literacy initiative founded by Raja Qosain Shamir in Azad Jammu and Kashmir. Learn computer basics in simple English with step-by-step lessons, diagrams, quizzes, and personalized 1-on-1 mentoring.',
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
  openGraph: {
    title: 'Computer Basics Made Simple | Free Computer Education for Children & Beginners',
    description:
      'Learn computers from scratch in very simple English. Built by Raja Qosain Shamir from Azad Jammu and Kashmir to empower children and students worldwide.',
    url: SITE_URL,
  },
};

export default function HomePage() {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Educational platform teaching computer fundamentals in simple English for children and beginners worldwide, founded by Raja Qosain Shamir in Azad Jammu and Kashmir.',
    inLanguage: 'en',
    creator: {
      '@type': 'Person',
      name: FOUNDER_NAME,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* Hero Section */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-content">
          <div className="hero-kashmir-badge">
            <img
              src="/kashmir-flag.jpg"
              alt="State Flag of Azad Jammu and Kashmir"
              className="hero-flag-thumb"
              width={24}
              height={16}
            />
            <span>From Azad Jammu & Kashmir to Children Worldwide</span>
          </div>

          <TypewriterHeadline
            prefix="Computer Basics Made Simple"
            fullText="Free Technology Education for Every Child"
          />

          <p className="hero-lead">
            Welcome! Whether you are a curious young student touching a keyboard for the very first time, a parent helping your child, or a beginner starting from scratch, this platform is your safe, friendly starting point. Created with care by <strong>Raja Qosain Shamir</strong> in Chakswari, Azad Jammu and Kashmir, our mission is to ensure every child around the world can learn computers with confidence, joy, and zero confusing jargon.
          </p>

          <div className="hero-cta-group">
            <Link href="/what-is-a-computer" className="btn-primary">
              Start Lesson 1: What is a Computer? →
            </Link>
            <a href="#our-mission" className="btn-secondary">
              Read Our Global Mission & Story
            </a>
          </div>
        </div>
      </section>

      {/* Human-Centered Mission & Education in Kashmir Section */}
      <section id="our-mission" className="mission-section" aria-labelledby="mission-heading">
        <div className="section-container">
          <div className="mission-card-wrapper">
            {/* Visual Flag Presentation */}
            <figure className="mission-flag-figure">
              <img
                src="/kashmir-flag.jpg"
                alt="State Flag of Azad Jammu and Kashmir waving proudly"
                className="mission-flag-img"
                width={280}
                height={498}
                loading="lazy"
              />
              <figcaption className="mission-flag-caption">
                Flag of Azad Jammu & Kashmir • Symbol of Resilience, Hope & Dedication to Learning
              </figcaption>
            </figure>

            {/* Written Story & Mission Statement */}
            <div className="mission-text-content">
              <div className="mission-title-group">
                <p className="mission-kicker">Our Human Mission & Purpose</p>
                <h2 id="mission-heading" className="mission-h2">
                  Empowering Children Around the World to Start Their Computing Journey
                </h2>
              </div>

              <p className="mission-paragraph">
                <strong>Computer Basics Made Simple</strong> was founded with a singular, heartfelt vision: <em>to break down the walls of technical confusion and give every child, student, and beginner across the globe free, equal access to high-quality computer education.</em>
              </p>

              {/* Education in Kashmir Context */}
              <div className="mission-highlight-box">
                <h3 className="mission-highlight-title">
                  Inspired by the Spirit of Education in Azad Jammu & Kashmir
                </h3>
                <p className="mission-highlight-text">
                  In <strong>Azad Jammu and Kashmir</strong>—from the vibrant town of <strong>Chakswari</strong> to the surrounding valleys of Mirpur—education has always been deeply cherished as the greatest gift a community can bestow upon its children. Despite geographical challenges and limited local resources, Kashmiri families have long demonstrated an unwavering commitment to scholarship, literacy, and community progress. It is this exact culture of perseverance and mutual support that inspired founder <strong>Raja Qosain Shamir</strong> to build this platform. We believe the bright minds of Kashmir, Pakistan, and children across every continent deserve the digital literacy required to thrive in today&apos;s interconnected world.
                </p>
              </div>

              <p className="mission-paragraph">
                Too many young learners feel discouraged because modern computer courses are full of dense academic language, rushed explanations, and expensive subscription barriers. We do things differently: every single lesson is written in simple, conversational English with real-life analogies, visual diagrams, and gentle practice exercises.
              </p>

              {/* Two Pathways: Free Self-Study & In-Depth 1-on-1 Tutoring */}
              <div className="offerings-split-grid">
                <div className="offering-box free">
                  <span className="offering-badge">100% Free Forever</span>
                  <h3 className="offering-title">Self-Paced Online Library</h3>
                  <p className="offering-desc">
                    All 11 comprehensive lessons, interactive quizzes, visual diagrams, and our complete A to Z glossary are free and open to all students, parents, and teachers globally. No logins, no passwords, and no hidden fees.
                  </p>
                  <Link href="/what-is-a-computer" className="offering-link">
                    Explore Free Lessons →
                  </Link>
                </div>

                <div className="offering-box tutoring">
                  <span className="offering-badge">Personalized Mentorship</span>
                  <h3 className="offering-title">In-Depth 1-on-1 Classes</h3>
                  <p className="offering-desc">
                    For students seeking dedicated, step-by-step guidance, Raja Qosain Shamir offers customized one-to-one tutoring. Available <strong>online worldwide</strong> via live video, and <strong>in-person</strong> at Bright Future Academy in Chakswari, Azad Kashmir.
                  </p>
                  <a
                    href={CONTACT_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="offering-link"
                  >
                    Inquire on WhatsApp (+92 344 8343097) →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured "Start Here" Learning Path */}
      <section id="learning-path" className="learning-path-section" aria-labelledby="path-heading">
        <div className="section-container">
          <p className="section-badge">Structured Roadmap</p>
          <h2 id="path-heading" className="section-heading">
            Your Step-by-Step Learning Path
          </h2>
          <p className="section-subheading">
            New to computers? Follow this proven 4-stage roadmap in order so every new topic builds naturally on what you already know.
          </p>

          <div className="roadmap-grid">
            {/* Step 1 */}
            <div className="roadmap-card">
              <span className="roadmap-step-num">Stage 1</span>
              <h3 className="roadmap-step-title">The Basics & Hardware</h3>
              <p className="roadmap-step-desc">
                Learn what a computer does (IPSO cycle), explore inside the case (CPU, RAM, motherboard), and understand how keyboards, mice, monitors, and printers work.
              </p>
              <Link href="/what-is-a-computer" className="roadmap-step-link">
                Start Stage 1 (Lessons 1-5) →
              </Link>
            </div>

            {/* Step 2 */}
            <div className="roadmap-card">
              <span className="roadmap-step-num">Stage 2</span>
              <h3 className="roadmap-step-title">Essential Office Software</h3>
              <p className="roadmap-step-desc">
                Understand Microsoft Word for typing letters and Microsoft Excel for calculating budgets, building formulas, and generating simple visual charts.
              </p>
              <Link href="/what-is-ms-office" className="roadmap-step-link">
                Start Stage 2 (Lessons 6-7) →
              </Link>
            </div>

            {/* Step 3 */}
            <div className="roadmap-card">
              <span className="roadmap-step-num">Stage 3</span>
              <h3 className="roadmap-step-title">The Web & Internet</h3>
              <p className="roadmap-step-desc">
                Discover what a website is, how web browsers load pages, what domain names and hosting mean, and how HTML, CSS, and JavaScript build the web.
              </p>
              <Link href="/what-is-a-website" className="roadmap-step-link">
                Start Stage 3 (Lesson 8) →
              </Link>
            </div>

            {/* Step 4 */}
            <div className="roadmap-card">
              <span className="roadmap-step-num">Stage 4</span>
              <h3 className="roadmap-step-title">AI & Future Tech Careers</h3>
              <p className="roadmap-step-desc">
                Unpack Artificial Intelligence, separate real Narrow AI from myths, learn how to use AI tools safely, and explore rewarding career paths in computing.
              </p>
              <Link href="/what-is-ai" className="roadmap-step-link">
                Start Stage 4 (Lessons 9-11) →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All 11 Topics Cards Grid */}
      <section className="topics-section" aria-labelledby="topics-heading">
        <div className="section-container">
          <p className="section-badge">Complete Curriculum</p>
          <h2 id="topics-heading" className="section-heading">
            Explore All 11 Free Computer Lessons
          </h2>
          <p className="section-subheading">
            Every lesson includes over 800 words of thorough, original teaching content, simple diagrams, a summary box, FAQs, and a 5-question test.
          </p>

          <div className="topics-grid">
            {allLessons.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`/${lesson.slug}`}
                className="topic-card"
                aria-label={`Read lesson: ${lesson.title}`}
              >
                <div>
                  <div className="topic-meta">
                    <span className="topic-order-badge">Lesson {lesson.order}</span>
                    <span className="topic-time">{lesson.readingTime}</span>
                  </div>
                  <h3 className="topic-card-title">{lesson.shortTitle}</h3>
                  <p className="topic-card-desc">{lesson.metaDescription}</p>
                </div>
                <div className="topic-card-footer">
                  <span className="topic-category-tag">{lesson.category}</span>
                  <span className="topic-cta-text">Read Lesson →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

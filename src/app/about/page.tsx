import type { Metadata } from 'next';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import {
  ACADEMY_NAME,
  ACADEMY_LOCATION,
  FOUNDER_NAME,
  FOUNDER_TITLE,
  FOUNDER_REGION,
  CONTACT_WHATSAPP,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  SOCIAL_INSTAGRAM,
  SOCIAL_TIKTOK,
  getCanonicalUrl,
  generateBreadcrumbJsonLd,
  generateOrganizationJsonLd,
} from '../../lib/seo';

export const metadata: Metadata = {
  title: 'About the Founder & Our Mission | Raja Qosain Shamir • Azad Kashmir',
  description:
    'Learn about our mission to provide free computer education to children worldwide. Founded by Raja Qosain Shamir from Azad Jammu and Kashmir, offering free lessons and in-depth 1-on-1 classes.',
  alternates: {
    canonical: getCanonicalUrl('/about'),
  },
  openGraph: {
    title: 'About the Founder & Our Global Mission | Bright Future Academy',
    description:
      'Founded by Raja Qosain Shamir in Chakswari, Azad Jammu and Kashmir. Empowering children worldwide with free computer literacy and personalized one-to-one classes.',
    url: getCanonicalUrl('/about'),
  },
};

export default function AboutPage() {
  const breadcrumbs = [{ label: 'About & Our Mission', href: '/about' }];

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'About & Our Mission', path: '/about' },
  ]);

  const orgJsonLd = generateOrganizationJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="about-page-container">
        <header>
          <h1 className="about-h1">About Our Founder & Global Educational Mission</h1>
          <p className="about-academy-subtitle">
            Founded by {FOUNDER_NAME} • {ACADEMY_NAME}, {ACADEMY_LOCATION}
          </p>
        </header>

        {/* Founder & Kashmir Flag Highlight Card */}
        <section className="about-card-box" style={{ borderLeft: '5px solid var(--gold-500)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.75rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <img
                  src="/kashmir-flag.jpg"
                  alt="Flag of Azad Jammu and Kashmir"
                  style={{ width: '32px', height: '20px', objectFit: 'cover', borderRadius: '3px', border: '1px solid #cbd5e1' }}
                />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--navy-900)', textTransform: 'uppercase' }}>
                  Rooted in {FOUNDER_REGION}
                </span>
              </div>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
                A Personal Message from {FOUNDER_NAME}
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '1rem' }}>
                &ldquo;Growing up in <strong>Azad Jammu and Kashmir</strong>, I saw firsthand how much our families value education. In every household, parents sacrifice so their sons and daughters can learn English, master technology, and build a brighter tomorrow. But I also saw how confusing and intimidating computers can seem when a child or beginner sits in front of a screen for the very first time. Most textbooks and online courses are packed with complex jargon and expensive paywalls.&rdquo;
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
                &ldquo;I built <strong>Computer Basics Made Simple</strong> to solve that problem. This platform belongs to the children of the world—from the valleys of Kashmir to schools and homes across Asia, the UK, the Middle East, Africa, and the Americas. Here, every child can learn how computers think, how data flows, and how the internet works in plain, friendly English, completely free of charge.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Education in Kashmir Context */}
        <section className="about-card-box">
          <h2>Education in Azad Jammu & Kashmir: Our Heritage & Inspiration</h2>
          <p>
            The region of <strong>Azad Jammu and Kashmir</strong> is celebrated for its warm hospitality, stunning mountain scenery, and above all, its profound respect for learning. In towns like <strong>Chakswari</strong>, families have historically emphasized academic discipline, moral character, and language mastery as the keys to opening doors worldwide.
          </p>
          <p>
            By establishing this global platform from Chakswari, we are proud to showcase the talent, passion, and educational dedication emerging from Azad Kashmir. Our digital classroom connects local instructors with students worldwide, demonstrating that world-class education can originate from any community driven by heart and purpose.
          </p>
        </section>

        {/* Our Two Educational Offerings */}
        <section className="about-card-box">
          <h2>How We Teach: Two Ways to Learn With Us</h2>
          <p>
            We recognize that different students have different learning needs. That is why we provide both self-directed learning and intensive personalized tutoring:
          </p>

          <div className="offerings-split-grid" style={{ marginTop: '1.5rem' }}>
            <div className="offering-box free">
              <span className="offering-badge">Free Self-Paced Learning</span>
              <h3 className="offering-title">Open Online Library for Children</h3>
              <p className="offering-desc">
                Every lesson on this website—from hardware components and Windows basics to Microsoft Excel, internet fundamentals, and Artificial Intelligence—is 100% free. Children and beginners can read, test themselves with quizzes, and learn at their own pace without paying a single rupee or dollar.
              </p>
            </div>

            <div className="offering-box tutoring">
              <span className="offering-badge">Personalized Mentorship</span>
              <h3 className="offering-title">In-Depth 1-to-1 Classes</h3>
              <p className="offering-desc">
                For students who want accelerated progress, individual coaching, or exam preparation, Raja Qosain Shamir provides customized <strong>one-to-one classes</strong>:
              </p>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                <li><strong>Online Worldwide:</strong> Live video mentoring via Zoom or Google Meet tailored to the student&apos;s schedule and speed.</li>
                <li><strong>In-Person:</strong> Hands-on computer lab sessions at Bright Future Academy in Chakswari, Azad Kashmir.</li>
              </ul>
              <a
                href={CONTACT_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="offering-link"
              >
                Book a One-to-One Session on WhatsApp →
              </a>
            </div>
          </div>
        </section>

        {/* Bright Future Academy Profile */}
        <section className="about-card-box">
          <h2>About Bright Future Academy of IELTS and IT Courses</h2>
          <p>
            Located centrally in <strong>Chakswari, Azad Jammu and Kashmir</strong>, Bright Future Academy provides specialized foundational training programs:
          </p>
          <ul>
            <li>
              <strong>IELTS Preparation:</strong> Focused listening, reading, writing, and speaking coaching designed to help students achieve target band scores for overseas study and migration.
            </li>
            <li>
              <strong>Information Technology & Computer Foundations:</strong> Comprehensive training covering hardware assembly, Windows OS, Microsoft Office (Word, Excel, PowerPoint), and typing speed.
            </li>
            <li>
              <strong>Web Literacy & Digital Skills:</strong> Introducing students to website fundamentals, internet safety, and emerging technology like Artificial Intelligence.
            </li>
          </ul>
        </section>

        {/* Contact Grid */}
        <section className="about-card-box">
          <h2>Direct Contact & Consultations</h2>
          <p>
            We welcome inquiries from parents, students, school administrators, and independent learners. Reach out directly to founder Raja Qosain Shamir:
          </p>

          <div className="about-contact-grid">
            <div className="contact-card">
              <p className="contact-label">WhatsApp (Direct to Instructor)</p>
              <p className="contact-value">
                <a
                  href={CONTACT_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {CONTACT_PHONE} (Message Us)
                </a>
              </p>
            </div>

            <div className="contact-card">
              <p className="contact-label">Email Inquiries</p>
              <p className="contact-value">
                <a href={`mailto:${CONTACT_EMAIL}`} className="social-link">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>

            <div className="contact-card">
              <p className="contact-label">Academy Location</p>
              <p className="contact-value">Chakswari, Azad Jammu and Kashmir, Pakistan</p>
            </div>

            <div className="contact-card">
              <p className="contact-label">Social Media</p>
              <p className="contact-value">
                <a
                  href={SOCIAL_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Instagram: @bfa_chakswari
                </a>
                <br />
                <a
                  href={SOCIAL_TIKTOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  TikTok: @bfa_Chakswari
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

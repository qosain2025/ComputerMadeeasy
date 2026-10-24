import React from 'react';
import Link from 'next/link';
import { allLessons } from '../data/lessons';
import {
  FOUNDER_NAME,
  CONTACT_WHATSAPP,
  CONTACT_EMAIL,
  SOCIAL_INSTAGRAM,
  SOCIAL_TIKTOK,
} from '../lib/seo';

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      {/* Learn With Us Callout Box */}
      <div className="learn-with-us-banner">
        <div className="learn-content-container">
          <div className="learn-text-block">
            <h2 className="learn-heading">Learn With Us: In-Person in Chakswari or Online Worldwide</h2>
            <p className="learn-desc">
              Founded by <strong>{FOUNDER_NAME}</strong>, Bright Future Academy offers personalized <strong>one-to-one classes</strong> (online worldwide & in-person in Chakswari, Azad Jammu and Kashmir) alongside our free online computer library for children everywhere.
            </p>
          </div>
          <div className="learn-action-group">
            <a
              href={CONTACT_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <span className="btn-icon">💬</span> Message on WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="btn-email"
            >
              <span className="btn-icon">✉️</span> Email {FOUNDER_NAME}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="footer-directory-container">
        <div className="footer-columns">
          {/* Column 1: About the Publisher & Founder */}
          <div className="footer-col">
            <h3 className="footer-col-title">About the Platform</h3>
            <p className="footer-about-text">
              <strong>Computer Basics Made Simple</strong> is an open educational initiative founded by <strong>{FOUNDER_NAME}</strong> and published by <strong>Bright Future Academy of IELTS and IT Courses</strong>, Chakswari, Azad Jammu and Kashmir.
            </p>
            <p className="footer-about-text">
              Our mission is to empower children, students, and beginners around the world to start their computer journey with clarity, warmth, and zero confusing jargon.
            </p>
            <div className="social-links-group">
              <span className="social-label">Follow our updates:</span>
              <ul className="social-list">
                <li>
                  <a
                    href={SOCIAL_INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    Instagram: @bfa_chakswari
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_TIKTOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    TikTok: @bfa_Chakswari
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: All 11 Lessons Directory */}
          <div className="footer-col footer-col-lessons">
            <h3 className="footer-col-title">Complete Lesson Directory</h3>
            <nav aria-label="Footer Lessons Directory">
              <ul className="footer-lesson-list">
                {allLessons.map((lesson) => (
                  <li key={lesson.slug}>
                    <Link href={`/${lesson.slug}`} className="footer-lesson-link">
                      Lesson {lesson.order}: {lesson.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Quick Links & Contact */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Resources</h3>
            <ul className="footer-quick-list">
              <li>
                <Link href="/" className="footer-link">
                  Home (All Topics)
                </Link>
              </li>
              <li>
                <Link href="/what-is-a-computer" className="footer-link">
                  Start Here (Lesson 1)
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="footer-link">
                  A to Z Computer Glossary
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  Founder & Our Mission
                </Link>
              </li>
            </ul>

            <div className="footer-contact-details">
              <h4 className="footer-contact-title">Contact & Location</h4>
              <p className="footer-contact-item">
                📍 Chakswari, Azad Jammu and Kashmir, Pakistan
              </p>
              <p className="footer-contact-item">
                📱 WhatsApp: +92 344 8343097
              </p>
              <p className="footer-contact-item">
                📧 Email: rqosain@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            Published by Bright Future Academy of IELTS and IT Courses, Chakswari, Azad Kashmir.
          </p>
          <p className="footer-note">
            Free educational resource for children & beginners worldwide. Founded by Raja Qosain Shamir.
          </p>
        </div>
      </div>
    </footer>
  );
}

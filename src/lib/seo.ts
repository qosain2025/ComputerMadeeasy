export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://computerbasics.vercel.app';
export const SITE_NAME = 'Computer Basics Made Simple';
export const FOUNDER_NAME = 'Raja Qosain Shamir';
export const FOUNDER_TITLE = 'Founder & Lead Instructor';
export const FOUNDER_REGION = 'Azad Jammu and Kashmir';
export const ACADEMY_NAME = 'Bright Future Academy of IELTS and IT Courses';
export const ACADEMY_LOCATION = 'Chakswari, Azad Jammu and Kashmir, Pakistan';
export const CONTACT_WHATSAPP = 'https://wa.me/923448343097';
export const CONTACT_PHONE = '+92 344 8343097';
export const CONTACT_EMAIL = 'rqosain@gmail.com';
export const SOCIAL_INSTAGRAM = 'https://instagram.com/bfa_chakswari';
export const SOCIAL_TIKTOK = 'https://tiktok.com/@bfa_Chakswari';

export function getCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`;
}

export function generateBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}

export function generateFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleJsonLd(lesson: {
  title: string;
  metaDescription: string;
  slug: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    headline: lesson.title,
    description: lesson.metaDescription,
    url: getCanonicalUrl(lesson.slug),
    educationalLevel: 'Beginner',
    learningResourceType: 'Lesson',
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      name: FOUNDER_NAME,
      jobTitle: FOUNDER_TITLE,
      homeLocation: FOUNDER_REGION,
    },
    publisher: {
      '@type': 'EducationalOrganization',
      name: ACADEMY_NAME,
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chakswari',
        addressRegion: 'Azad Jammu and Kashmir',
        addressCountry: 'Pakistan',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: CONTACT_PHONE,
        contactType: 'Admissions and Student Inquiries',
        email: CONTACT_EMAIL,
      },
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: ACADEMY_NAME,
    url: SITE_URL,
    description:
      'A global educational initiative founded by Raja Qosain Shamir in Azad Jammu and Kashmir, providing free comprehensive computer basics education for children and beginners worldwide, with in-depth one-to-one mentoring online and in person.',
    founder: {
      '@type': 'Person',
      name: FOUNDER_NAME,
      jobTitle: FOUNDER_TITLE,
      nationality: 'Pakistani',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chakswari',
        addressRegion: 'Azad Jammu and Kashmir',
        addressCountry: 'Pakistan',
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chakswari',
      addressRegion: 'Azad Jammu and Kashmir',
      addressCountry: 'Pakistan',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT_PHONE,
      contactType: 'Customer Support and Student Information',
      email: CONTACT_EMAIL,
    },
    sameAs: [SOCIAL_INSTAGRAM, SOCIAL_TIKTOK],
  };
}

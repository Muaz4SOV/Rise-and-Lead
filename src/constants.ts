import { PortfolioItem, Testimonial, FAQ } from './types.ts';

export const BRAND_NAME = 'Rise & Lead 360';
export const BRAND_TAGLINE = 'Learn Today. Build Tomorrow.';
export const BRAND_TAGLINE_PARTS = ['Learn Today', 'Build Tomorrow'] as const;
export const BRAND_MISSION =
  'Our mission is to inspire, educate, and lead people toward success through innovation, knowledge, and impactful experiences.';

export const ABOUT_INTRO =
  'Rise & Lead 360 is a professional development platform dedicated to empowering individuals, teams, and organizations through structured learning, digital innovation, and high-impact media services.';

export const ABOUT_COMMITMENT =
  'We are committed to developing future leaders, confident communicators, and industry-ready professionals across every program we deliver.';

export const ABOUT_SPECIALIZATIONS =
  'Our portfolio spans professional certifications, executive training, podcast production, web development, and mobile application development — tailored for individuals, startups, corporates, and industry partners.';

export const ABOUT_CLOSING =
  'We combine practical instruction, proven industry expertise, and modern digital solutions to help people and organizations perform with confidence in today\'s competitive landscape.';

export const ABOUT_CAPABILITIES = [
  {
    title: 'Professional Certifications',
    description: 'Accredited programs designed to validate skills and accelerate career progression.'
  },
  {
    title: 'Executive Training',
    description: 'Leadership and communication programs for senior teams and management cohorts.'
  },
  {
    title: 'Podcast & Media Services',
    description: 'End-to-end podcast production, hosting, and branded content development.'
  },
  {
    title: 'Web Development',
    description: 'Custom web solutions built for performance, scalability, and business outcomes.'
  },
  {
    title: 'Mobile Applications',
    description: 'Cross-platform mobile products from concept through deployment and support.'
  }
] as const;

export const ABOUT_TRAINING_PORTFOLIO = [
  'One-Day Professional Workshops',
  '1-Month Fast Track Certifications & Diplomas',
  'Corporate Training Programs',
  'Leadership & Communication Development Sessions'
] as const;

export const ABOUT_LEARNING_PROGRAMS = [
  'Communication Skills',
  'Public Speaking',
  'Leadership Development',
  'Personal Branding',
  'Corporate Training & Coaching',
  'Professional Development'
] as const;
export const BRAND_HERO_HEADLINE = 'Just listen to your soul and unlock your true potential.';
export const BRAND_HERO_SUBLINE =
  'Where passion meets purpose, skills meet growth, and leaders are empowered to rise beyond limits.';
export const BRAND_CAREERS =
  'Whether you dream of becoming a Web Developer, Mobile App Developer, Freelancer, or Software Engineer — Rise & Lead 360 provides practical, career-focused training designed for the modern tech industry.';

/** Update with your real contact details */
export const CONTACT_EMAIL = 'riselead360@gmail.com';
export const CONTACT_WHATSAPP = '923350464757';
export const CONTACT_WHATSAPP_DISPLAY = '0335-0464757';
export const CONTACT_YOUTUBE = 'https://www.youtube.com/@riselead360';
export const CONTACT_YOUTUBE_HANDLE = '@riselead360';
export const WHATSAPP_ENROLL_MESSAGE = 'Hi, I want to enroll.';

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'Civic Leadership Summit',
    description: 'A transformative program for community leaders across 12 countries, resulting in over 50 local initiatives.',
    image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=600&auto=format&fit=crop',
    year: '2025'
  },
  {
    id: '2',
    title: 'The AI Code Initiative',
    description: 'Empowering 5000+ students with advanced programming skills and real-world project experience.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
    year: '2024'
  },
  {
    id: '3',
    title: 'Executive Presence Series',
    description: 'Rebranding session for top-tier corporate management, focusing on impact, clarity, and authority.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
    year: '2024'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexandra Wright',
    role: 'Product Manager at TechFlow',
    content: "The Leadership Dynamics course completely shifted my perspective on team management. The insights were practical, modern, and immediately applicable.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: '2',
    name: 'David Hashimi',
    role: 'Senior Developer',
    content: "Marcus Thorne's React Architecture course is the best I've taken. No fluff, just high-level patterns that actually matter in production.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: '3',
    name: 'Sophie Laurent',
    role: 'Executive Director',
    content: "The Self-Grooming series exceeded my expectations. It's not just about looks; it's about the psychological confidence you project in every room.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5
  }
];

export const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'Are the certificates internationally recognized?',
    answer: 'Yes, Rise & Lead 360 certificates are recognized by leading employers and can be integrated directly into your LinkedIn profile.'
  },
  {
    id: '2',
    question: 'Can I access the course material after completion?',
    answer: 'Absolutely. You retain lifetime access to all course materials, including future updates and recorded sessions.'
  },
  {
    id: '3',
    question: 'Do you offer corporate training packages?',
    answer: 'We do. We provide specialized cohorts for enterprise teams with custom curriculum adjustments to fit your company culture.'
  }
];

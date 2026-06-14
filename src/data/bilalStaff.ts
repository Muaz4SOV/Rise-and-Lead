import type { Staff } from '../types.ts';
import bilalProfile from '../assets/Bilal/Bilal Profile Image.jpeg';

export const BILAL_STAFF: Staff = {
  id: 'muhammad-bilal-ashraf',
  name: 'Muhammad Bilal Ashraf',
  role: 'Trainer · Senior Software Engineer · PHP, Laravel & WordPress',
  linkedin: 'https://www.linkedin.com/in/muhammad-bilal-ashraf-51a839237/',
  titles: ['Trainer', 'Senior Software Engineer', 'PHP Developer', 'Laravel Developer', 'WordPress Developer'],
  summary:
    'Experienced backend developer specializing in PHP, Laravel, and WordPress — integrating third-party APIs, building scalable solutions, and training learners in programming across professional and educational settings.',
  featuredHighlight: [
    'Trained many learners in programming — professional & educational fields',
    'PHP · Laravel · WordPress — APIs, job queues & event-driven architecture'
  ],
  bio:
    'Muhammad Bilal Ashraf is an experienced backend developer specializing in PHP, Laravel, and WordPress. He has proven expertise in integrating third-party APIs, building custom Laravel commands, and managing job queues. Skilled in developing event-driven architectures, optimizing database schemas, and implementing RESTful APIs, he is proficient in customizing WordPress and WooCommerce plugins while ensuring secure code and enhanced application performance. He has trained many learners in programming-related skills across both the professional and educational fields, guiding them from fundamentals to industry-ready practice through hands-on mentorship and structured training. With strong problem-solving abilities and a focus on scalable, efficient solutions, Bilal brings hands-on experience across e-commerce platforms, LMS integrations, and enterprise web applications — from WooCommerce and LearnDash to payment gateway integrations and API-driven workflows.',
  image: bilalProfile,
  education: {
    degree: 'Bachelor of Science in Computer Science (BSCS) · Grade A',
    institution: 'Lahore Garrison University · Oct 2018 – Jun 2022'
  },
  experience: {
    companies: [
      {
        company: 'TecSpine',
        meta: 'Full-time · 2 yrs 2 mos · On-site · Lahore, Punjab, Pakistan',
        roles: [
          {
            title: 'Senior Software Engineer',
            period: 'Jan 2025 – Present · 1 yr 5 mos',
            location: 'Lahore, Punjab, Pakistan',
            skills: ['Integrate Payment Methods', 'AJAX', 'Laravel', 'REST APIs']
          },
          {
            title: 'PHP WordPress & Laravel Developer',
            period: 'Apr 2024 – Present · 2 yrs 2 mos',
            location: 'Lahore, Punjab, Pakistan',
            description:
              'Integrated third-party APIs and services to extend application functionality. Created custom Laravel console commands and implemented job queues for efficient background processing. Developed event-driven architecture using Laravel event listeners and observers. Designed and optimized database schemas with Eloquent ORM, managed authentication and authorization, and enhanced performance through caching strategies.',
            skills: ['PHP', 'Laravel', 'WordPress', 'REST APIs', 'Eloquent ORM', 'Job Queues', 'Event-Driven Architecture']
          }
        ]
      },
      {
        company: 'WPWhales',
        meta: 'Full-time · 1 yr 6 mos · On-site · Lahore District, Punjab, Pakistan',
        roles: [
          {
            title: 'PHP Laravel Backend WordPress Developer',
            period: 'Oct 2022 – Mar 2024 · 1 yr 6 mos',
            location: 'Lahore District, Punjab, Pakistan',
            description:
              'Implemented payment gateway integrations in Laravel applications. Developed and maintained Laravel-based web applications. Created and managed RESTful APIs for seamless frontend integration. Designed and optimized database schemas for efficient data storage and retrieval.',
            skills: ['PHP', 'Laravel', 'WordPress', 'REST APIs', 'Payment Gateways', 'OOP', 'Linux']
          }
        ]
      },
      {
        company: 'HandyBuilds',
        meta: 'Full-time · 1 yr 2 mos · On-site · Lahore, Punjab, Pakistan',
        roles: [
          {
            title: 'Associate Software Engineer',
            period: 'Aug 2021 – Sep 2022 · 1 yr 2 mos',
            location: 'Lahore, Punjab, Pakistan',
            description:
              'Customized WordPress code using action hooks and filters. Customized WooCommerce, LearnDash, BuddyBoss, and various other large plugins and LMS platforms. Integrated APIs with ActiveCampaign, WhatsApp, and other third-party services.',
            skills: ['WordPress', 'WooCommerce', 'LearnDash', 'BuddyBoss', 'Third Party Applications', 'API Integration']
          }
        ]
      }
    ]
  },
  expertise: [
    'PHP',
    'Laravel',
    'WordPress',
    'WooCommerce',
    'REST APIs',
    'AJAX',
    'jQuery',
    'Git',
    'Unit Testing',
    'OOP / MVC',
    'User Authentication',
    'API Development',
    'Plugin Customization',
    'Database Administration',
    'Server Management',
    'Payment Gateway Integration',
    'Job Queues',
    'Event-Driven Architecture',
    'Programming Training & Instruction'
  ],
  highlights: [
    'Senior Software Engineer at TecSpine',
    'PHP · Laravel · WordPress Specialist',
    'Third-Party API & Payment Integrations',
    'WooCommerce · LearnDash · BuddyBoss',
    'Event-Driven & Scalable Backend Solutions'
  ],
  approach: [
    'Hands-on mentoring from fundamentals to production-ready skills',
    'Clean, secure code aligned with client requirements',
    'RESTful APIs and seamless third-party integrations',
    'Database schema optimization and performance tuning',
    'Custom Laravel commands and background job processing',
    'Thorough testing and debugging for production-ready delivery'
  ]
};

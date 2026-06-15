import { OfferingPillar } from '../types.ts';

export const OFFERING_PILLARS: OfferingPillar[] = [
  {
    id: 'hr',
    label: 'Human Resources',
    programs: [
      {
        id: 'hr-workshop',
        title: 'HR — 1 Day Workshop',
        duration: '1 Day',
        items: [
          'HR Essentials: Foundations of Modern Human Resource Management',
          'Smart Recruitment & Interviewing Techniques',
          'Performance Management & KPI Design Masterclass',
          'Workplace Communication & Conflict Resolution',
          'HR Compliance & Labor Law Essentials',
          'Employee Engagement & Retention Strategies',
          'HR Analytics Basics for Decision Making',
          'Employer Branding & Talent Attraction',
          'Workplace Ethics, Culture & Professional Conduct',
          'HRBP Introduction'
        ]
      },
      {
        id: 'hr-cert-1m',
        title: 'HR — 1-Month Certification Programs',
        duration: '1 Month',
        items: [
          'Certified HR Operations Specialist',
          'Talent Acquisition & Recruitment Certification',
          'Performance & Compensation Management Certification',
          'Learning & Development Certification',
          'HR Generalist Professional Certification',
          'Organizational Development & Culture Certification',
          'Employee Relations & Engagement Certification',
          'HR Analytics & Reporting Certification',
          'Payroll Management & HR Compliance Certification',
          'People Success Certification'
        ]
      },
      {
        id: 'hr-cert-3m',
        title: 'HR — 3-Month Advanced Certification (CHRMP Level)',
        duration: '3 Months',
        items: [
          'Certified Human Resource Management Professional',
          'Advanced HR Business Partner Certification',
          'Strategic Human Resource Leadership Certification',
          'Certified Talent Management Professional',
          'Organizational Development & Change Leadership Certification',
          'People & Culture Leadership Certification',
          'HR Strategy & Transformation Certification',
          'Executive HR Leadership Certification',
          'Certified Compensation & Benefits Specialist',
          'Workforce Planning & Talent Strategy Certification',
          'Personality & Hygiene'
        ]
      }
    ]
  },
  {
    id: 'film',
    label: 'Film & TV',
    programs: [
      {
        id: 'film-tv',
        title: 'Film & TV',
        duration: '3 Months',
        items: [
          'Certificate in Film & TV Production',
          'Certificate in Acting for Film & Television',
          'Certificate in Cinematography & Camera Handling',
          'Certificate in Script Writing & Story Development',
          'Certificate in Video Editing & Post Production',
          'Certificate in Direction & Creative Filmmaking',
          'Certificate in TV Hosting & Media Presentation',
          'Certificate in Digital Content Creation & YouTube Production',
          'Certification in Documentary Production',
          'Certification in Podcast Production & Storytelling',
          'Certification in Voice Over & Dubbing Arts',
          'Certification in Mobile Filmmaking'
        ]
      }
    ]
  },
  {
    id: 'technology',
    label: 'Technology',
    programs: [
      {
        id: 'dotnet',
        title: 'Certificate in Full Stack .NET Web Development',
        duration: '3 Months',
        description:
          'Hands-on full stack training with Microsoft technologies — from backend logic to live deployment.',
        technologies: ['C#', 'ASP.NET Core', 'SQL Server', 'REST APIs'],
        items: [
          'C# programming & object-oriented development',
          'ASP.NET Core — build modern web applications',
          'MVC architecture & structured project workflow',
          'SQL Server — database design, queries & relationships',
          'Entity Framework & data access layers',
          'RESTful APIs — create and integrate services',
          'Authentication & authorization (users, roles, security)',
          'Git, debugging & industry coding practices',
          'Deployment — publish applications to production'
        ]
      },
      {
        id: 'php-laravel',
        title: 'Certificate in PHP & Laravel Development',
        duration: '3 Months',
        description:
          'Learn to build secure, scalable web applications with PHP and the Laravel framework.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
        items: [
          'Core PHP — syntax, logic & backend fundamentals',
          'Laravel framework — routing, MVC & Blade templates',
          'MySQL database design & Eloquent ORM',
          'CRUD applications & admin panel development',
          'REST APIs & third-party service integration',
          'Form validation, sessions & middleware',
          'Authentication & role-based access control',
          'File uploads, mail & common Laravel packages',
          'Deploy Laravel projects to live hosting'
        ]
      },
      {
        id: 'wordpress',
        title: 'Certificate in WordPress Development & Customization',
        duration: '3 Months',
        description:
          'Create professional websites, eCommerce stores, and custom WordPress solutions for clients.',
        technologies: ['WordPress', 'WooCommerce', 'Elementor', 'PHP basics'],
        items: [
          'WordPress installation, configuration & dashboard mastery',
          'Theme selection, customization & child themes',
          'Elementor & page builders — layout without heavy code',
          'WooCommerce — products, payments & store management',
          'Plugin basics — extend site functionality safely',
          'Custom post types, menus & site structure',
          'Website speed, security & basic SEO setup',
          'Domains, hosting, SSL & deployment workflow',
          'Client-ready website delivery & maintenance'
        ]
      },
      {
        id: 'python-web',
        title: 'Certificate in Python Web Development',
        duration: '3 Months',
        description:
          'Python-first path into backend and full stack web development with modern frameworks.',
        technologies: ['Python', 'Django / Flask', 'PostgreSQL / MySQL', 'APIs'],
        items: [
          'Python fundamentals — syntax, logic & clean code',
          'Django or Flask — web apps, routes & templates',
          'Database integration — models, migrations & queries',
          'User authentication, sessions & permissions',
          'REST APIs — build, test & document endpoints',
          'Forms, validation & handling user input',
          'Static files, media & project configuration',
          'Environment setup, Git & debugging skills',
          'Deploy Python web applications to production'
        ]
      }
    ]
  },
  {
    id: 'singing',
    label: 'Singing & Music',
    programs: [
      {
        id: 'singing',
        title: 'Singing',
        duration: '3 Months',
        items: [
          'Certificate in Professional Singing & Vocal Training',
          'Certificate in Music Production & Audio Engineering',
          'Certificate in Vocal Recording & Studio Performance',
          'Certificate in Songwriting & Composition',
          'Certificate in Digital Music Production',
          'Certificate in Sound Engineering & Mixing',
          'Certificate in Live Performance & Stage Presence',
          'Certificate in YouTube Music Content Creation',
          'Certificate in Music for Film & TV',
          'Certificate in Music Video Direction',
          'Certificate in Voice Over Production'
        ]
      }
    ]
  },
  {
    id: 'services',
    label: 'Professional Services',
    programs: [
      {
        id: 'services',
        title: 'Services',
        duration: 'On demand',
        items: [
          'Concept Development',
          'Podcast Services',
          'Brand Ambassador',
          'Portfolio Making',
          'Host — Giving Life to Your Event',
          'PR Sessions',
          'PR Media',
          'Art of Communication',
          'One Man Production',
          'HK Productions'
        ]
      }
    ]
  },
  {
    id: 'islam360',
    label: 'Islam 360',
    subtitle: 'by Rise & Lead 360',
    description:
      'Islam 360 is a dedicated Islamic learning platform under Rise & Lead 360, committed to helping individuals and families strengthen their connection with the Holy Quran and Islamic teachings. Our mission is to make authentic Islamic education accessible worldwide through qualified instructors, interactive online classes, and personalized learning programs for children, youth, and adults.\n\nWhether you want to memorize the Quran, improve recitation, understand its meaning, or enhance your Islamic knowledge, Islam 360 provides a structured and supportive learning environment to help you grow spiritually and academically.',
    programs: [
      {
        id: 'islam-hifz',
        title: 'Online Hifz-ul-Quran Program',
        duration: 'Online',
        description:
          'A structured memorization program designed for children and adults under the supervision of qualified Huffaz. Regular assessments and personalized progress tracking ensure effective Quran memorization.',
        items: []
      },
      {
        id: 'islam-tajweed',
        title: 'Tajweed & Quran Recitation Classes',
        duration: 'Online',
        description:
          'Learn the correct pronunciation and rules of Quran recitation. Our certified instructors help students improve fluency, confidence, and beauty in reciting the Holy Quran.',
        items: []
      },
      {
        id: 'islam-tafseer',
        title: 'Quran Translation & Tafseer Course',
        duration: 'Online',
        description:
          'Understand the message of Allah through comprehensive Quran translation and Tafseer classes. Learn the context, wisdom, and practical application of Quranic teachings in daily life.',
        items: []
      },
      {
        id: 'islam-studies',
        title: 'Islamic Studies & Character Building',
        duration: 'Online',
        description:
          'A complete Islamic learning program covering Aqeedah, Seerah of Prophet Muhammad ﷺ, Islamic manners, Duas, Fiqh basics, and moral development for children and adults.',
        items: []
      },
      {
        id: 'islam-nazra',
        title: 'Nazra Quran for Kids & Beginners',
        duration: 'Online',
        description:
          'A beginner-friendly course focused on Arabic letter recognition, pronunciation, and fluent Quran reading. Ideal for young learners and new students starting their Quranic journey.',
        items: []
      }
    ]
  }
];

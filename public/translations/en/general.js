export default {
  about: {
    english: 'English: conversational / technical',
    facts: [
      { label: 'Software development', value: '4+ years' },
      { label: 'Professional experience', value: '3+ years' },
      { label: 'Focus', value: 'Full Stack' },
    ],
    languagesTitle: 'Languages',
    spanish: 'Spanish: native',
    summary:
      'I have spent more than four years developing software and more than three building web applications that are already in use. I work across the whole cycle: implementation, code review, QA, and release. I care about software that is clear for the people using it and sustainable for the people maintaining it.',
    title: 'About',
  },
  contact: {
    address: 'marlonjoseuzca@gmail.com',
    email: 'Email',
    github: 'GitHub',
    githubHandle: 'github.com/Marlonuzco',
    intro:
      'If you want to talk about a project or an opportunity, email me or look through my work.',
    linkedin: 'LinkedIn',
    linkedinHandle: 'linkedin.com/in/marlon-josé-uzcátegui-61a0a123b',
    title: 'Contact',
  },
  experience: {
    intro: 'Recent experience building and maintaining production software.',
    jobs: [
      {
        company: 'Foco en obra',
        highlights: [
          'Developed REST APIs with Node.js, Express, and TypeScript on SQL Server and TypeORM, including validation, JWT, Azure Blob Storage, and Swagger.',
          'Built React and TypeScript interfaces: multi-step forms, data grids, hierarchical views, and tracking dashboards.',
          'Implemented notifications, files, and three-language internationalization, and contributed to QA, review, and deployments.',
        ],
        period: 'Aug 2024 – Present',
        role: 'Full Stack Developer · Full-time',
        summary: 'End-to-end features for a production web application.',
      },
      {
        company: 'Talent360',
        highlights: [
          'Automated PDF report generation with Node.js, Express, Puppeteer, and Handlebars.',
          'Designed models, migrations, and queries in PostgreSQL with Prisma.',
          'Built React and TypeScript views with search, filters, server-side pagination, and export.',
        ],
        period: 'Nov 2025 – Jun 2026',
        role: 'Full Stack Developer · Freelance',
        summary: 'Reports, data, and query screens.',
      },
      {
        company: 'Teampers CRM',
        highlights: [
          'Rebuilt the frontend of a production PHP/Symfony application with HTML, CSS, and jQuery.',
          'Created responsive interfaces and reusable components to standardize the design.',
          'Refined the interface with the backend team while keeping the system available.',
        ],
        period: 'Nov 2023 – Nov 2025',
        role: 'Frontend Developer · Freelance',
        summary: 'Modernized the interface of a CRM that was already in production.',
      },
    ],
    title: 'Experience',
  },
  footer: {
    note: 'Full Stack Developer · React, TypeScript, and Node.js',
  },
  hero: {
    availability: 'Remote · Open to international opportunities',
    contact: 'Contact',
    downloadCv: 'Download resume (EN)',
    name: 'Marlon José Uzcátegui Contreras',
    projects: 'View projects',
    role: 'Full Stack Developer',
    stack: 'React · TypeScript · Node.js',
    summary: 'I build software end to end —API, data, and interface— for web, mobile, and desktop.',
  },
  language: {
    en: 'EN',
    es: 'ES',
    label: 'Language',
  },
  meta: {
    description:
      'Portfolio of Marlon José Uzcátegui Contreras, a Full Stack developer. React, TypeScript, and Node.js.',
    title: 'Marlon Uzcátegui — Full Stack Developer',
  },
  nav: {
    about: 'About',
    close: 'Close menu',
    contact: 'Contact',
    experience: 'Experience',
    label: 'Sections',
    open: 'Open menu',
    process: 'Process',
    projects: 'Projects',
    shortName: 'Marlon Uzcátegui',
    skills: 'Skills',
    skip: 'Skip to content',
  },
  process: {
    intro: 'How a change moves from definition to release.',
    note: "I use Cursor, Claude Code, and OpenCode to shorten implementation, debugging, and review. The result still goes through lint, types, the build, and the repository's patterns.",
    steps: [
      {
        description:
          'Define the behavior, the boundaries, and the expected result before implementation.',
        title: 'Specifications',
      },
      {
        description: 'Build the feature within the patterns and structure of the project.',
        title: 'Implementation',
      },
      {
        description: 'Review pull requests and refine the change with the team.',
        title: 'Code review',
      },
      {
        description: 'Check lint, types, and the build before treating the change as done.',
        title: 'Validation',
      },
    ],
    title: 'Work process',
  },
  projects: {
    decisions: 'Decisions',
    intro: 'Three technical problems solved in products that were already in use.',
    items: [
      {
        context: 'Foco en obra',
        decisions: [
          'Validation, authentication, and OpenAPI documentation belong in the API.',
          'Complex screens rely on reusable data components.',
          'Each change goes through review, quality checks, and separate QA and production deployments.',
        ],
        id: 'operations-platform',
        problem:
          'New features had to land in an application people were already using, across the API, interface, files, and release.',
        solution:
          'I delivered end-to-end features: REST APIs, data-heavy screens, file uploads, notifications, and internationalization.',
        technologies: [
          'React',
          'TypeScript',
          'Node.js',
          'Express',
          'SQL Server',
          'TypeORM',
          'JWT',
          'Azure Blob Storage',
          'Swagger',
          'i18next',
        ],
        title: 'End-to-end features in a production application',
      },
      {
        context: 'Talent360',
        decisions: [
          'PDFs are generated on the server so every run produces the same result.',
          'Prisma owns the models, migrations, and queries.',
          'Pagination happens on the server so the browser does not receive the full data set.',
        ],
        id: 'reports',
        problem:
          'The product needed repeatable reports and a way to query information without a manual process.',
        solution:
          'I built backend PDF generation and views with search, filters, pagination, and export.',
        technologies: [
          'React',
          'TypeScript',
          'Node.js',
          'Express',
          'Puppeteer',
          'Handlebars',
          'PostgreSQL',
          'Prisma',
        ],
        title: 'Automated reports and data queries',
      },
      {
        context: 'Teampers CRM',
        decisions: [
          'I standardized the interface with reusable components.',
          'The changes shipped while the production system stayed available.',
        ],
        id: 'crm-interface',
        problem:
          'The CRM frontend was inconsistent and difficult to maintain while the system remained in use.',
        solution:
          'I rebuilt the interface with HTML, CSS, and jQuery, coordinating the changes with the PHP/Symfony backend.',
        technologies: ['HTML5', 'CSS3', 'jQuery', 'PHP', 'Symfony'],
        title: 'A more maintainable interface for a production CRM',
      },
    ],
    problem: 'Problem',
    solution: 'Solution',
    technologies: 'Technologies',
    title: 'Projects',
  },
  skills: {
    groups: [
      {
        id: 'frontend',
        items: [
          'React',
          'TypeScript',
          'JavaScript',
          'Next.js',
          'React Native',
          'Redux',
          'Vite',
          'Tailwind CSS',
          'Ant Design',
          'KendoReact',
        ],
        title: 'Frontend',
      },
      {
        id: 'backend',
        items: ['Node.js', 'Express', 'NestJS', 'REST', 'JWT', 'Joi', 'Swagger', 'Puppeteer'],
        title: 'Backend',
      },
      {
        id: 'databases',
        items: ['SQL Server', 'PostgreSQL', 'TypeORM', 'Prisma'],
        title: 'Databases',
      },
      {
        id: 'tools',
        items: [
          'Azure Blob Storage',
          'Docker',
          'Git',
          'GitHub',
          'ESLint',
          'Prettier',
          'Husky',
          'i18next',
        ],
        title: 'Tools',
      },
    ],
    intro: 'Technologies I use most often, grouped by area.',
    title: 'Skills',
  },
  theme: {
    dark: 'Use dark theme',
    light: 'Use light theme',
  },
};

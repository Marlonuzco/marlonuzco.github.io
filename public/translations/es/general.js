export default {
  about: {
    english: 'Inglés: conversacional / técnico',
    facts: [
      { label: 'Desarrollo de software', value: 'Más de 4 años' },
      { label: 'Experiencia profesional', value: 'Más de 3 años' },
      { label: 'Enfoque', value: 'Full Stack' },
    ],
    languagesTitle: 'Idiomas',
    spanish: 'Español: nativo',
    summary:
      'Llevo más de cuatro años desarrollando software y más de tres construyendo aplicaciones web que ya están en uso. Trabajo el ciclo completo: implementación, revisión de código, QA y publicación. Me importa que la aplicación sea clara para quien la usa y sostenible para quien la mantiene.',
    title: 'Sobre mí',
  },
  contact: {
    address: 'marlonjoseuzca@gmail.com',
    email: 'Correo',
    github: 'GitHub',
    githubHandle: 'github.com/Marlonuzco',
    intro:
      'Si quieres conversar sobre un proyecto o una oportunidad, puedes escribirme o revisar mi trabajo.',
    linkedin: 'LinkedIn',
    linkedinHandle: 'linkedin.com/in/marlon-josé-uzcátegui-61a0a123b',
    title: 'Contacto',
  },
  experience: {
    intro: 'Experiencia reciente construyendo y manteniendo software en producción.',
    jobs: [
      {
        company: 'Foco en obra',
        highlights: [
          'Desarrollé APIs REST con Node.js, Express y TypeScript sobre SQL Server y TypeORM, con validación, JWT, Azure Blob Storage y Swagger.',
          'Construí interfaces en React y TypeScript: formularios de varios pasos, grids, vistas jerárquicas y paneles de seguimiento.',
          'Implementé notificaciones, archivos e internacionalización en tres idiomas, y participé en QA, revisión y despliegues.',
        ],
        location: 'Chile (Remoto)',
        period: 'Ago 2024 – Actualidad',
        role: 'Desarrollador Full Stack · Tiempo completo',
        summary: 'Funcionalidades de punta a punta para una aplicación web en producción.',
      },
      {
        company: 'Talent360',
        highlights: [
          'Automaticé la generación de reportes PDF con Node.js, Express, Puppeteer y Handlebars.',
          'Diseñé modelos, migraciones y consultas en PostgreSQL con Prisma.',
          'Construí vistas en React y TypeScript con búsqueda, filtros, paginación en servidor y exportación.',
        ],
        location: 'España (Remoto)',
        period: 'Nov 2025 – Jun 2026',
        role: 'Desarrollador Full Stack · Freelance',
        summary: 'Reportes, datos y pantallas de consulta.',
      },
      {
        company: 'Teampers CRM',
        highlights: [
          'Rehíce el frontend de una aplicación PHP/Symfony en producción con HTML, CSS y jQuery.',
          'Creé interfaces responsivas y componentes reutilizables para unificar el diseño.',
          'Ajusté la interfaz junto al equipo de backend, manteniendo el sistema disponible.',
        ],
        location: 'España (Remoto)',
        period: 'Nov 2023 – Nov 2025',
        role: 'Desarrollador Frontend · Freelance',
        summary: 'Modernización de la interfaz de un CRM que ya estaba en producción.',
      },
    ],
    title: 'Experiencia',
  },
  footer: {
    note: 'Desarrollador Full Stack · React, TypeScript y Node.js',
  },
  hero: {
    availability: 'Remoto · Abierto a oportunidades internacionales',
    contact: 'Contactar',
    downloadCv: 'Descargar CV (ES)',
    name: 'Marlon José Uzcátegui Contreras',
    projects: 'Ver proyectos',
    role: 'Desarrollador Full Stack',
    stack: 'React · TypeScript · Node.js',
    summary:
      'Desarrollo software de punta a punta —API, datos e interfaz— para web, móvil y escritorio.',
  },
  language: {
    en: 'EN',
    es: 'ES',
    label: 'Idioma',
  },
  meta: {
    description:
      'Portafolio de Marlon José Uzcátegui Contreras, desarrollador Full Stack. React, TypeScript y Node.js.',
    title: 'Marlon Uzcátegui — Desarrollador Full Stack',
  },
  nav: {
    about: 'Sobre mí',
    close: 'Cerrar menú',
    contact: 'Contacto',
    experience: 'Experiencia',
    label: 'Secciones',
    open: 'Abrir menú',
    process: 'Proceso',
    projects: 'Proyectos',
    shortName: 'Marlon Uzcátegui',
    skills: 'Tecnologías',
    skip: 'Saltar al contenido',
  },
  process: {
    intro: 'Así llevo un cambio desde la definición hasta la publicación.',
    note: 'Uso Cursor, Claude Code y OpenCode para acortar la implementación, la depuración y la revisión. El resultado pasa por lint, tipos, build y los patrones del repositorio.',
    steps: [
      {
        description:
          'Definir el comportamiento, los límites y el resultado esperado antes de implementar.',
        title: 'Especificaciones',
      },
      {
        description:
          'Construir la funcionalidad siguiendo los patrones y la estructura del proyecto.',
        title: 'Implementación',
      },
      {
        description: 'Revisar pull requests y corregir el cambio con el contexto del equipo.',
        title: 'Revisión de código',
      },
      {
        description: 'Comprobar lint, tipos y build antes de considerar el cambio terminado.',
        title: 'Validación',
      },
    ],
    title: 'Proceso de trabajo',
  },
  projects: {
    decisions: 'Decisiones',
    intro: 'Tres problemas técnicos resueltos en productos que ya estaban en uso.',
    items: [
      {
        context: 'Foco en obra',
        decisions: [
          'La validación, la autenticación y la documentación OpenAPI forman parte de la API.',
          'Las pantallas complejas se apoyan en componentes de datos reutilizables.',
          'Cada cambio pasa por revisión, controles de calidad y despliegues separados de QA y producción.',
        ],
        id: 'operations-platform',
        problem:
          'Había que incorporar funcionalidades completas a una aplicación que ya estaba en uso, abarcando API, interfaz, archivos y publicación.',
        solution:
          'Implementé funcionalidades de punta a punta: APIs REST, pantallas orientadas a datos, carga de archivos, notificaciones e internacionalización.',
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
        title: 'Funcionalidades completas en una aplicación en producción',
      },
      {
        context: 'Talent360',
        decisions: [
          'El PDF se genera en el servidor para repetir el mismo resultado en cada ejecución.',
          'Prisma concentra los modelos, las migraciones y las consultas.',
          'La paginación ocurre en el servidor para no trasladar todo el conjunto de datos al navegador.',
        ],
        id: 'reports',
        problem:
          'El producto necesitaba generar reportes de forma repetible y consultar información sin depender de un proceso manual.',
        solution:
          'Desarrollé la generación de PDF en el backend y vistas con búsqueda, filtros, paginación y exportación.',
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
        title: 'Reportes automáticos y consulta de datos',
      },
      {
        context: 'Teampers CRM',
        decisions: [
          'Primero unifiqué la interfaz con componentes reutilizables.',
          'Los cambios se integraron manteniendo disponible el sistema en producción.',
        ],
        id: 'crm-interface',
        problem:
          'El frontend del CRM era inconsistente y costaba mantenerlo mientras el sistema seguía en uso.',
        solution:
          'Reconstruí la interfaz con HTML, CSS y jQuery, coordinando los ajustes con el backend PHP/Symfony.',
        technologies: ['HTML5', 'CSS3', 'jQuery', 'PHP', 'Symfony'],
        title: 'Interfaz más mantenible para un CRM en producción',
      },
    ],
    problem: 'Problema',
    solution: 'Solución',
    technologies: 'Tecnologías',
    title: 'Proyectos',
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
        title: 'Bases de datos',
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
        title: 'Herramientas',
      },
    ],
    intro: 'Tecnologías que uso con más frecuencia, agrupadas por área.',
    title: 'Tecnologías',
  },
  theme: {
    dark: 'Usar tema oscuro',
    light: 'Usar tema claro',
  },
};

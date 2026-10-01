export const cvText = {
  meta: {
    pdfBaseName: "Facundo_Baratta_CV",
  },
  header: {
    name: "FACUNDO BARATTA",
    contactSeparator: "|",
    linkedinUrl: "https://www.linkedin.com/in/facundo-baratta/",
    email: {
      href: "mailto:facundo.baratta@gmail.com",
      label: "facundo.baratta@gmail.com",
    },
    phone: {
      href: "https://wa.me/5491133610131",
      label: "(+54 9) 11 3361-0131",
    },
    linkedinLabel: "in/facundo-baratta",
  },
  controls: {
    linksIcon: "🔗",
    linksNote: {
      en: "Entries are links",
      es: "Las entradas son enlaces",
    },
    downloadPdf: {
      en: "Download PDF",
      es: "Descargar PDF",
    },
    switchLanguageAria: {
      fromEsToEn: "Switch language to English",
      fromEnToEs: "Cambiar idioma a español",
    },
    languageToggle: {
      en: "English",
      es: "Español",
    },
  },
  sections: {
    education: {
      title: {
        es: "EDUCACIÓN",
        en: "EDUCATION",
      },
      entries: [
        {
          left: {
            es: "Universidad de Buenos Aires",
            en: "University of Buenos Aires",
          },
          right: {
            es: "Marzo 2018 ‒ Diciembre 2025",
            en: "March 2018 ‒ December 2025",
          },
          subtitle: {
            es: "Facultad de Ingeniería",
            en: "Faculty of Engineering",
          },
          body: {
            es: "Ingeniería Informática, graduado en diciembre de 2025",
            en: "Computer Engineering, graduated December 2025",
          },
          href: "https://www.fi.uba.ar/grado/carreras/ingenieria-en-informatica",
        },
        {
          left: {
            es: "Udemy - Maximilian Schwarzmüller",
            en: "Udemy - Maximilian Schwarzmüller",
          },
          right: {
            es: "2024",
            en: "2024",
          },
          subtitle: {
            es: "React - The Complete Guide (incl. Next.js, Redux)",
            en: "React - The Complete Guide (incl. Next.js, Redux)",
          },
          body: {
            es: "React, Next.js, Redux y testing",
            en: "React, Next.js, Redux, and testing",
          },
          href: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
        },
        {
          left: {
            es: "DevTalles - Fernando Herrera",
            en: "DevTalles - Fernando Herrera",
          },
          right: {
            es: "2024",
            en: "2024",
          },
          subtitle: {
            es: "React Native Expo: Aplicaciones nativas para iOS y Android",
            en: "React Native Expo: Native Apps for iOS and Android",
          },
          body: {
            es: "TypeScript, Expo Router, JWT y despliegue en stores",
            en: "TypeScript, Expo Router, JWT, and store deployment",
          },
          href: "https://fernando-herrera.com/course/react-native-expo/",
        },
      ],
    },
    skills: {
      title: {
        es: "HABILIDADES TÉCNICAS",
        en: "TECHNICAL SKILLS",
      },
      groups: [
        {
          label: {
            es: "Ingeniería de software",
            en: "Software Engineering",
          },
          value: {
            es: "Principios de diseño, POO, estructuras de datos, control de versiones (Git), arquitectura modular (Docker), pipelines CI/CD",
            en: "Design principles, OOP, data structures, version control (Git), modular architecture (Docker), CI/CD pipelines",
          },
        },
        {
          label: {
            es: "Backend",
            en: "Backend",
          },
          value: {
            es: "Python, C++, Java, Spring Boot, APIs RESTful, SQL Server, MySQL",
            en: "Python, C++, Java, Spring Boot, REST APIs, SQL Server, MySQL",
          },
        },
        {
          label: {
            es: "Frontend",
            en: "Frontend",
          },
          value: {
            es: "React, TypeScript, JavaScript, HTML, CSS, Material UI",
            en: "React, TypeScript, JavaScript, HTML, CSS, Material UI",
          },
        },
        {
          label: {
            es: "Desarrollo asistido por IA",
            en: "AI-Assisted Development",
          },
          value: {
            es: "Agentes de código, ingeniería de contexto (AGENTS.md, Agent Skills) y desarrollo guiado por especificaciones",
            en: "Coding agents, context engineering (AGENTS.md, Agent Skills), and spec-driven development",
          },
        },
        {
          label: {
            es: "Programación de bajo nivel",
            en: "Low-level programming",
          },
          value: {
            es: "C, Assembly, sistemas operativos",
            en: "C, Assembly, operating systems",
          },
        },
      ],
    },
    experience: {
      title: {
        es: "EXPERIENCIA LABORAL Y EXTRACURRICULAR",
        en: "WORK AND EXTRACURRICULAR EXPERIENCE",
      },
      entries: [
        {
          left: {
            es: "Desarrollador Full-Stack",
            en: "Full-Stack Developer",
          },
          right: {
            es: "Octubre 2024 ‒ Septiembre 2026",
            en: "October 2024 ‒ September 2026",
          },
          subtitle: {
            es: "Creative Coefficient",
            en: "Creative Coefficient",
          },
          bullets: [
            {
              label: "Club Zurich",
              es: "Formé parte del desarrollo de una plataforma web de beneficios dinámicos para clientes de Zurich Argentina, personalizados según sus pólizas y renovados mensualmente.",
              en: "Contributed to the development of a personalized benefits platform for Zurich Argentina customers, with offers based on their insurance policies and refreshed monthly.",
            },
            {
              label: "GRM",
              es: "Integré el equipo de desarrollo de un sistema de gestión para un registro civil de Ecuador, con microservicios y arquitectura orientada a eventos con Kafka; trabajé en frontend y backend con React, TypeScript, Java y Spring Boot.",
              en: "Worked on the team developing a management system for a civil registry in Ecuador, using microservices and an event-driven architecture with Kafka; contributed across React/TypeScript frontend and Java/Spring Boot backend.",
              children: [
                {
                  es: "Implementé reglas de negocio con Drools para formularios dinámicos: validaciones, visibilidad, campos requeridos y acciones según el estado del trámite; implementé lógica para la gestión de registros y rectificaciones.",
                  en: "Implemented Drools business rules for dynamic forms, including validation, visibility, required fields, and actions based on workflow state; implemented logic for managing registry records and amendments.",
                },
                {
                  es: "Desarrollé reportes dinámicos, actas y certificados con JasperReports, integrando datos, plantillas y reglas de negocio.",
                  en: "Developed dynamic reports, registry documents, and certificates with JasperReports, integrating data, templates, and business rules.",
                },
                {
                  es: "Preparé el repositorio para agentes de IA con AGENTS.md y automaticé builds Docker y verificaciones de Drools y JasperReports.",
                  en: "Prepared the repository for AI coding agents with AGENTS.md and automated Docker builds and Drools/JasperReports checks.",
                },
              ],
            },
          ],
          href: "https://creativecoefficient.net",
        },
        {
          left: {
            es: "Consultoría IT",
            en: "IT Consulting",
          },
          right: {
            es: "Febrero 2025 ‒ Presente",
            en: "February 2025 ‒ Present",
          },
          subtitle: {
            es: "Health & Harmony Insure",
            en: "Health & Harmony Insure",
          },
          bullets: [
            {
              es: "Desarrollé y mantuve hnhinsure.com, el sitio bilingüe de una agencia de seguros de salud en Maryland, EEUU, con React y TypeScript; incorporé blog, CMS, SEO y despliegue en Cloudflare.",
              en: "Built and maintained hnhinsure.com, the bilingual website of a health insurance agency in Maryland, USA, using React and TypeScript; added a blog, CMS, SEO, and Cloudflare deployment.",
            },
            {
              es: "Creé herramientas de comunicación: un generador de emails en React con salida HTML compatible con clientes de correo y una automatización de envío de SMS mediante la API de RingCentral.",
              en: "Created communication tools: a React email builder producing email-client-compatible HTML and an SMS sending automation using the RingCentral API.",
            },
            {
              es: "Automaticé con Python la limpieza, normalización y consolidación de datos de clientes y solicitudes para CRM y planillas, con control de duplicados y conflictos; configuré y administré Salesforce.",
              en: "Automated cleaning, normalization, and consolidation of client and application data for CRM and spreadsheets using Python, with duplicate and conflict handling; configured and administered Salesforce.",
            },
          ],
          href: "https://hnhinsure.com",
        },
        {
          left: {
            es: "Ayudante de Cátedra",
            en: "Teaching Assistant",
          },
          right: {
            es: "Marzo 2022 ‒ Diciembre 2024",
            en: "March 2022 ‒ December 2024",
          },
          subtitle: {
            es: "Algoritmos y Programación",
            en: "Algorithms and Programming",
          },
          bullets: [
            {
              es: "Dicté clases prácticas de programación en C para estudiantes de Ingeniería Electrónica y guié a los grupos durante el desarrollo de trabajos prácticos.",
              en: "Taught practical programming classes in C for Electronic Engineering students and guided student teams through programming assignments.",
            },
            {
              es: "Realicé seguimiento de avances, resolución de consultas y corrección de entregas, con devolución sobre código y diseño de soluciones; coordiné actividades con el equipo docente.",
              en: "Reviewed progress, answered questions, and graded assignments with feedback on code and solution design; coordinated course activities with the teaching team.",
            },
          ],
          href: "https://algoritmos9511.gitlab.io/index.html",
        },
        {
          left: {
            es: "Proyectos Web Independientes",
            en: "Independent Web Projects",
          },
          right: {
            es: "2024 ‒ 2026",
            en: "2024 ‒ 2026",
          },
          projects: [
            {
              name: "Finca Don Clemente",
              body: {
                es: "sitio web para una finca y restaurante de campo en Salta",
                en: "website for a countryside restaurant",
              },
              href: "https://fincadonclemente.com",
            },
            {
              name: "ProTennisSquash",
              body: {
                es: "sitio web institucional",
                en: "institutional website",
              },
              href: "https://protennis.com.ar",
            },
            {
              name: "TimeMagnitude",
              body: {
                es: "Herramienta web interactiva para visualizar magnitudes de tiempo",
                en: "Interactive web tool for visualizing magnitudes of time",
              },
              href: "https://facubaratta.github.io/time/",
            },
          ],
        },
      ],
    },
    languages: {
      title: {
        es: "IDIOMAS",
        en: "LANGUAGES",
      },
      synergyUrl:
        "https://www.linkedin.com/company/synergy-language-solutions---argentina",
      synergyLabel: "Synergy Language Solutions Argentina",
      english: {
        name: {
          es: "Inglés",
          en: "English",
        },
        detail: {
          es: "C2 — Curso avanzado en empresa en",
          en: "C2 — Advanced in-company course at",
        },
      },
      spanish: {
        name: {
          es: "Español",
          en: "Spanish",
        },
        detail: {
          es: "Nativo",
          en: "Native",
        },
      },
    },
  },
};

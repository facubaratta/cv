const title = {
  es: "Desarrollador Full-Stack",
  en: "Full-Stack Developer",
};

const when = {
  es: "Octubre 2024 ‒ Septiembre 2026",
  en: "October 2024 ‒ September 2026",
};

const where = {
  es: "Creative Coefficient",
  en: "Creative Coefficient",
};

// '/Users/facu/Documents/!Archive/Creative Coefficient/grm'
const GRM = {
  label: "GRM",
  es: "Desarrollé funcionalidades de frontend con React y TypeScript y de backend con Java y Spring Boot para un sistema de registro civil de Ecuador, con microservicios y arquitectura orientada a eventos con Kafka.",
  en: "Developed React/TypeScript frontend and Java/Spring Boot backend features for an Ecuadorian civil registry system using microservices and an event-driven architecture with Kafka.",
  children: [
    {
      es: "Implementé reglas Drools para validaciones, visibilidad, campos requeridos y acciones en formularios dinámicos, y lógica de gestión de registros y rectificaciones.",
      en: "Implemented Drools rules for dynamic form validation, visibility, required fields, and workflow actions, plus logic for registry records and amendments.",
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
};

const Zurich = {
  label: "Club Zurich",
  es: "Desarrollé funcionalidades para una plataforma de beneficios para clientes de Zurich Argentina, con ofertas según sus pólizas y renovadas mensualmente.",
  en: "Developed features for a personalized benefits platform for Zurich Argentina customers, with policy-based offers refreshed monthly.",
};

const what = [GRM, Zurich];

const fullStackDev = {
  left: title,
  right: when,
  subtitle: where,
  bullets: what,
  href: "https://creativecoefficient.net",
};

export default fullStackDev;

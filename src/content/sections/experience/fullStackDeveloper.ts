import type { Entry } from '../../../types/resume';

const shared = {
  "period": {
    "start": {
      "year": 2024,
      "month": 10
    },
    "end": {
      "year": 2026,
      "month": 9
    }
  },
  "href": "https://creativecoefficient.net",
  "organization": "Creative Coefficient"
} satisfies Partial<Entry>;

export const fullStackDeveloperEn = {
  ...shared,
  "bullets": [
    {
      "label": "GRM",
      "children": [
        {
          "text": "Implemented Drools rules for dynamic form validation, visibility, required fields, and workflow actions, plus logic for registry records and amendments."
        },
        {
          "text": "Developed dynamic reports, registry documents, and certificates with JasperReports, integrating data, templates, and business rules."
        },
        {
          "text": "Prepared the repository for AI coding agents with AGENTS.md and automated Docker builds and Drools/JasperReports checks."
        }
      ],
      "text": "Developed React/TypeScript frontend and Java/Spring Boot backend features for an Ecuadorian civil registry system using microservices and an event-driven architecture with Kafka."
    },
    {
      "label": "Club Zurich",
      "text": "Developed features for a personalized benefits platform for Zurich Argentina customers, with policy-based offers refreshed monthly."
    }
  ],
  "title": "Full-Stack Developer"
} satisfies Entry;

export const fullStackDeveloperEs = {
  ...shared,
  "bullets": [
    {
      "label": "GRM",
      "children": [
        {
          "text": "Implementé reglas Drools para validaciones, visibilidad, campos requeridos y acciones en formularios dinámicos, y lógica de gestión de registros y rectificaciones."
        },
        {
          "text": "Desarrollé reportes dinámicos, actas y certificados con JasperReports, integrando datos, plantillas y reglas de negocio."
        },
        {
          "text": "Preparé el repositorio para agentes de IA con AGENTS.md y automaticé builds Docker y verificaciones de Drools y JasperReports."
        }
      ],
      "text": "Desarrollé funcionalidades de frontend con React y TypeScript y de backend con Java y Spring Boot para un sistema de registro civil de Ecuador, con microservicios y arquitectura orientada a eventos con Kafka."
    },
    {
      "label": "Club Zurich",
      "text": "Desarrollé funcionalidades para una plataforma de beneficios para clientes de Zurich Argentina, con ofertas según sus pólizas y renovadas mensualmente."
    }
  ],
  "title": "Desarrollador Full-Stack"
} satisfies Entry;

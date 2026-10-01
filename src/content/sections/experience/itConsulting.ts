import type { Entry } from '../../../types/resume';

const shared = {
  "period": {
    "start": {
      "year": 2025,
      "month": 2
    },
    "end": "present"
  },
  "href": "https://hnhinsure.com",
  "organization": "Health & Harmony Insure"
} satisfies Partial<Entry>;

export const itConsultingEn = {
  ...shared,
  "bullets": [
    {
      "text": "Built and maintained hnhinsure.com, the bilingual website of a health insurance agency in Maryland, USA, using React and TypeScript; added a blog, CMS, SEO, and Cloudflare deployment."
    },
    {
      "text": "Created communication tools: a React email builder producing email-client-compatible HTML and an SMS sending automation using the RingCentral API."
    },
    {
      "text": "Automated cleaning, normalization, and consolidation of client and application data for CRM and spreadsheets using Python, with duplicate and conflict handling; configured and administered Salesforce."
    }
  ],
  "title": "IT Consultant — Project-based"
} satisfies Entry;

export const itConsultingEs = {
  ...shared,
  "bullets": [
    {
      "text": "Desarrollé y mantuve hnhinsure.com, el sitio bilingüe de una agencia de seguros de salud en Maryland, EEUU, con React y TypeScript; incorporé blog, CMS, SEO y despliegue en Cloudflare."
    },
    {
      "text": "Creé herramientas de comunicación: un generador de emails en React con salida HTML compatible con clientes de correo y una automatización de envío de SMS mediante la API de RingCentral."
    },
    {
      "text": "Automaticé con Python la limpieza, normalización y consolidación de datos de clientes y solicitudes para CRM y planillas, con control de duplicados y conflictos; configuré y administré Salesforce."
    }
  ],
  "title": "Consultor IT — por proyectos"
} satisfies Entry;

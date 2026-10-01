import type { Entry } from '../../../types/resume';

const shared = {
  "period": {
    "start": {
      "year": 2025
    },
    "end": {
      "year": 2026
    }
  }
} satisfies Partial<Entry>;

export const independentWebProjectsEn = {
  ...shared,
  "projects": [
    {
      "name": "Finca Don Clemente",
      "href": "https://fincadonclemente.com",
      "description": "website for a countryside restaurant"
    },
    {
      "name": "ProTennisSquash",
      "href": "https://protennis.com.ar",
      "description": "institutional website"
    },
    {
      "name": "Time Magnitude",
      "href": "https://facubaratta.github.io/time/",
      "description": "Interactive web tool for visualizing magnitudes of time"
    }
  ],
  "title": "Independent Web Projects"
} satisfies Entry;

export const independentWebProjectsEs = {
  ...shared,
  "projects": [
    {
      "name": "Finca Don Clemente",
      "href": "https://fincadonclemente.com",
      "description": "sitio web para una finca y restaurante de campo en Salta"
    },
    {
      "name": "ProTennisSquash",
      "href": "https://protennis.com.ar",
      "description": "sitio web institucional"
    },
    {
      "name": "Time Magnitude",
      "href": "https://facubaratta.github.io/time/",
      "description": "Herramienta web interactiva para visualizar magnitudes de tiempo"
    }
  ],
  "title": "Proyectos Web Independientes"
} satisfies Entry;

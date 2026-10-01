import type { Entry } from '../../../types/resume';

const shared = {
  "period": {
    "start": {
      "year": 2018,
      "month": 3
    },
    "end": {
      "year": 2025,
      "month": 12
    }
  },
  "href": "https://www.fi.uba.ar/grado/carreras/ingenieria-en-informatica"
} satisfies Partial<Entry>;

export const universityBuenosAiresEn = {
  ...shared,
  "title": "University of Buenos Aires",
  "organization": "Faculty of Engineering",
  "description": "Computer Engineering, graduated December 2025"
} satisfies Entry;

export const universityBuenosAiresEs = {
  ...shared,
  "title": "Universidad de Buenos Aires",
  "organization": "Facultad de Ingeniería",
  "description": "Ingeniería Informática, graduado en diciembre de 2025"
} satisfies Entry;

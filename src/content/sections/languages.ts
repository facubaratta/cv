import type { Resume } from '../../types/resume';

export const languagesEn = {
  "title": "LANGUAGES",
  "items": [
    {
      "name": "English",
      "detail": "C2 — Advanced in-company course at",
      "link": {
        "href": "https://www.synergy-idiomas.com.ar/",
        "label": "Synergy Idiomas"
      }
    },
    {
      "name": "Spanish",
      "detail": "Native"
    }
  ]
} satisfies Resume['languages'];

export const languagesEs = {
  "title": "IDIOMAS",
  "items": [
    {
      "name": "Inglés",
      "detail": "C2 — Curso avanzado en empresa en",
      "link": {
        "href": "https://www.synergy-idiomas.com.ar/",
        "label": "Synergy Idiomas"
      }
    },
    {
      "name": "Español",
      "detail": "Nativo"
    }
  ]
} satisfies Resume['languages'];

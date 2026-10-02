import type { Resume } from '../../types/resume';

const level = "C2"
const synergyLanguages = {
  href: "https://www.linkedin.com/company/synergy-language-solutions---argentina",
  label: "Synergy Language Solutions Argentina"
}

export const languagesEn = {
  "title": "LANGUAGES",
  "items": [
    {
      "name": "English",
      "detail": `${level} — Advanced in-company course at`,
      "synergy": synergyLanguages
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
      "detail": `${level} — Curso avanzado en empresa en`,
      "synergy": synergyLanguages
    },
    {
      "name": "Español",
      "detail": "Nativo"
    }
  ]
} satisfies Resume['languages'];

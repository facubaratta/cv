import { buildPDFFileName } from './profile.js';

// Paths are relative to Astro's base; English keeps the existing home URL.
export const locales = {
  en: { path: '', label: 'English', pdf: buildPDFFileName('CV_EN') },
  es: { path: 'es/', label: 'Español', pdf: buildPDFFileName('CV_ES') },
};

import type { Resume } from '../types/resume';
import { documentEn } from './sections/document';
import { educationEn } from './sections/education';
import { skillsEn } from './sections/skills';
import { experienceEn } from './sections/experience';
import { languagesEn } from './sections/languages';

export const resumeEn = {
  locale: 'en',
  ...documentEn,
  education: educationEn,
  skills: skillsEn,
  experience: experienceEn,
  languages: languagesEn,
} satisfies Resume;

export default resumeEn;

import type { Resume } from '../types/resume';
import { documentEs } from './sections/document';
import { educationEs } from './sections/education';
import { skillsEs } from './sections/skills';
import { experienceEs } from './sections/experience';
import { languagesEs } from './sections/languages';

export const resumeEs = {
  locale: 'es',
  ...documentEs,
  education: educationEs,
  skills: skillsEs,
  experience: experienceEs,
  languages: languagesEs,
} satisfies Resume;

export default resumeEs;

import type { Resume } from '../../types/resume';
import { fullStackDeveloperEn, fullStackDeveloperEs } from './experience/fullStackDeveloper';
import { itConsultingEn, itConsultingEs } from './experience/itConsulting';
import { teachingAssistantEn, teachingAssistantEs } from './experience/teachingAssistant';
import { independentWebProjectsEn, independentWebProjectsEs } from './experience/independentWebProjects';

export const experienceEn = {
  title: "WORK AND EXTRACURRICULAR EXPERIENCE",
  entries: [fullStackDeveloperEn, itConsultingEn, teachingAssistantEn, independentWebProjectsEn],
} satisfies Resume['experience'];

export const experienceEs = {
  title: "EXPERIENCIA LABORAL Y EXTRACURRICULAR",
  entries: [fullStackDeveloperEs, itConsultingEs, teachingAssistantEs, independentWebProjectsEs],
} satisfies Resume['experience'];

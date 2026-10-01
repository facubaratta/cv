import type { Resume } from '../../types/resume';
import { universityBuenosAiresEn, universityBuenosAiresEs } from './education/universityBuenosAires';
import { reactCoursesEn, reactCoursesEs } from './education/reactCourses';

export const educationEn = {
  title: "EDUCATION",
  entries: [universityBuenosAiresEn, reactCoursesEn],
} satisfies Resume['education'];

export const educationEs = {
  title: "EDUCACIÓN",
  entries: [universityBuenosAiresEs, reactCoursesEs],
} satisfies Resume['education'];

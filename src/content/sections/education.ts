import type { Resume } from '../../types/resume';
import { universityBuenosAiresEn, universityBuenosAiresEs } from './education/universityBuenosAires';
import { reactCompleteGuideEn, reactCompleteGuideEs } from './education/reactCompleteGuide';
import { reactNativeExpoEn, reactNativeExpoEs } from './education/reactNativeExpo';

export const educationEn = {
  title: "EDUCATION",
  entries: [universityBuenosAiresEn, reactCompleteGuideEn, reactNativeExpoEn],
} satisfies Resume['education'];

export const educationEs = {
  title: "EDUCACIÓN",
  entries: [universityBuenosAiresEs, reactCompleteGuideEs, reactNativeExpoEs],
} satisfies Resume['education'];

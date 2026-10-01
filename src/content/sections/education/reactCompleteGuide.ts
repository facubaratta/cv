import type { Entry } from '../../../types/resume';

const shared = {
  "period": {
    "start": {
      "year": 2024
    }
  },
  "href": "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
  "title": "React - The Complete Guide",
  "organization": "Udemy - Maximilian Schwarzmüller"
} satisfies Partial<Entry>;

export const reactCompleteGuideEn = {
  ...shared,
  "description": "React, Next.js, Redux, and testing"
} satisfies Entry;

export const reactCompleteGuideEs = {
  ...shared,
  "description": "React, Next.js, Redux y testing"
} satisfies Entry;

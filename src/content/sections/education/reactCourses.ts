import type { Entry } from '../../../types/resume';

const period = { start: { year: 2024 } };

const reactCompleteGuide = {
  title: 'React - The Complete Guide',
  organization: 'Udemy - Maximilian Schwarzmüller',
  href: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
};

const reactNativeExpo = {
  title: 'React Native Expo',
  organization: 'DevTalles - Fernando Herrera',
  href: 'https://fernando-herrera.com/course/react-native-expo/',
};

export const reactCoursesEn = {
  title: 'React & React Native Courses',
  period,
  courses: [
    { ...reactCompleteGuide, description: 'React, Next.js, Redux, and testing' },
    { ...reactNativeExpo, description: 'TypeScript, Expo Router, JWT, and app store deployment' },
  ],
} satisfies Entry;

export const reactCoursesEs = {
  title: 'Cursos de React y React Native',
  period,
  courses: [
    { ...reactCompleteGuide, description: 'React, Next.js, Redux y testing' },
    { ...reactNativeExpo, description: 'TypeScript, Expo Router, JWT y despliegue en app stores' },
  ],
} satisfies Entry;

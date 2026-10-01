import type { Entry } from '../../../types/resume';

const shared = {
  "period": {
    "start": {
      "year": 2024
    }
  },
  "href": "https://fernando-herrera.com/course/react-native-expo/",
  "title": "React Native Expo",
  "organization": "DevTalles - Fernando Herrera"
} satisfies Partial<Entry>;

export const reactNativeExpoEn = {
  ...shared,
  "description": "TypeScript, Expo Router, JWT, and store deployment"
} satisfies Entry;

export const reactNativeExpoEs = {
  ...shared,
  "description": "TypeScript, Expo Router, JWT y despliegue en stores"
} satisfies Entry;

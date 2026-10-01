import SectionTitle from "../common/SectionTitle";
import Entry from "../common/Entry";

const title = {
  es: "EDUCACIÓN",
  en: "EDUCATION",
};

const UBA = {
  left: {
    es: "Universidad de Buenos Aires",
    en: "University of Buenos Aires",
  },
  right: {
    es: "Marzo 2018 ‒ Diciembre 2025",
    en: "March 2018 ‒ December 2025",
  },
  subtitle: {
    es: "Facultad de Ingeniería",
    en: "Faculty of Engineering",
  },
  body: {
    es: "Ingeniería Informática, graduado en diciembre de 2025",
    en: "Computer Engineering, graduated December 2025",
  },
  href: "https://www.fi.uba.ar/grado/carreras/ingenieria-en-informatica",
};

const REACT_JS = {
  left: {
    es: "React - The Complete Guide",
    en: "React - The Complete Guide",
  },
  right: {
    es: "2024",
    en: "2024",
  },
  subtitle: {
    es: "Udemy - Maximilian Schwarzmüller",
    en: "Udemy - Maximilian Schwarzmüller",
  },
  body: {
    es: "React, Next.js, Redux y testing",
    en: "React, Next.js, Redux, and testing",
  },
  href: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
};

const REACT_NATIVE = {
  left: {
    es: "React Native Expo",
    en: "React Native Expo",
  },
  right: {
    es: "2024",
    en: "2024",
  },
  subtitle: {
    es: "DevTalles - Fernando Herrera",
    en: "DevTalles - Fernando Herrera",
  },
  body: {
    es: "TypeScript, Expo Router, JWT y despliegue en stores",
    en: "TypeScript, Expo Router, JWT, and store deployment",
  },
  href: "https://fernando-herrera.com/course/react-native-expo/",
};

const entries = [UBA, REACT_JS, REACT_NATIVE];

function EducationSection() {

  return (
    <section className="experience">
      <SectionTitle es={title.es} en={title.en} />

      {entries.map((entry, index) => (
        <Entry
          key={`${entry.left.en}-${entry.right.en}-${entry.subtitle.en}-${entry.href ?? index}`}
          leftEs={entry.left.es}
          rightEs={entry.right.es}
          leftEn={entry.left.en}
          rightEn={entry.right.en}
          subtitleEs={entry.subtitle.es}
          subtitleEn={entry.subtitle.en}
          bodyEs={entry.body.es}
          bodyEn={entry.body.en}
          href={entry.href}
        />
      ))}
    </section>
  );
}

export default EducationSection;

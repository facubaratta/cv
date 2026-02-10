import SectionTitle from "../common/SectionTitle";
import Entry from "../common/Entry";

function EducationSection() {
  return (
    <section className="experience">
      <SectionTitle es="EDUCACIÓN" en="EDUCATION" />

      <Entry
        leftEs="Universidad de Buenos Aires"
        rightEs="Marzo 2018 ‒ Diciembre 2025"
        leftEn="University of Buenos Aires"
        rightEn="March 2018 ‒ December 2025"
        subtitleEs="Facultad de Ingeniería"
        subtitleEn="Faculty of Engineering"
        bodyEs="Ingeniería Informática, graduado en diciembre de 2025."
        bodyEn={
          <>
            Computer Engineering (<em>"Ingeniería Informática"</em>, 
            CS-equivalent curriculum), graduated December 2025.
          </>
        }
        href="https://www.fi.uba.ar/grado/carreras/ingenieria-en-informatica"
      />
      <Entry
        leftEs="Udemy - Maximilian Schwarzmüller"
        rightEs="2024"
        leftEn="Udemy - Maximilian Schwarzmüller"
        rightEn="2024"
        subtitleEs="React - The Complete Guide (incl. Next.js, Redux)"
        subtitleEn="React - The Complete Guide (incl. Next.js, Redux)"
        bodyEs="React, Next.js, Redux y testing."
        bodyEn="React, Next.js, Redux, and testing."
        href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
      />
      <Entry
        leftEs="DevTalles - Fernando Herrera"
        rightEs="2024"
        leftEn="DevTalles - Fernando Herrera"
        rightEn="2024"
        subtitleEs="React Native Expo: Aplicaciones nativas para iOS y Android"
        subtitleEn="React Native Expo: Native Apps for iOS and Android"
        bodyEs="TypeScript, Expo Router, JWT y despliegue en stores."
        bodyEn="TypeScript, Expo Router, JWT, and store deployment."
        href="https://fernando-herrera.com/course/react-native-expo/"
      />
      <Entry
        leftEs="DevTalles - Fernando Herrera"
        rightEs="2024"
        leftEn="DevTalles - Fernando Herrera"
        rightEn="2024"
        subtitleEs="Mini-Curso: Visual Studio Code"
        subtitleEn="Mini-Course: Visual Studio Code"
        bodyEs="Atajos y edicion rapida."
        bodyEn="Shortcuts and faster editing."
        href="https://fernando-herrera.com/course/curso-vscode/"
      />
    </section>
  );
}

export default EducationSection;

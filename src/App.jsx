import { useEffect, useState } from "react";
import Header from "./components/Header";
import TopControls from "./components/TopControls";
import EducationSection from "./components/sections/EducationSection";
import SkillsSection from "./components/sections/SkillsSection";
import ExperienceSection from "./components/sections/experience/ExperienceSection.jsx";
import LanguagesSection from "./components/sections/LanguagesSection";

const pdfBaseName = "Facundo_Baratta_CV";

function getInitialLanguage() {
  return new URLSearchParams(window.location.search).get("lang") === "es"
    ? "es"
    : "en";
}

function App() {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const isSpanish = lang === "es";

  const pdfFileName = `${pdfBaseName}_${lang.toUpperCase()}.pdf`;
  const pdfUrl = `${import.meta.env.BASE_URL}${pdfFileName}`;

  return (
    <main className="page">
      <TopControls
        isSpanish={isSpanish}
        onToggleLanguage={() => setLang(isSpanish ? "en" : "es")}
        pdfFileName={pdfFileName}
        pdfUrl={pdfUrl}
      />
      <div className="cv-content">
        <Header />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <LanguagesSection />
      </div>
    </main>
  );
}

export default App;

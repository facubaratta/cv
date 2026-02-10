import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import TopControls from "./components/TopControls";
import EducationSection from "./components/sections/EducationSection";
import SkillsSection from "./components/sections/SkillsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import LanguagesSection from "./components/sections/LanguagesSection";
import { exportCvToPdf } from "./utils/pdfExport";

function App() {
  const [lang, setLang] = useState("en");
  const [isExporting, setIsExporting] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const isSpanish = lang === "es";

  const handleDownloadPdf = async () => {
    if (!pageRef.current || isExporting) return;
    setIsExporting(true);

    const title = `Facundo_Baratta_CV_${lang.toUpperCase()}.pdf`;
    try {
      await exportCvToPdf({ element: pageRef.current, title });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <main ref={pageRef} className="page">
      <TopControls
        isSpanish={isSpanish}
        onToggleLanguage={() => setLang(isSpanish ? "en" : "es")}
        onDownloadPdf={handleDownloadPdf}
        isExporting={isExporting}
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

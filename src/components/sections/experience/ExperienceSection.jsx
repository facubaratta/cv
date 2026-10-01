import SectionTitle from "../../common/SectionTitle.jsx";
import Entry from "../../common/Entry.jsx";
import fullstackDev from "./fullStackDev.js";
import itConsultant from "./itConsultant.js";
import teachingAssistant from "./teachingAssistant.js";
import independentWebProjects from "./independentWebProjects.js";

const title = {
  es: "EXPERIENCIA LABORAL Y EXTRACURRICULAR",
  en: "WORK AND EXTRACURRICULAR EXPERIENCE",
};

const entries = [
  fullstackDev,
  itConsultant,
  teachingAssistant,
  independentWebProjects,
];

function ExperienceSection() {
  return (
    <section className="experience">
      <SectionTitle es={title.es} en={title.en} />

      {entries.map((entry, index) => (
        <Entry
          key={`${entry.left.en}-${entry.right.en}-${entry.subtitle?.en ?? index}`}
          leftEs={entry.left.es}
          rightEs={entry.right.es}
          leftEn={entry.left.en}
          rightEn={entry.right.en}
          subtitleEs={entry.subtitle?.es}
          subtitleEn={entry.subtitle?.en}
          bodyEs={entry.body?.es}
          bodyEn={entry.body?.en}
          href={entry.href}
          projects={entry.projects}
          bullets={entry.bullets}
        />
      ))}
    </section>
  );
}

export default ExperienceSection;

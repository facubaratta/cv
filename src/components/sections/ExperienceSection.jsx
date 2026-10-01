import SectionTitle from "../common/SectionTitle";
import Entry from "../common/Entry";
import { cvText } from "../../config/cvText";

function ExperienceSection() {
  const { experience } = cvText.sections;

  return (
    <section className="experience">
      <SectionTitle es={experience.title.es} en={experience.title.en} />

      {experience.entries.map((entry, index) => (
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

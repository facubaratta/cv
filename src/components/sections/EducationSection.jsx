import SectionTitle from "../common/SectionTitle";
import Entry from "../common/Entry";
import { cvText } from "../../config/cvText";

function EducationSection() {
  const { education } = cvText.sections;

  return (
    <section className="experience">
      <SectionTitle es={education.title.es} en={education.title.en} />

      {education.entries.map((entry) => (
        <Entry
          key={`${entry.left.en}-${entry.right.en}`}
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

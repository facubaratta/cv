import SectionTitle from "../common/SectionTitle";
import BilingualText from "../common/BilingualText";
import { cvText } from "../../config/cvText";

function SkillsSection() {
  const { skills } = cvText.sections;

  return (
    <section>
      <SectionTitle es={skills.title.es} en={skills.title.en} />

      <ul className="skills">
        {skills.groups.map((group) => (
          <li key={group.label.en}>
            <BilingualText
              es={
                <>
                  <strong>{group.label.es}:</strong> {group.value.es}
                </>
              }
              en={
                <>
                  <strong>{group.label.en}:</strong> {group.value.en}
                </>
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SkillsSection;

import SectionTitle from "../common/SectionTitle";
import Anchor from "../common/Anchor";
import { cvText } from "../../config/cvText";

function LanguagesSection() {
  const { languages } = cvText.sections;

  return (
    <section>
      <SectionTitle es={languages.title.es} en={languages.title.en} />
      <ul className="languages lang-es">
        <li className="language-item">
          <strong>{languages.english.name.es}</strong>
          <em>
            {languages.english.detail.es}{" "}
            <Anchor href={languages.synergyUrl}>{languages.synergyLabel}</Anchor>
          </em>
        </li>
        <li className="language-item">
          <strong>{languages.spanish.name.es}</strong>
          <em>{languages.spanish.detail.es}</em>
        </li>
      </ul>
      <ul className="languages lang-en">
        <li className="language-item">
          <strong>{languages.english.name.en}</strong>
          <em>
            {languages.english.detail.en}{" "}
            <Anchor href={languages.synergyUrl}>{languages.synergyLabel}</Anchor>
          </em>
        </li>
        <li className="language-item">
          <strong>{languages.spanish.name.en}</strong>
          <em>{languages.spanish.detail.en}</em>
        </li>
      </ul>
    </section>
  );
}

export default LanguagesSection;

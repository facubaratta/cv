import SectionTitle from "../common/SectionTitle";
import Anchor from "../common/Anchor";

const title = {
  es: "IDIOMAS",
  en: "LANGUAGES",
};

const english = {
  name: {
    es: "Inglés",
    en: "English",
  },
  detail: {
    es: "C2 — Curso avanzado en empresa en",
    en: "C2 — Advanced in-company course at",
  },
  synergy: {
    url: "https://www.linkedin.com/company/synergy-language-solutions---argentina",
    label: "Synergy Language Solutions Argentina",
  },
};

const spanish = {
  name: {
    es: "Español",
    en: "Spanish",
  },
  detail: {
    es: "Nativo",
    en: "Native",
  },
};

function LanguagesSection() {
  return (
    <section>
      <SectionTitle es={title.es} en={title.en} />
      <ul className="languages lang-es">
        <li className="language-item">
          <strong>{english.name.es}</strong>
          <em>
            {english.detail.es}{" "}
            <Anchor href={english.synergy.url}>
              {english.synergy.label}
            </Anchor>
          </em>
        </li>
        <li className="language-item">
          <strong>{spanish.name.es}</strong>
          <em>{spanish.detail.es}</em>
        </li>
      </ul>
      <ul className="languages lang-en">
        <li className="language-item">
          <strong>{english.name.en}</strong>
          <em>
            {english.detail.en}{" "}
            <Anchor href={english.synergy.url}>
              {english.synergy.label}
            </Anchor>
          </em>
        </li>
        <li className="language-item">
          <strong>{spanish.name.en}</strong>
          <em>{spanish.detail.en}</em>
        </li>
      </ul>
    </section>
  );
}

export default LanguagesSection;

import SectionTitle from "../common/SectionTitle";
import Anchor from "../common/Anchor";

function LanguagesSection() {
  return (
    <section>
      <SectionTitle es="IDIOMAS" en="LANGUAGES" />
      <ul className="languages lang-es">
        <li className="language-item">
          <strong>Inglés</strong>
          <em>Curso avanzado en empresa en{" "}
            <Anchor href="https://www.linkedin.com/company/synergy-language-solutions---argentina/?originalSubdomain=ar">
              Synergy Language Solutions Argentina
            </Anchor>
          </em>
        </li>
        <li className="language-item">
          <strong>Español</strong>
          <em>Nativo</em>
        </li>
      </ul>
      <ul className="languages lang-en">
        <li className="language-item">
          <strong>English</strong>
          <em>Advanced in-company course at{" "}
            <Anchor href="https://www.linkedin.com/company/synergy-language-solutions---argentina/?originalSubdomain=ar">
              Synergy Language Solutions Argentina
            </Anchor>
          </em>
        </li>
        <li className="language-item">
          <strong>Spanish</strong>
          <em>Native</em>
        </li>
      </ul>
    </section>
  );
}

export default LanguagesSection;

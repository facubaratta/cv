import SectionTitle from "../common/SectionTitle";
import Anchor from "../common/Anchor";

function LanguagesSection() {
  return (
    <section>
      <SectionTitle es="IDIOMAS" en="LANGUAGES" />
      <p className="languages lang-es">
        <span className="language-item">
          <strong>Inglés</strong>
          <em>Curso avanzado en empresa en{" "}
            <Anchor href="https://www.linkedin.com/company/synergy-language-solutions---argentina/?originalSubdomain=ar">
              Synergy Language Solutions Argentina
            </Anchor>
          </em>
        </span>
        <span className="language-item">
          <strong>Español</strong>
          <em>Nativo</em>
        </span>
      </p>
      <p className="languages lang-en">
        <span className="language-item">
          <strong>English</strong>
          <em>Advanced in-company course at{" "}
            <Anchor href="https://www.linkedin.com/company/synergy-language-solutions---argentina/?originalSubdomain=ar">
              Synergy Language Solutions Argentina
            </Anchor>
          </em>
        </span>
        <span className="language-item">
          <strong>Spanish</strong>
          <em>Native</em>
        </span>
      </p>
    </section>
  );
}

export default LanguagesSection;

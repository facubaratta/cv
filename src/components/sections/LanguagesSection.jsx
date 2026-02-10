import SectionTitle from "../common/SectionTitle";

function LanguagesSection() {
  return (
    <section>
      <SectionTitle es="IDIOMAS" en="LANGUAGES" />
      <p className="languages" data-lang="es">
        <span className="language-item">
          <strong>Inglés</strong>
          <em>Curso avanzado en empresa en{" "}
            <a
              href="https://www.linkedin.com/company/synergy-language-solutions---argentina/?originalSubdomain=ar"
              target="_blank"
              rel="noreferrer"
            >
              Synergy Language Solutions Argentina
            </a>
          </em>
        </span>
        <span className="language-item">
          <strong>Español</strong>
          <em>Nativo</em>
        </span>
      </p>
      <p className="languages" data-lang="en">
        <span className="language-item">
          <strong>English</strong>
          <em>Advanced in-company course at{" "}
            <a
              href="https://www.linkedin.com/company/synergy-language-solutions---argentina/?originalSubdomain=ar"
              target="_blank"
              rel="noreferrer"
            >
              Synergy Language Solutions Argentina
            </a>
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

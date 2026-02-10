import Anchor from "./common/Anchor";

const LINKEDIN_URL = "https://www.linkedin.com/in/facundo-baratta/";

function Header() {
  return (
    <header>
      <h1>
        <Anchor href={LINKEDIN_URL}>
          FACUNDO BARATTA
        </Anchor>
      </h1>
      <p className="contact">
        <Anchor href="mailto:facundo.baratta@gmail.com">facundo.baratta@gmail.com</Anchor>
        <span className="contact-separator" aria-hidden="true">
          |
        </span>
        <Anchor href="https://wa.me/5491133610131">
          (+54 9) 11 3361-0131
        </Anchor>
        <span className="contact-separator" aria-hidden="true">
          |
        </span>
        <Anchor href={LINKEDIN_URL}>
          in/facundo-baratta
        </Anchor>
      </p>
    </header>
  );
}

export default Header;

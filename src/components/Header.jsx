const LinkedInLink = (children) => (
  <a
    href="https://www.linkedin.com/in/facundo-baratta/"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

function Header() {
  return (
    <header>
      <h1>
        {LinkedInLink("FACUNDO BARATTA")}
      </h1>
      <p className="contact">
        <a href="mailto:facundo.baratta@gmail.com">facundo.baratta@gmail.com</a>
        <span className="contact-separator" aria-hidden="true">
          |
        </span>
        <a
          href="https://wa.me/5491133610131"
          target="_blank"
          rel="noopener noreferrer"
        >
          (+54 9) 11 3361-0131
        </a>
        <span className="contact-separator" aria-hidden="true">
          |
        </span>
        {LinkedInLink("in/facundo-baratta")}
      </p>
    </header>
  );
}

export default Header;

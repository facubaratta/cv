import Anchor from "./common/Anchor";

const name = "FACUNDO BARATTA";
const email = "facundo.baratta@gmail.com";
const linkedinUsername = "facundo-baratta";
const phone = {
  href: "https://wa.me/5491133610131",
  label: "(+54 9) 11 3361-0131",
};

const Separator = () => (
  <span className="contact-separator" aria-hidden="true">
    |
  </span>
);

function Header() {
  const linkedinUrl = `https://www.linkedin.com/in/${linkedinUsername}/`;
  return (
    <header>
      <h1>
        <Anchor href={linkedinUrl}>{name}</Anchor>
      </h1>
      <p className="contact">
        <Anchor href={`mailto:${email}`}>{email}</Anchor>
        <Separator />
        <Anchor href={phone.href}>{phone.label}</Anchor>
        <Separator />
        <Anchor href={linkedinUrl}>in/{linkedinUsername}</Anchor>
      </p>
    </header>
  );
}

export default Header;

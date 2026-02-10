import Anchor from "./common/Anchor";
import { cvText } from "../config/cvText";

const { header } = cvText;

function Header() {
  return (
    <header>
      <h1>
        <Anchor href={header.linkedinUrl}>{header.name}</Anchor>
      </h1>
      <p className="contact">
        <Anchor href={header.email.href}>{header.email.label}</Anchor>
        <span className="contact-separator" aria-hidden="true">
          {header.contactSeparator}
        </span>
        <Anchor href={header.phone.href}>{header.phone.label}</Anchor>
        <span className="contact-separator" aria-hidden="true">
          {header.contactSeparator}
        </span>
        <Anchor href={header.linkedinUrl}>{header.linkedinLabel}</Anchor>
      </p>
    </header>
  );
}

export default Header;

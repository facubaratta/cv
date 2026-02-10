function Anchor({ href, children }) {
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <a
      className="anchor"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default Anchor;

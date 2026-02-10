function SectionTitle({ es, en }) {
  return (
    <h2 className="section-title">
      <span className="lang-es">{es}</span>
      <span className="lang-en">{en}</span>
    </h2>
  );
}

export default SectionTitle;

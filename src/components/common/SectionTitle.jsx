function SectionTitle({ es, en }) {
  return (
    <h2 className="section-title">
      <span data-lang="es">{es}</span>
      <span data-lang="en">{en}</span>
    </h2>
  );
}

export default SectionTitle;

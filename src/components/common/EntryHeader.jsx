function EntryHeader({
  leftEs,
  rightEs,
  leftEn,
  rightEn,
}) {
  return (
    <>
      <span className="entry-header lang-es">
        <span className="left">{leftEs}</span>
        <span className="right">{rightEs}</span>
      </span>
      <span className="entry-header lang-en">
        <span className="left">{leftEn}</span>
        <span className="right">{rightEn}</span>
      </span>
    </>
  );
}

export default EntryHeader;

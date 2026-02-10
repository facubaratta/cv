function EntryHeader({
  leftEs,
  rightEs,
  leftEn,
  rightEn,
}) {
  return (
    <>
      <span className="entry-header" data-lang="es">
        <span className="left">{leftEs}</span>
        <span className="right">{rightEs}</span>
      </span>
      {leftEn !== undefined && rightEn !== undefined ? (
        <span className="entry-header" data-lang="en">
          <span className="left">{leftEn}</span>
          <span className="right">{rightEn}</span>
        </span>
      ) : null}
    </>
  );
}

export default EntryHeader;

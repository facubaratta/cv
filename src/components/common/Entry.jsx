import BilingualText from "./BilingualText";
import EntryHeader from "./EntryHeader";

function Entry({
  leftEs,
  rightEs,
  leftEn,
  rightEn,
  subtitleEs,
  subtitleEn,
  bodyEs,
  bodyEn,
  entryLang,
  href,
}) {
  const content = (
    <>
      <EntryHeader
        leftEs={leftEs}
        rightEs={rightEs}
        leftEn={leftEn}
        rightEn={rightEn}
      />
      <BilingualText
        as="span"
        className="subtitle"
        es={subtitleEs}
        en={subtitleEn}
      />
      <br />
      <BilingualText as="span" es={bodyEs} en={bodyEn} />
    </>
  );

  return (
    <p className="entry" data-lang={entryLang}>
      {href ? (
        <a className="entry-link" href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <span className="entry-content">{content}</span>
      )}
    </p>
  );
}

export default Entry;

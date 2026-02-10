import BilingualText from "./BilingualText";
import EntryHeader from "./EntryHeader";
import Anchor from "./Anchor";

function Entry({
  leftEs,
  rightEs,
  leftEn,
  rightEn,
  subtitleEs,
  subtitleEn,
  bodyEs,
  bodyEn,
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
    <p className="entry">
      {href ? (
        <Anchor href={href}>
          {content}
        </Anchor>
      ) : (
        <span className="entry-content">{content}</span>
      )}
    </p>
  );
}

export default Entry;

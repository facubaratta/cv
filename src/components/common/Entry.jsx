import BilingualText from "./BilingualText";
import EntryHeader from "./EntryHeader";
import Anchor from "./Anchor";
import ProjectList from "./ProjectList";

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
  projects,
}) {
  if (projects) {
    return (
      <div className="entry project-entry">
        <div className="entry-content">
          <EntryHeader
            leftEs={leftEs}
            rightEs={rightEs}
            leftEn={leftEn}
            rightEn={rightEn}
          />
          <ProjectList projects={projects} />
        </div>
      </div>
    );
  }

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

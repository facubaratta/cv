import Anchor from "./Anchor";

function EntryFrame({ href, isProjectEntry, children }) {
  return (
    <div className={isProjectEntry ? "entry project-entry" : "entry"}>
      {href ? (
        <Anchor href={href}>{children}</Anchor>
      ) : (
        <div className="entry-content">{children}</div>
      )}
    </div>
  );
}

export default EntryFrame;

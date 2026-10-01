import EntryHeader from "./EntryHeader";
import EntryDetails from "./EntryDetails";
import EntryFrame from "./EntryFrame";
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
  bullets,
}) {
  return (
    <EntryFrame href={projects ? undefined : href} isProjectEntry={Boolean(projects)}>
      <EntryHeader
        leftEs={leftEs}
        rightEs={rightEs}
        leftEn={leftEn}
        rightEn={rightEn}
      />
      {projects ? (
        <ProjectList projects={projects} />
      ) : (
        <EntryDetails
          subtitleEs={subtitleEs}
          subtitleEn={subtitleEn}
          bodyEs={bodyEs}
          bodyEn={bodyEn}
          bullets={bullets}
        />
      )}
    </EntryFrame>
  );
}

export default Entry;

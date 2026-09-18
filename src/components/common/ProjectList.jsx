import BilingualText from "./BilingualText";
import Anchor from "./Anchor";

function ProjectList({ projects }) {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.href}>
          <Anchor href={project.href}>
            <span className="subtitle">{project.name}:</span>{" "}
            <BilingualText as="span" es={project.body.es} en={project.body.en} />
            {" - "}
            <span className="project-url">
              {project.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </span>
          </Anchor>
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;

import SectionTitle from "../common/SectionTitle";
import BilingualText from "../common/BilingualText";

const title = {
  es: "HABILIDADES TÉCNICAS",
  en: "TECHNICAL SKILLS",
};

const softwareEngineering = {
  label: {
    es: "Ingeniería de software",
    en: "Software Engineering",
  },
  value: {
    es: "Principios de diseño, POO, estructuras de datos, Git, Docker, pipelines CI/CD",
    en: "Design principles, OOP, data structures, Git, Docker, CI/CD pipelines",
  },
};

const backend = {
  label: {
    es: "Backend",
    en: "Backend",
  },
  value: {
    es: "Python, C++, Java, Spring Boot, APIs RESTful, SQL Server, MySQL",
    en: "Python, C++, Java, Spring Boot, REST APIs, SQL Server, MySQL",
  },
};

const frontend = {
  label: {
    es: "Frontend",
    en: "Frontend",
  },
  value: {
    es: "React, TypeScript, JavaScript, HTML, CSS, Material UI",
    en: "React, TypeScript, JavaScript, HTML, CSS, Material UI",
  },
};

const aiAssistedDevelopment = {
  label: {
    es: "Desarrollo asistido por IA",
    en: "AI-Assisted Development",
  },
  value: {
    es: "Agentes de código, ingeniería de contexto, desarrollo guiado por especificaciones",
    en: "Coding agents, context engineering, spec-driven development",
  },
};

const lowLevelProgramming = {
  label: {
    es: "Programación de bajo nivel",
    en: "Low-level programming",
  },
  value: {
    es: "C, Assembly, sistemas operativos",
    en: "C, Assembly, operating systems",
  },
};

const groups = [
  softwareEngineering,
  backend,
  frontend,
  aiAssistedDevelopment,
  lowLevelProgramming,
];

function SkillsSection() {
  return (
    <section>
      <SectionTitle es={title.es} en={title.en} />

      <ul className="skills">
        {groups.map((group) => (
          <li key={group.label.en}>
            <BilingualText
              es={
                <>
                  <strong>{group.label.es}:</strong> {group.value.es}
                </>
              }
              en={
                <>
                  <strong>{group.label.en}:</strong> {group.value.en}
                </>
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SkillsSection;

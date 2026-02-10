import SectionTitle from "../common/SectionTitle";
import BilingualText from "../common/BilingualText";

function SkillsSection() {
  return (
    <section>
      <SectionTitle es="HABILIDADES TÉCNICAS" en="TECHNICAL SKILLS" />

      <ul className="skills">
        <li>
          <BilingualText
            es={
              <>
                <strong>Programación e ingeniería de software:</strong> Python, C, C++, Java,
                LaTeX, control de versiones, POO, principios y patrones de diseño,
                estructuras de datos, sistemas operativos, algoritmos, assembly y
                programación de bajo nivel.
              </>
            }
            en={
              <>
                <strong>Programming and Software Engineering:</strong> Python, C, C++, Java,
                LaTeX, version control, OOP, design principles and patterns, data
                structures, operating systems, algorithms, assembly, and low-level
                programming.
              </>
            }
          />
        </li>
        <li>
          <BilingualText
            es={
              <>
                <strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript, React.
              </>
            }
            en={
              <>
                <strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript, React.
              </>
            }
          />
        </li>
        <li>
          <BilingualText
            es={
              <>
                <strong>Procesamiento de datos:</strong> SQL, NumPy, Matplotlib, Pandas, Apache
                Spark.
              </>
            }
            en={
              <>
                <strong>Data processing:</strong> SQL, NumPy, Matplotlib, Pandas, Apache Spark.
              </>
            }
          />
        </li>
        <li>
          <BilingualText
            es={
              <>
                <strong>Interfaces gráficas:</strong> JavaFX, SDL2.
              </>
            }
            en={
              <>
                <strong>Graphical interfaces:</strong> JavaFX, SDL2.
              </>
            }
          />
        </li>
      </ul>
    </section>
  );
}

export default SkillsSection;

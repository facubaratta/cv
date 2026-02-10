import SectionTitle from "../common/SectionTitle";
import Entry from "../common/Entry";

const Link = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

function ExperienceSection() {
  return (
    <section className="experience">
      <SectionTitle
        es="EXPERIENCIA LABORAL Y EXTRACURRICULAR"
        en="WORK AND EXTRACURRICULAR EXPERIENCE"
      />

      <Entry
        leftEs="Creative Coefficient"
        rightEs="Octubre 2024 ‒ Presente"
        leftEn="Creative Coefficient"
        rightEn="October 2024 ‒ Present"
        href="https://creativecoefficient.net"
        subtitleEs="Desarrollador Frontend (React)"
        subtitleEn="Frontend Developer (React)"
        bodyEs={
          <>
            Desarrollo interfaces web con React en proyectos colaborativos, aplicando
            metodologías <strong>Agile</strong> como <strong>Scrum</strong> y{" "}
            <strong>Planning Poker</strong>, y fortaleciendo la comunicación efectiva y la
            autogestión.
          </>
        }
        bodyEn={
          <>
            I build React web interfaces in collaborative projects, using{" "}
            <strong>Agile</strong> methodologies such as <strong>Scrum</strong> and{" "}
            <strong>Planning Poker</strong>, while strengthening communication and
            self-management skills.
          </>
        }
      />

      <Entry
        leftEs="Consultoría IT"
        rightEs="Febrero 2025 ‒ Presente"
        leftEn="IT Consulting"
        rightEn="February 2025 ‒ Present"
        href="https://hnhinsure.com"
        subtitleEs="Health & Harmony Insure"
        subtitleEn="Health & Harmony Insure"
        bodyEs={
          <>Consultor privado de soluciones digitales e IT para una agencia de seguros de salud en Maryland, USA. Desarrollado por mí:{" "}<Link href="https://hnhinsure.com">hnhinsure.com</Link></>
        }
        bodyEn={
          <>Private consultant for digital and IT solutions for a health insurance agency in Maryland, USA. Built by me:{" "}<Link href="https://hnhinsure.com">hnhinsure.com</Link></>
        }
      />

      <Entry
        leftEs="Ayudante de Cátedra"
        rightEs="Marzo 2022 ‒ Diciembre 2024"
        leftEn="Teaching Assistant"
        rightEn="March 2022 ‒ December 2024"
        href="https://algoritmos9511.gitlab.io/index.html"
        subtitleEs="Algoritmos y Programación"
        subtitleEn="Algorithms and Programming"
        bodyEs="Dicté clases prácticas y corregí trabajos en la materia de programación de Electrónica, con foco en C."
        bodyEn="I taught lab sessions and graded coursework in the Electronics programming course, with a focus on C."
      />

      <Entry
        leftEs="Proyecto Web"
        rightEs="2024"
        leftEn="Web Project"
        rightEn="2024"
        href="https://fincadonclemente.com"
        subtitleEs="Finca Don Clemente"
        subtitleEn="Finca Don Clemente"
        bodyEs={
          <>Desarrollado por mí{" "}<Link href="https://fincadonclemente.com">fincadonclemente.com</Link></>
        }
        bodyEn={
          <>Built by me:{" "}<Link href="https://fincadonclemente.com">fincadonclemente.com</Link></>
        }
      />
    </section>
  );
}

export default ExperienceSection;

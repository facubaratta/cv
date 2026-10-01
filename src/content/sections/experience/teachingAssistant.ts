import type { Entry } from '../../../types/resume';

const shared = {
  "period": {
    "start": {
      "year": 2022,
      "month": 3
    },
    "end": {
      "year": 2024,
      "month": 12
    }
  },
  "href": "https://algoritmos9511.gitlab.io/index.html"
} satisfies Partial<Entry>;

/* Application role description (English):
Taught practical C programming classes for Electronic Engineering students in
the Algorithms and Programming course at the University of Buenos Aires. Guided
student teams through programming assignments, answered technical questions,
and graded submissions with feedback on code and software design. Coordinated
class activities and assignment support with the teaching team.
*/
export const teachingAssistantEn = {
  ...shared,
  "bullets": [
    {
      "text": "Taught practical programming classes in C for Electronic Engineering students and guided student teams through programming assignments."
    },
    {
      "text": "Answered questions and graded assignments with feedback on code and design; coordinated activities with the teaching team."
    }
  ],
  "title": "Teaching Assistant",
  "organization": "University of Buenos Aires — Algorithms and Programming"
} satisfies Entry;

export const teachingAssistantEs = {
  ...shared,
  "bullets": [
    {
      "text": "Dicté clases prácticas de programación en C para estudiantes de Ingeniería Electrónica y guié a los grupos durante el desarrollo de trabajos prácticos."
    },
    {
      "text": "Resolví consultas y corregí entregas con devolución sobre código y diseño; coordiné actividades con el equipo docente."
    }
  ],
  "title": "Ayudante de Cátedra",
  "organization": "Universidad de Buenos Aires — Algoritmos y Programación"
} satisfies Entry;

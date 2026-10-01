import type { Resume } from '../../types/resume';

export const skillsEn = {
  "title": "TECHNICAL SKILLS",
  "items": [
    {
      "label": "Software Engineering",
      "value": "Design principles, Object-oriented programming, data structures, Git, Docker, CI/CD pipelines"
    },
    {
      "label": "Backend",
      "value": "Python, C++, Java, Spring Boot, REST APIs, SQL Server, MySQL"
    },
    {
      "label": "Frontend",
      "value": "React, TypeScript, JavaScript, HTML, CSS, Material UI"
    },
    {
      "label": "AI-Assisted Development",
      "value": "Coding agents, context engineering, spec-driven development"
    },
    {
      "label": "Low-level programming",
      "value": "C, Assembly, operating systems"
    }
  ]
} satisfies Resume['skills'];

export const skillsEs = {
  "title": "HABILIDADES TÉCNICAS",
  "items": [
    {
      "label": "Ingeniería de software",
      "value": "Principios de diseño, Programación orientada a objetos, estructuras de datos, Git, Docker, pipelines CI/CD"
    },
    {
      "label": "Backend",
      "value": "Python, C++, Java, Spring Boot, APIs RESTful, SQL Server, MySQL"
    },
    {
      "label": "Frontend",
      "value": "React, TypeScript, JavaScript, HTML, CSS, Material UI"
    },
    {
      "label": "Desarrollo asistido por IA",
      "value": "Agentes de código, ingeniería de contexto, desarrollo guiado por especificaciones"
    },
    {
      "label": "Programación de bajo nivel",
      "value": "C, Assembly, sistemas operativos"
    }
  ]
} satisfies Resume['skills'];

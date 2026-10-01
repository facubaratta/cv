import type { Resume } from "../../types/resume";
import { profile } from "../profile";

const name = profile.name;

type DocumentContent = Pick<Resume, "description" | "controls">;

export const documentEn = {
  description: `Developer CV for ${name}, including education, technical skills, and work experience.`,
  controls: {
    note: "Entries are links",
    download: "Download PDF",
  },
} satisfies DocumentContent;

export const documentEs = {
  description: `Currículum de ${name}: educación, habilidades técnicas y experiencia laboral.`,
  controls: {
    note: "Las entradas son enlaces",
    download: "Descargar PDF",
  },
} satisfies DocumentContent;

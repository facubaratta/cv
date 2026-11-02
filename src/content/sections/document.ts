import type { Resume } from "../../types/resume";
import { profile } from "../profile";

const name = profile.name;

type DocumentContent = Pick<Resume, "description" | "download">;

export const documentEn = {
  description: `Developer CV for ${name}, including education, technical skills, and work experience.`,
  download: "Download PDF",
} satisfies DocumentContent;

export const documentEs = {
  description: `Currículum de ${name}: educación, habilidades técnicas y experiencia laboral.`,
  download: "Descargar PDF",
} satisfies DocumentContent;

import { profile } from "../content/profile.js";

export const buildPDFFileName = (extension) =>
  `./${profile.name.replace(/ /g, "_")}_${extension}.pdf`;

export const linkedinUrl = `https://www.linkedin.com/in/${profile.linkedinUsername}`;

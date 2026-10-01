import fs from "node:fs";
import jspdfModule from "jspdf/dist/jspdf.node.min.js";

// Standalone cover-letter subproject
// npm run letter
const letter = {
  outputFile: "Facundo_Baratta_Cover_Letter.pdf",
  profile: {
    name: "Facundo Baratta",
    title: "Software Engineer",
    email: "facundo.baratta@gmail.com",
    phone: "(+54 9) 11 3361-0131",
    phoneHref: "https://wa.me/5491133610131",
    location: "Buenos Aires, Argentina",
    linkedin: "https://www.linkedin.com/in/facundo-baratta/",
  },
  date: "today", // `"today"` prints current date. supports fixed strings i.e. `"June 2, 2026"`
  greeting: "Hello,",
  paragraphs: [
    "...",
    "..."
  ],
};

const { jsPDF } = jspdfModule;

const page = {
  width: 210,
  height: 297,
  marginX: 24,
  marginTop: 20,
};

const fonts = {
  body: "times",
  sans: "helvetica",
};

const colors = {
  text: "#141414",
  muted: "#4c4c4c",
  rule: "#b9b0a3",
};

function getDateLabel(value) {
  if (value && value !== "today") return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());
}

function addWrappedText(doc, text, x, y, options = {}) {
  const {
    maxWidth,
    lineHeight = 6,
    font = fonts.body,
    fontStyle = "normal",
    fontSize = 11,
    color = colors.text,
  } = options;

  doc.setFont(font, fontStyle);
  doc.setFontSize(fontSize);
  doc.setTextColor(color);

  const lines = doc.splitTextToSize(text, maxWidth);
  for (const line of lines) {
    doc.text(line, x, y);
    y += lineHeight;
  }
  return y;
}

function addHeader(doc, profile) {
  let y = page.marginTop;
  const rightX = page.width - page.marginX;

  doc.setFont(fonts.sans, "bold");
  doc.setFontSize(17.2);
  doc.setTextColor(colors.text);
  doc.text(profile.name, page.marginX, y);

  doc.setFont(fonts.sans, "normal");
  doc.setFontSize(9.8);
  doc.setTextColor(colors.muted);
  doc.text(profile.title, page.marginX, y + 6.4);

  doc.setFont(fonts.sans, "normal");
  doc.setFontSize(9.4);
  doc.setTextColor(colors.muted);
  doc.text(`${profile.location} | ${getDateLabel(letter.date)}`, rightX, y, { align: "right" });

  y += 14;
  doc.setDrawColor(colors.rule);
  doc.setLineWidth(0.25);
  doc.line(page.marginX, y, page.width - page.marginX, y);

  return y + 15;
}

function addContactFooter(doc, profile) {
  const linkedinLabel = profile.linkedin.replace(/^https:\/\/(www\.)?/, "");
  const centerX = page.width / 2;
  const y = page.height - 14.5;

  doc.setFont(fonts.sans, "normal");
  doc.setFontSize(9.2);
  doc.setTextColor(colors.muted);

  const contactPrefix = `${profile.email} | `;
  const phonePrefix = `${contactPrefix}${linkedinLabel} | `;
  const contact = `${phonePrefix}${profile.phone}`;
  const contactWidth = doc.getTextWidth(contact);
  const contactX = centerX - contactWidth / 2;
  const linkedinX = contactX + doc.getTextWidth(contactPrefix);
  const phoneX = contactX + doc.getTextWidth(phonePrefix);

  doc.text(contact, centerX, y, { align: "center" });
  doc.link(linkedinX, y - 3.2, doc.getTextWidth(linkedinLabel), 4.4, { url: profile.linkedin });
  doc.link(phoneX, y - 3.2, doc.getTextWidth(profile.phone), 4.4, { url: profile.phoneHref });
}

function buildPdf() {
  const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
  doc.setFillColor("#ffffff");
  doc.rect(0, 0, page.width, page.height, "F");

  const textWidth = page.width - page.marginX * 2;
  let y = addHeader(doc, letter.profile);

  y = addWrappedText(doc, letter.greeting, page.marginX, y, {
    maxWidth: textWidth,
    lineHeight: 7.5,
    fontSize: 13.3,
  });

  y += 9.5;
  for (const paragraph of letter.paragraphs) {
    y = addWrappedText(doc, paragraph, page.marginX, y, {
      maxWidth: textWidth,
      lineHeight: 7.5,
      fontSize: 13.3,
    });
    y += 8.5;
  }

  y += 4.5;
  y = addWrappedText(doc, letter.profile.name, page.marginX, y, {
    maxWidth: textWidth,
    lineHeight: 7.5,
    fontSize: 13.3,
  });

  addContactFooter(doc, letter.profile);

  fs.writeFileSync(letter.outputFile, Buffer.from(doc.output("arraybuffer")));
}

buildPdf();
console.log(`Generated ${letter.outputFile}`);

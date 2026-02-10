const html2canvasOptions = (element) => ({
  scale: 2,
  useCORS: true,
  backgroundColor: "#ffffff",
  // Force desktop layout so responsive breakpoints don't alter PDF output.
  windowWidth: PDF_VIEWPORT_WIDTH,
  windowHeight: element.scrollHeight,
  ignoreElements: (node) => node.classList?.contains("top-controls") ?? false,
});

const jsPDFOptions = {
  orientation: "portrait",
  unit: "mm",
  format: "a4",
  compress: true,
};

const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;
const PDF_VIEWPORT_WIDTH = 1200;
const PDF_EXPORT_ATTR = "data-pdf-export";
const PAGE_MARGINS_MM = {
  top: 10,
  right: 10,
  bottom: 0,
  left: 10,
};

function waitForNextFrame() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

function getImagePlacementInPage(canvas) {
  const contentWidth =
    A4_WIDTH_MM - PAGE_MARGINS_MM.left - PAGE_MARGINS_MM.right;
  const contentHeight =
    A4_HEIGHT_MM - PAGE_MARGINS_MM.top - PAGE_MARGINS_MM.bottom;

  // Fit the rendered CV image inside the printable content area.
  const scale = Math.min(
    contentWidth / canvas.width,
    contentHeight / canvas.height,
  );
  const width = canvas.width * scale;
  const height = canvas.height * scale;

  // Keep top-aligned, center horizontally inside the content area.
  const x = PAGE_MARGINS_MM.left + (contentWidth - width) / 2;
  const y = PAGE_MARGINS_MM.top;

  return { x, y, width, height };
}

function getPdfLinkAnnotations({ element, imagePlacement }) {
  const elementRect = element.getBoundingClientRect();
  if (!elementRect.width || !elementRect.height) return [];

  const scaleX = imagePlacement.width / elementRect.width;
  const scaleY = imagePlacement.height / elementRect.height;

  return Array.from(element.querySelectorAll("a[href]"))
    .map((anchor) => {
      const rect = anchor.getBoundingClientRect();
      if (!rect.width || !rect.height) return null;

      const href = anchor.href;
      if (!href) return null;

      const x = imagePlacement.x + (rect.left - elementRect.left) * scaleX;
      const y = imagePlacement.y + (rect.top - elementRect.top) * scaleY;
      const width = rect.width * scaleX;
      const height = rect.height * scaleY;

      return { x, y, width, height, href };
    })
    .filter(Boolean);
}

export async function exportCvToPdf({ element, title }) {
  if (!element) return;

  const root = document.documentElement;
  const previousAttr = root.getAttribute(PDF_EXPORT_ATTR);
  root.setAttribute(PDF_EXPORT_ATTR, "true");
  try {
    await waitForNextFrame();

    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
      import("html2canvas"),
      import("jspdf"),
    ]);

    const canvas = await html2canvas(element, html2canvasOptions(element));

    const pdf = new jsPDF(jsPDFOptions);
    const { x, y, width, height } = getImagePlacementInPage(canvas);
    const links = getPdfLinkAnnotations({
      element,
      imagePlacement: { x, y, width, height },
    });

    pdf.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      x,
      y,
      width,
      height,
      undefined,
      "FAST",
    );

    links.forEach(({ x: linkX, y: linkY, width: linkWidth, height: linkHeight, href }) => {
      pdf.link(linkX, linkY, linkWidth, linkHeight, { url: href });
    });

    pdf.save(title);
  } finally {
    if (previousAttr === null) {
      root.removeAttribute(PDF_EXPORT_ATTR);
    } else {
      root.setAttribute(PDF_EXPORT_ATTR, previousAttr);
    }
  }
}

export async function exportCvToPdf({ element, title }) {
  if (!element) return;

  const root = document.documentElement;
  const previousAttr = root.getAttribute("data-pdf-export");
  root.setAttribute("data-pdf-export", "true");

  try {
    await new Promise(requestAnimationFrame);

    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
      import("html2canvas"),
      import("jspdf"),
    ]);

    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
      windowWidth: 1200,
      windowHeight: element.scrollHeight,
      ignoreElements: (node) => node.classList?.contains("top-controls"),
    });
    const pdf = new jsPDF({ unit: "mm", format: "a4", compress: true });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imageRatio = canvas.width / canvas.height;
    const pageRatio = pageWidth / pageHeight;
    const width = imageRatio > pageRatio ? pageWidth : pageHeight * imageRatio;
    const height = imageRatio > pageRatio ? pageWidth / imageRatio : pageHeight;

    pdf.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      (pageWidth - width) / 2,
      (pageHeight - height) / 2,
      width,
      height,
    );

    pdf.save(title);
  } finally {
    if (previousAttr === null) {
      root.removeAttribute("data-pdf-export");
    } else {
      root.setAttribute("data-pdf-export", previousAttr);
    }
  }
}

import { cvText } from "../config/cvText";

function TopControls({ isSpanish, onToggleLanguage, pdfFileName, pdfUrl }) {
  const { controls } = cvText;
  const downloadLabel = isSpanish ? controls.downloadPdf.es : controls.downloadPdf.en;
  const switchLanguageAriaLabel = isSpanish
    ? controls.switchLanguageAria.fromEsToEn
    : controls.switchLanguageAria.fromEnToEs;
  const toggleLabel = isSpanish ? controls.languageToggle.en : controls.languageToggle.es;

  return (
    <div className="top-controls">
      <p className="interactive-note">
        <span aria-hidden="true">{controls.linksIcon} </span>
        <span className="lang-en">{controls.linksNote.en}</span>
        <span className="lang-es">{controls.linksNote.es}</span>
      </p>
      <div className="top-controls-actions">
        <a
          className="pdf-btn"
          aria-label={downloadLabel}
          href={pdfUrl}
          download={pdfFileName}
        >
          {downloadLabel}
        </a>
        <button
          className="lang-toggle"
          type="button"
          aria-label={switchLanguageAriaLabel}
          onClick={onToggleLanguage}
        >
          {toggleLabel}
        </button>
      </div>
    </div>
  );
}

export default TopControls;

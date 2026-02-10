import { cvText } from "../config/cvText";

function TopControls({ isSpanish, onToggleLanguage, onDownloadPdf, isExporting }) {
  const { controls } = cvText;
  const downloadLabel = isSpanish ? controls.downloadPdf.es : controls.downloadPdf.en;
  const generatingLabel = isSpanish
    ? controls.generatingPdf.es
    : controls.generatingPdf.en;
  const currentDownloadLabel = isExporting ? generatingLabel : downloadLabel;
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
        <button
          className="pdf-btn"
          type="button"
          aria-label={currentDownloadLabel}
          onClick={onDownloadPdf}
          disabled={isExporting}
        >
          {currentDownloadLabel}
        </button>
        <button
          className="lang-toggle"
          type="button"
          aria-label={switchLanguageAriaLabel}
          onClick={onToggleLanguage}
          disabled={isExporting}
        >
          {toggleLabel}
        </button>
      </div>
    </div>
  );
}

export default TopControls;

import { cvText } from "../config/cvText";

function TopControls({ isSpanish, onToggleLanguage, onDownloadPdf, isExporting }) {
  const { controls } = cvText;

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
          aria-label={isSpanish ? controls.downloadPdf.es : controls.downloadPdf.en}
          onClick={onDownloadPdf}
          disabled={isExporting}
        >
          {isExporting
            ? isSpanish
              ? controls.generatingPdf.es
              : controls.generatingPdf.en
            : isSpanish
              ? controls.downloadPdf.es
              : controls.downloadPdf.en}
        </button>
        <button
          className="lang-toggle"
          type="button"
          aria-label={
            isSpanish
              ? controls.switchLanguageAria.fromEsToEn
              : controls.switchLanguageAria.fromEnToEs
          }
          onClick={onToggleLanguage}
          disabled={isExporting}
        >
          {isSpanish ? controls.languageToggle.en : controls.languageToggle.es}
        </button>
      </div>
    </div>
  );
}

export default TopControls;

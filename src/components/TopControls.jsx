function TopControls({ isSpanish, onToggleLanguage, onDownloadPdf, isExporting }) {
  return (
    <div className="top-controls">
      <p className="interactive-note">
        <span aria-hidden="true">🔗 </span>
        <span data-lang="en">Sections are links</span>
        <span data-lang="es">Las secciones son enlaces</span>
      </p>
      <div className="top-controls-actions">
        <button
          className="pdf-btn"
          type="button"
          aria-label={isSpanish ? "Descargar PDF" : "Download PDF"}
          onClick={onDownloadPdf}
          disabled={isExporting}
        >
          {isExporting
            ? isSpanish
              ? "Generando PDF..."
              : "Generating PDF..."
            : isSpanish
              ? "Descargar PDF"
              : "Download PDF"}
        </button>
        <button
          className="lang-toggle"
          type="button"
          aria-label={
            isSpanish ? "Switch language to English" : "Cambiar idioma a español"
          }
          aria-pressed={!isSpanish}
          onClick={onToggleLanguage}
          disabled={isExporting}
        >
          {isSpanish ? "English" : "Español"}
        </button>
      </div>
    </div>
  );
}

export default TopControls;

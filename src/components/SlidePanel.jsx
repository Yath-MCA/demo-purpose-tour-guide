import React from 'react'

function SlidePanel({ panelOpen, setPanelOpen }) {
  return (
    <>
      {/* Overlay backdrop */}
      <div
        className={`panel-overlay ${panelOpen ? 'visible' : ''}`}
        onClick={() => setPanelOpen(false)}
      />

      {/* Slide Panel */}
      <aside
        id="slidePanel"
        className={`slide-panel ${panelOpen ? 'open' : ''}`}
        role="complementary"
        aria-label="Slide Panel"
        aria-hidden={!panelOpen}
      >
        <div className="panel-header">
          <div className="panel-title-group">
            <span className="panel-tag">PANEL</span>
            <h2 className="panel-title">Detail View</h2>
          </div>
          <button
            id="closePanelBtn"
            className="close-panel-btn"
            onClick={() => setPanelOpen(false)}
            aria-label="Close panel"
          >
            ✕
          </button>
        </div>

        <div className="panel-body">
          <div className="panel-section">
            <h3 className="panel-section-title">Test Context</h3>
            <p className="panel-text">
              This slide panel is rendered for automation testing. Its open/close state is
              controlled via the <code>#openPanelBtn</code> and <code>#closePanelBtn</code> selectors.
            </p>
          </div>

          <div className="panel-section">
            <h3 className="panel-section-title">Selectors Available</h3>
            <ul className="panel-selector-list">
              <li><code>#slidePanel</code> — this panel</li>
              <li><code>#closePanelBtn</code> — closes this panel</li>
              <li><code>#openPanelBtn</code> — opens this panel</li>
            </ul>
          </div>

          <div className="panel-section">
            <h3 className="panel-section-title">Panel State</h3>
            <div className="state-badge open">● OPEN</div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default SlidePanel

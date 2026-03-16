import React from 'react'

function ActionButtons({ setPanelOpen, messageVisible, setMessageVisible }) {
  function handleNormalAction() {
    console.log('[TEST] Normal action button clicked — id: normalActionBtn')
    alert('Normal Action triggered — button click confirmed.')
  }

  return (
    <section className="action-section">
      <div className="section-label">
        <span className="label-line" />
        <span className="label-text">ACTION BUTTONS</span>
        <span className="label-line" />
      </div>

      <div className="action-grid">
        {/* Normal Action Button */}
        <div className="action-card">
          <div className="action-card-meta">
            <span className="action-id">#normalActionBtn</span>
            <span className="action-type">CLICK</span>
          </div>
          <button
            id="normalActionBtn"
            className="action-btn primary"
            onClick={handleNormalAction}
          >
            <span className="btn-icon">◉</span>
            Normal Action
          </button>
          <p className="action-desc">Triggers alert + console log on click.</p>
        </div>

        {/* Open Panel Button */}
        <div className="action-card">
          <div className="action-card-meta">
            <span className="action-id">#openPanelBtn</span>
            <span className="action-type">PANEL</span>
          </div>
          <button
            id="openPanelBtn"
            className="action-btn secondary"
            onClick={() => setPanelOpen(true)}
          >
            <span className="btn-icon">⊞</span>
            Open Panel
          </button>
          <p className="action-desc">Slides in the right-side panel.</p>
        </div>

        {/* Toggle Message Button */}
        <div className="action-card">
          <div className="action-card-meta">
            <span className="action-id">#toggleMessageBtn</span>
            <span className="action-type">TOGGLE</span>
          </div>
          <button
            id="toggleMessageBtn"
            className={`action-btn toggle ${messageVisible ? 'active' : ''}`}
            onClick={() => setMessageVisible(prev => !prev)}
          >
            <span className="btn-icon">{messageVisible ? '◀' : '▶'}</span>
            {messageVisible ? 'Hide Message' : 'Show Message'}
          </button>
          <p className="action-desc">Toggles a message block visibility.</p>
        </div>
      </div>

      {/* Toggleable message */}
      <div
        id="toggleMessage"
        className={`toggle-message ${messageVisible ? 'visible' : 'hidden'}`}
        role="status"
        aria-live="polite"
      >
        <span className="toggle-message-icon">✔</span>
        <div>
          <strong>Message Visible</strong>
          <p>This element is toggled by <code>#toggleMessageBtn</code>. Automation can assert visibility here.</p>
        </div>
      </div>
    </section>
  )
}

export default ActionButtons

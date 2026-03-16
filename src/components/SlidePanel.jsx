import React from 'react';

const SlidePanel = ({ isOpen, togglePanel }) => {
  return (
    <div className={`slide-panel-container ${isOpen ? 'open' : ''}`} id="slidePanel">
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <h5 className="mb-0">Slide Panel</h5>
        <button type="button" className="btn-close" id="closePanelBtn" onClick={togglePanel} aria-label="Close"></button>
      </div>
      <div>
        <p>This is a sliding side panel.</p>
        <p>Use the close button at the top right to dismiss it.</p>
      </div>
    </div>
  );
};

export default SlidePanel;

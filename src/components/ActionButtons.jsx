import React, { useState } from 'react';

const ActionButtons = ({ togglePanel }) => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="card p-4 shadow-sm mb-4">
      <div className="d-flex flex-wrap gap-2 mb-3">
        <button className="btn btn-primary" id="normalActionBtn" onClick={() => console.log('Normal action clicked')}>
          Normal Action 
        </button>
        <button className="btn btn-success" id="openPanelBtn" onClick={togglePanel}>
          Open Slide Panel
        </button>
        <button className="btn btn-info text-white" id="toggleMessageBtn" onClick={() => setShowMessage(!showMessage)}>
          Toggle Message
        </button>
      </div>

      {showMessage && (
        <div className="alert alert-info mt-3" id="messageBox">
          Toggled message visibility!
        </div>
      )}
    </div>
  );
};

export default ActionButtons;

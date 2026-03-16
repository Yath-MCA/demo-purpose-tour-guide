import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Dashboard isPanelOpen={isPanelOpen} togglePanel={togglePanel} />
      </div>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import ActionButtons from '../components/ActionButtons';
import SlidePanel from '../components/SlidePanel';
import initTour from '../utils/tour';

const Dashboard = ({ isPanelOpen, togglePanel }) => {

  useEffect(() => {
    // Wait for DOM to paint completely
    setTimeout(() => {
      initTour();
    }, 500);
  }, []);

  return (
    <div>
      <h2 className="mb-4">Test Dashboard</h2>
      <ActionButtons togglePanel={togglePanel} />
      <SlidePanel isOpen={isPanelOpen} togglePanel={togglePanel} />
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" id="profileDropdownContainer">
      <button 
        className="btn btn-outline-light dropdown-toggle" 
        type="button" 
        id="profileBtn" 
        onClick={toggleDropdown}
      >
        Profile
      </button>
      <ul className={`dropdown-menu dropdown-menu-end mt-2 ${isOpen ? 'show' : ''}`} id="profileDropdown">
        <li><button className="dropdown-item">Profile</button></li>
        <li><button className="dropdown-item">Settings</button></li>
        {isOpen && (
          <li><button className="dropdown-item text-danger" id="logoutBtn">Logout</button></li>
        )}
      </ul>
    </div>
  );
};

export default ProfileDropdown;

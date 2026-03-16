import React from 'react'
import ProfileDropdown from './ProfileDropdown.jsx'

function Navbar({ dropdownOpen, setDropdownOpen }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-bracket">[</span>
        <span className="logo-text">UI_TEST</span>
        <span className="logo-bracket">]</span>
      </div>

      <div className="navbar-center">
        <button className="nav-link active" data-testid="dashboardBtn">
          <span className="nav-indicator">▶</span>
          DASHBOARD
        </button>
      </div>

      <div className="navbar-right">
        <ProfileDropdown
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />
      </div>
    </nav>
  )
}

export default Navbar

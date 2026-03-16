import React, { useEffect, useRef } from 'react'

function ProfileDropdown({ dropdownOpen, setDropdownOpen }) {
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownOpen, setDropdownOpen])

  function handleLogout() {
    setDropdownOpen(false)
    alert('Logout triggered — test action confirmed.')
  }

  return (
    <div className="profile-wrapper" ref={dropdownRef}>
      <button
        id="profileBtn"
        className={`profile-btn ${dropdownOpen ? 'active' : ''}`}
        onClick={() => setDropdownOpen(prev => !prev)}
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
      >
        <span className="profile-avatar">JD</span>
        <span className="profile-name">John Doe</span>
        <span className={`profile-chevron ${dropdownOpen ? 'open' : ''}`}>▾</span>
      </button>

      <div
        id="profileDropdown"
        className={`profile-dropdown ${dropdownOpen ? 'visible' : 'hidden'}`}
        role="menu"
      >
        <div className="dropdown-header">
          <span className="dropdown-email">john.doe@test.dev</span>
        </div>

        <ul className="dropdown-menu-list">
          <li>
            <button className="dropdown-item" role="menuitem">
              <span className="item-icon">◈</span>
              Profile
            </button>
          </li>
          <li>
            <button className="dropdown-item" role="menuitem">
              <span className="item-icon">⚙</span>
              Settings
            </button>
          </li>
        </ul>

        <div className="dropdown-divider" />

        <button
          id="logoutBtn"
          className="dropdown-item logout-item"
          role="menuitem"
          onClick={handleLogout}
        >
          <span className="item-icon">⏻</span>
          Logout
        </button>
      </div>
    </div>
  )
}

export default ProfileDropdown

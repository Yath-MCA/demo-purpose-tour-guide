import React from 'react';
import ProfileDropdown from './ProfileDropdown';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand fw-bold" href="#!">TEST-SPA</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <button className="nav-link btn btn-link" id="dashboardBtn">Dashboard</button>
          </li>
        </ul>
        <div className="d-flex">
          <ProfileDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

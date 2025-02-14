import React from "react";

const NavBar = ({ count }) => {
  return (
    <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <span className="badge text-bg-danger btn">{count}</span>
      </div>
    </nav>
  );
};

export default NavBar;

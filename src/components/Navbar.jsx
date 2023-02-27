import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbarbg  ">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fs-4" href="#" to="/">
          Quotes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                className="nav-link active text-white fs-4 "
                aria-current="page"
                href="#"
                to="hindi"
              >
                Hindi
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fs-4" href="#" to="/">
                English
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#"><h1>CarBecho</h1>
          {/* <img src="../logo.jpg" alt="logo" width="30" height="24" /> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/"
              >
                Home
                {/* <Link to={"/"}>Home</Link> */}
              </a>
            </li>
          </ul>
          <div
            className="collapse navbar-collapse justify-content-end me-3 "
            id="navbarNavDarkDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sell Car
                </a>
                <ul className="dropdown-menu dropdown-menu-light">
                  <li>
                    <a className="dropdown-item" href="#">
                      Banglore
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Hyderabad
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pune
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <button type="button " className="btn btn-outline-dark ">
            <Link to={"/mainpage"}>Cars</Link>
          </button>
          <button type="button " className="btn btn-outline-dark ">
            <Link to={"/signup"}>Sign Up</Link>
          </button>
          <button type="button " className="btn btn-outline-dark ">
            <Link to={"/login"}>Login</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

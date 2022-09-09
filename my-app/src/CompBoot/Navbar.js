import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const auth = localStorage.getItem("users");
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Food House
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Our Dishes</a> */}
                <Link
                  to="/dish"
                  className="nav-link active"
                  aria-current="page"
                >
                  Dishes
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <Link
              to="/signIn"
              className="btn btn-outline-success"
              type="submit"
            >
              SignIn
            </Link>
            {auth ? (
              <Link
                to="/logout"
                className="btn btn-outline-success"
                type="submit"
              >
                Logout
              </Link>
            ) : (
              <Link
                to="/signUp"
                className="btn btn-outline-success"
                type="submit"
              >
                SignUp
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

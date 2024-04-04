import React from "react";
import "./styles.scss";

export default () => {
  return (
    <nav className="mobile-nav" arial-label="primary">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="navbar-link">
            <span className="item-icon">
              <span
                className="material-symbols-outlined"
                aria-hidden="true"
                aria-current="true"
              >
                lunch_dining
              </span>
              <span className="label-medium">Recipes</span>
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="navbar-link">
            <span className="item-icon">
              <span
                className="material-symbols-outlined"
                aria-hidden="true"
                aria-current="false"
              >
                home
              </span>
              <span className="label-medium">Home</span>
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="navbar-link">
            <span className="item-icon">
              <span
                className="material-symbols-outlined"
                aria-hidden="true"
                aria-current="false"
              >
                book
              </span>
              <span className="label-medium">Favoritos</span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

import React, { useState } from "react";
import "./styles.scss";
import images from "../../images/index";

export default () => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  window.addEventListener("load", function () {
    const themebtn: HTMLElement | null =
      this.document.querySelector("[data-theme-btn]");
    themebtn?.addEventListener("click", changeTheme);
  });

  const HTML: HTMLElement | null = document.documentElement;

  const isDark: boolean = window.matchMedia(
    "(preferes-colors-scheme: dark)"
  ).matches;

  const theme: string | null = sessionStorage.getItem("theme");

  if (theme) {
    HTML.dataset.theme = theme;
  } else {
    HTML.dataset.theme = isDark ? "dark" : "light";
  }

  const changeTheme = (e: Event) => {
    const themeBtn = e.target as HTMLElement;
    setIsPressed(isPressed ? false : true);
    themeBtn.setAttribute("aria-pressed", isPressed ? "true" : "false");
    HTML.setAttribute(
      "data-theme",
      HTML.dataset.theme == "light" ? "dark" : "light"
    );
    const currentTheme: string =
      HTML.dataset.theme == "light" ? "dark" : "light";

    sessionStorage.setItem("theme", currentTheme);
  };
  return (
    <header className="header" data-header>
      <a href="#">
        <img
          src={images.logoLight}
          width="156"
          height="32"
          alt="Cook.io"
          className="logo-light"
        />
        <img
          src={images.logoDark}
          width="156"
          height="32"
          alt="Cook.io"
          className="logo-dark"
        />
      </a>

      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <a href="#" className="navbar-link title-small active">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link title-small has-state active">
              Receitas
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="icon-btn theme-switch has-state"
        aria-pressed="false"
        aria-label="toggle light and dark theme"
        data-theme-btn
      >
        <span
          className="material-symbols-outlined light-icon"
          aria-hidden="true"
        >
          light_mode
        </span>
        <span
          className="material-symbols-outlined dark-icon"
          aria-hidden="true"
        >
          dark_mode
        </span>
      </button>
      <a href="#" className="btn btn-primary">
        <span className="material-symbols-outlined" aria-hidden="true">
          book
        </span>
        <span className="span" aria-hidden="true">
          Receitas Salvas
        </span>
      </a>
    </header>
  );
};

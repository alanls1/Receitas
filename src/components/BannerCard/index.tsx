import React, { useState } from "react";
import { useRef } from "react";
import "./styles.scss";

export default () => {
  const [valueInput, setValueInput] = useState<string>("");

  const handleClick = (): void => {
    if (valueInput) {
      // window.location = `/recipe.html?q${valueInput}`;
      console.log("ooi");
    }
  };

  return (
    <section className="hero" aria-label="banner">
      <div className="banner-card">
        <h1 className="display-large">Your desired dish?</h1>
        <div className="search-wrapper" data-search-form>
          <span
            className="material-symbols-outlined leading-icon"
            aria-hidden="true"
          >
            Local_dining
          </span>
          <input
            type="search"
            name="search"
            aria-label="search recipes"
            placeholder="Search Recipes..."
            className="search-field body-medium"
            onChange={(e) => setValueInput(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? handleClick : "")}
          />
          <button
            className="search-submit"
            aria-label="submit"
            onClick={(e) => handleClick}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              search
            </span>
          </button>
        </div>
        <p className="label-medium">
          Search any recipe e.g: Burger, Pizza, Sandwich, Toast.
        </p>
      </div>
    </section>
  );
};

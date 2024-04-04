import React, { useState } from "react";

import "./styles.scss";

export const ButtonSaved = () => {
  const [saved, setSaved] = useState<string>("removed");

  const handleClick = () => {
    const toggleSavedAndRemove: string =
      saved === "removed" ? "saved" : "removed";
    setSaved(toggleSavedAndRemove);
  };

  return (
    <button
      className={`icon-btn has-state ${
        saved === "saved" ? "saved" : "removed"
      }`}
      aria-label="Add to saved recipes"
      onClick={(e) => handleClick()}
    >
      <span
        className="material-symbols-outlined bookmark-add"
        aria-hidden="true"
      >
        bookmark_add
      </span>
      <span className="material-symbols-outlined bookmark" aria-hidden="true">
        bookmark
      </span>
    </button>
  );
};

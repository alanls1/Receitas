import React, { useContext, useState } from "react";
import { MyContext } from "../../contexts/ValueContext";

import "./styles.scss";

export const Label = ({ item }: { item: string | number }) => {
  const { handleValueInput } = useContext(MyContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    handleValueInput(value);
  };

  return (
    <label className="filter-chip label-type">
      &lt; {item}
      <input
        type="radio"
        name="cook-time"
        value={item}
        aria-label={`${item} minutos`}
        className="checkbox"
        onChange={(e) => handleInputChange(e)}
      />
    </label>
  );
};

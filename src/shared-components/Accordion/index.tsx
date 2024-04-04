import React, { useState } from "react";
import { Label } from "../Label";

import "./styles.scss";

type Props = {
  value: string;
  valueSpan: string;
  item: string[];
};

export const Accordion = ({ value, valueSpan, item }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    let isExpanded = expanded ? false : true;
    setExpanded(isExpanded);
  };
  return (
    <div className="accordion-container" data-accordion>
      <button
        className="accordion-btn has-state"
        aria-controls="cook-time"
        aria-expanded={expanded}
        onClick={(e) => handleClick()}
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          {valueSpan}
        </span>
        <p className="label-large">{value}</p>
        <span
          className="material-symbols-outlined trailing-icon"
          aria-hidden="true"
        >
          expand_more
        </span>
      </button>

      <div className="accordion-content" id="cook-time">
        <div className="accordion-overflow" data-filter-bar="time">
          {item.map((Valueitem) => (
            <Label item={Valueitem} />
          ))}
        </div>
      </div>
    </div>
  );
};

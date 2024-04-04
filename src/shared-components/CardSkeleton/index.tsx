import React, { useState } from "react";
import { ButtonSaved } from "../ButtonSaved";
import { getTime } from "../../module";

import "./styles.scss";

type Props = {
  data: {
    recipe: {
      image: string;
      label: string;
      totalTime: number;
      uri: string;
    };
  };
};

export default function ({ data }: Props) {
  const {
    recipe: { image, label, totalTime, uri },
  } = data;

  return (
    <div className="card">
      <figure className="card-media img-holder">
        <img
          src={image}
          alt={label}
          width={195}
          height={195}
          loading="lazy"
          className="img-cover"
        />
      </figure>

      <div className="card-body">
        <h3 className="title-small">{/* <a href="">{query}</a> */}</h3>
      </div>

      <div className="meta-wrapper">
        <div className="meta-item">
          <span className="material-symbols-outlined" aria-hidden="true">
            schedule
          </span>
          {
            <span className="label-medium">{`${
              getTime(totalTime).time || "<1"
            } ${getTime(totalTime).timeUnit}`}</span>
          }
        </div>
        <ButtonSaved />
      </div>
    </div>
  );
}

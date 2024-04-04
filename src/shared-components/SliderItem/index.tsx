import React from "react";
import "./styles.scss";
import { ButtonSaved } from "../ButtonSaved";
import { getTime } from "../../module";

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

export const SliderItem = ({ data }: Props) => {
  const {
    recipe: { image, label, totalTime, uri },
  } = data;

  return (
    <li className="slider-item">
      <div className="card">
        <figure className="card-media img-holder">
          <img
            src={image}
            alt={label}
            width={195}
            loading="lazy"
            className="img-cover"
          />
        </figure>

        <div className="card-body">
          <h3 className="title-small">
            <a href="" className="card-link">
              {label ?? "untitled"}
            </a>
          </h3>

          <div className="meta-wrapper">
            <div className="meta-item">
              <span className="material-symbols-outlined" aria-hidden="true">
                schedule
              </span>
              <span className="label-medium">{`${
                getTime(totalTime).time || "<1"
              } ${getTime(totalTime).timeUnit}`}</span>
            </div>
            <ButtonSaved />
          </div>
        </div>
      </div>
    </li>
  );
};

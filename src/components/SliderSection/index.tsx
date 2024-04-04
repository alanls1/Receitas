import React, { useEffect, useState } from "react";
import "./styles.scss";
import { SliderItem } from "../../shared-components/SliderItem";
import { fechData } from "../../services/api";

export default () => {
  const [data, setData] = useState<any[]>();

  const card: [string, string][] = [
    ["field", "uri"],
    ["field", "label"],
    ["field", "image"],
    ["field", "totalTime"],
  ];

  const query = [...card, ["cuisineType", "Asian"]];

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fechData(query, (data) => {
      //   setData(data);
      // });
    };

    fetchData();
  }, []);

  return (
    <section
      className="section slider-section"
      aria-labelledby="slidedr-label-1"
      data-slider-section
    >
      <div className="container">
        <h2 className="section-title headline-small" id="slider-label-1">
          Latest French Recipes
        </h2>

        <div className="slider">
          <ul className="slider-wrapper" data-slider-wrapper>
            {data &&
              data.map((data, index) => <SliderItem key={index} data={data} />)}

            <li className="slider-item" data-slider-item>
              <a href="" className="load-more-card has-state">
                <span className="label-large">Show more</span>
                <span className="material-symbols-outlined" aria-hidden="true">
                  navigate_next
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

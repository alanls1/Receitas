import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import CardSkeleton from "../../shared-components/CardSkeleton";
import { fechData } from "../../services/api";

export default () => {
  const [currentButton, setCurrentButton] = useState<HTMLButtonElement>();
  const [forceUpdate, setForceUpdate] = useState(false);
  const [data, setData] = useState<any[]>();
  const currentBtn = useRef<HTMLButtonElement | null>(null);
  const currentPanel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setForceUpdate((prev) => !prev);
  }, [currentPanel.current?.getAttribute("id")]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = e.currentTarget as HTMLButtonElement;

    currentBtn.current?.setAttribute("aria-selected", "false");
    currentBtn.current?.setAttribute("tabindex", "-1");
    currentPanel.current?.setAttribute("hidden", "");
    const currentPanelSelected = document.getElementById(
      `${button.getAttribute("aria-controls")}`
    );
    setCurrentButton(button);
    currentPanelSelected?.removeAttribute("hidden");
    button.setAttribute("aria-selected", "true");
    button.setAttribute("tabidex", "0");
    currentBtn.current = button;
    currentPanel.current = currentPanelSelected as HTMLDivElement;
  };

  const query: Array<Array<string>> = [
    [
      "mealType",
      currentBtn.current?.textContent?.trim().toLocaleUpperCase() ?? "",
    ],
  ];

  const control = query
    .join("&")
    .replace(/,/g, "=")
    .replace(/ , /g, "&20")
    .replace(/ \+ /g, "%2B");

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fechData(query, (data) => {
      //   setData(data);
      // });
    };

    fetchData();
  }, [control]);

  return (
    <section className="section tab">
      <div className="container">
        <div
          className="tab-list"
          data-tab-list
          role="tablist"
          aria-label="Meal Type"
        >
          <button
            className="tab-btn title-small"
            ref={currentBtn}
            role="tab"
            id="tab-1"
            tabIndex={0}
            aria-controls="panel-1"
            aria-selected="true"
            data-tab-btn
            onClick={(e) => handleClick(e)}
          >
            Breakfast
          </button>

          <button
            className="tab-btn title-small"
            role="tab"
            id="tab-2"
            tabIndex={-1}
            aria-controls="panel-2"
            aria-selected={false}
            data-tab-btn
            onClick={(e) => handleClick(e)}
          >
            Lunch
          </button>

          <button
            className="tab-btn title-small"
            role="tab"
            id="tab-3"
            tabIndex={-1}
            aria-controls="panel-3"
            aria-selected={false}
            data-tab-btn
            onClick={(e) => handleClick(e)}
          >
            Dinner
          </button>

          <button
            className="tab-btn title-small"
            role="tab"
            id="tab-4"
            tabIndex={-1}
            aria-controls="panel-4"
            aria-selected={false}
            data-tab-btn
            onClick={(e) => handleClick(e)}
          >
            Snack
          </button>

          <button
            className="tab-btn title-small"
            role="tab"
            id="tab-5"
            tabIndex={-1}
            aria-controls="panel-5"
            aria-selected={false}
            data-tab-btn
            onClick={(e) => handleClick(e)}
          >
            Teatime
          </button>
        </div>
        <div
          className="tab-panel"
          ref={currentPanel}
          role="tabpanel"
          id="panel-1"
          aria-labelledby="tab-1"
          tabIndex={0}
          data-tab-panel
        >
          <div className="grid-list">
            {currentPanel?.current?.getAttribute("id") === "panel-1" &&
              data &&
              data.map((data, index) => (
                <CardSkeleton key={index} data={data} />
              ))}
          </div>
        </div>

        <div
          className="tab-panel"
          role="tabpanel"
          id="panel-2"
          aria-labelledby="tab-2"
          tabIndex={0}
          data-tab-panel
          hidden
        >
          <div className="grid-list">
            {currentPanel?.current?.getAttribute("id") === "panel-2" &&
              data &&
              data.map((data, index) => (
                <CardSkeleton key={index} data={data} />
              ))}
          </div>
        </div>

        <div
          className="tab-panel"
          role="tabpanel"
          id="panel-3"
          aria-labelledby="tab-3"
          tabIndex={0}
          data-tab-panel
          hidden
        >
          <div className="grid-list">
            {currentPanel?.current?.getAttribute("id") === "panel-3" &&
              data &&
              data.map((data, index) => (
                <CardSkeleton key={index} data={data} />
              ))}
          </div>
        </div>

        <div
          className="tab-panel"
          role="tabpanel"
          id="panel-4"
          aria-labelledby="tab-4"
          tabIndex={0}
          data-tab-panel
          hidden
        >
          <div className="grid-list">
            {currentPanel?.current?.getAttribute("id") === "panel-4" &&
              data &&
              data.map((data, index) => (
                <CardSkeleton key={index} data={data} />
              ))}
          </div>
        </div>

        <div
          className="tab-panel"
          role="tabpanel"
          id="panel-5"
          aria-labelledby="tab-5"
          tabIndex={0}
          data-tab-panel
          hidden
        >
          <div className="grid-list">
            {currentPanel?.current?.getAttribute("id") === "panel-5" &&
              data &&
              data.map((data, index) => (
                <CardSkeleton key={index} data={data} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

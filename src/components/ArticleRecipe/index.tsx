import React, { useContext, useState } from "react";
import { Accordion } from "../../shared-components/Accordion";
import { MyContext, MyProvider } from "../../contexts/ValueContext";

import "./styles.scss";

const arrayDate = [
  {
    value: "timer",
    valueSpan: "Cooking Time",
    item: [
      "5 minutos",
      "5 - 10 minutos",
      "10 - 20 minutos",
      "20 - 30 minutos",
      "30 - 40 minutos",
      "40 - 50 minutos",
      "1 houra",
    ],
  },
  {
    value: "nutrition",
    valueSpan: "Ingredientes",
    item: [
      "5 Ingredientes",
      "5 - 10 Ingredientes",
      "10 - 20 Ingredientes",
      "20 - 30 Ingredientes",
      "30 Ingredientes",
    ],
  },
  {
    value: "ulna_radius_alt",
    valueSpan: "Calorias",
    item: [
      "50 Calorias",
      "50 - 100 Calorias",
      "100 - 200 Calorias",
      "200 - 300 Calorias",
      "300 - 400 Calorias",
      "500 Calorias",
    ],
  },
  {
    value: "spa",
    valueSpan: "Dieta",
    item: [
      "Balanceda",
      "Alta Fibra",
      "Alta Proteina",
      "Baixo teor de Carboidratos",
      "Baixo teor de Gordura",
      "Baixo teor de Sódio",
    ],
  },
  {
    value: "restaurant",
    valueSpan: "Refeição",
    item: ["Biscoitos e Cookies", "Pão", "Cereais", "Sobremesas", "Bebidas"],
  },
  {
    value: "fastfood",
    valueSpan: "Prato",
    item: ["Café da Manhã", "Jantar", "Almoço", "Lanche", "Café da Tarde"],
  },
  {
    value: "Public",
    valueSpan: "Tipo de Prato",
    item: ["Americano", "Asiático"],
  },
];

export default () => {
  const [active, setActive] = useState("");
  const value = useContext(MyContext);

  const handleClickFilter = () => {
    let active = "active";
    setActive(active);
  };

  const handleClickCloseFilter = () => {
    let active = "";
    setActive(active);
  };

  const handleClickApply = () => {
    console.log(value);
  };

  return (
    <article className="article recipe-page">
      <div className={`filter-bar ${active}`} data-filter-bar>
        <div className="title-wrapper">
          <span className="material-symbols-outlined" aria-hidden="true">
            filter_list
          </span>
          <p className="title-medium">Filters</p>
          <button
            className="close-btn has-state"
            aria-label="close filter bar"
            data-filter-toggler
            onClick={(e) => handleClickCloseFilter()}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              close
            </span>
          </button>
        </div>

        <div className="filter-content">
          <div className="search-wrapper">
            <div className="input-outlined">
              <label htmlFor="search" className="body-large label">
                Search
              </label>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search recipes"
                className="input-field body-large"
              />
            </div>
          </div>
          {arrayDate.map((arr) => (
            <Accordion
              value={arr.valueSpan}
              valueSpan={arr.value}
              item={arr.item}
            />
          ))}
        </div>

        <div className="filter-actions">
          <button
            className="btn btn-secondary label-large has-state"
            data-filter-clear
          >
            Limpar
          </button>
          <MyProvider>
            <button
              className="btn btn-primary label-large "
              onClick={(e) => handleClickApply()}
            >
              Aplicar
            </button>
          </MyProvider>
        </div>
      </div>

      <div className="overlay" data-overlay data-filter-toggler></div>
      <div className="recipe-container container">
        <div className="title-wrapper">
          <h2 className="headline-small">Todas as Receitas</h2>
          <button
            className="btn-filter btn-secondary has-state"
            aria-label="Open filter bar"
            data-filter-toggler
            data-filter-btn
            onClick={(e) => handleClickFilter()}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              filter_list
            </span>
            <div className="wrapper">
              <span className="label-large">Filtros</span>
              <div className="badge label-small" data-filter-count>
                9
              </div>
            </div>
          </button>
        </div>
        <div className="grid-list" data-grid-list></div>
        <div className="load-more grid-list" data-load-more></div>
      </div>
    </article>
  );
};

import React, { useState } from "react";
import "./Sass/variables.scss";
import "./App.scss";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

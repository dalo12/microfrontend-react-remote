import React from "react";
import ReactDOM from "react-dom";
import MiCompPolitica from "./MiCompPolitica";

import "./index.css";
import EcoComponent from "./EcoComponent";

const App = () => (
  <div className="container">
     <EcoComponent />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

  
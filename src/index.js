import React from "react";
import ReactDOM from "react-dom";
import TrelloBoard from "./Trello/index";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TrelloBoard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import Functional from "./Functional";
import Classcomponent from "./Classcomponent";
import './style.css'

function App() {
  return (
    <div className="App">
      <h1>Styling using Functional and class components</h1>
      <div className="component__container">
        <Functional />
        <Classcomponent />
      </div>
    </div>
  );
}

export default App;

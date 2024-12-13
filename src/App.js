import React from "react";
import "./styles/App.css";
import AnimatedBox from "./components/AnimatedBox/AnimatedBox";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">это ТВОЁ время</h1>
      <AnimatedBox />
    </div>
  );
}

export default App;

import React from "react";
import "./styles/App.css";
import AnimatedBox from "./components/AnimatedBox/AnimatedBox";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Time Management App</h1>
      <p className="app-description">
        Добро пожаловать! Здесь вы можете управлять своим временем.
      </p>
      <AnimatedBox />
    </div>
  );
}

export default App;

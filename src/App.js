import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Router from "./components/routes/Router";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;

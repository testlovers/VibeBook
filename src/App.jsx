import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Simulate from "./pages/Simulate";
import Track from "./pages/Track";
import Strategy from "./pages/Strategy";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  return (
    <Router>
      <div className="app">
        <ToggleTheme />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulate" element={<Simulate />} />
          <Route path="/track" element={<Track />} />
          <Route path="/strategy" element={<Strategy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

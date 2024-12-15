import React from "react";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import USFood from "./components/projects/USFood";
import EarthIndex from "./components/projects/EarthIndex";
import ClimateTRACE from "./components/projects/ClimateTRACE";
import FranPortfolio from "./components/projects/FranPortfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Intro />
              <Portfolio />
            </div>
          }
        />
        <Route path="/projects/us-food" element={<USFood />} />
        <Route path="/projects/earth-index" element={<EarthIndex />} />
        <Route path="/projects/climate-trace" element={<ClimateTRACE />} />
        <Route
          path="/projects/francesca-sabel-portfolio"
          element={<FranPortfolio />}
        />
      </Routes>
    </Router>
  );
}

export default App;

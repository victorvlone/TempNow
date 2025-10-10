import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Weather from "./components/Weather/Weather.jsx";
import Map from "./components/Map/Map.jsx";
import Stats from "./components/Stats/Stats.jsx";
import NextDays from "./components/NextDays/NextDays.jsx";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <main className="main-container">
          <Weather></Weather>
        <Map></Map>
      </main>
      <Stats></Stats>
      <NextDays></NextDays>
    </div>
  );
}

export default App;

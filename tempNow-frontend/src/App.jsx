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
        <section className="weather-container">
          <Weather></Weather>
          <Stats></Stats>
        </section>
        <section className="map-section">
          <Map></Map>
          <div className="nextDays-content">
            <NextDays></NextDays>
            <NextDays></NextDays>
            <NextDays></NextDays>
            <NextDays></NextDays>
            <NextDays></NextDays>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Weather from "./components/Weather/Weather.jsx";
import Map from "./components/Map/Map.jsx";
import Stats from "./components/Stats/Stats.jsx";
import NextDays from "./components/NextDays/NextDays.jsx";
import "./App.css";

function App() {
  const [nomePesquisado, setNomePesquisado] = useState("");
  const [dadosDoClima, setDadosDoClima] = useState(null);

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  async function buscarClima() {
    const cidade = nomePesquisado;
    if (!API_KEY || API_KEY === 'undefined') {
        console.error("ERRO: A chave de API está faltando! Verifique o arquivo .env.");
        // Você pode mostrar um erro para o usuário aqui
        return; 
    }
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=1&appid=${API_KEY}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        setDadosDoClima(weatherData);
      } else {
        console.log("Cidade não encontrada.");
        setDadosDoClima(null);
      }
    } catch (error) {
      console.error("Houve um erro na busca:", error);
      setDadosDoClima(null);
    }
  }
  useEffect(() => {
    if (dadosDoClima) {
      console.log("Dados do clima ATUALIZADOS!:", dadosDoClima);
    }
  }, [dadosDoClima]);

  return (
    <div className="container">
      <Header setNomePesquisado={setNomePesquisado} buscarClima={buscarClima}></Header>
      <main className="main-container">
        <section className="weather-container">
          <Weather dadosDoClima={dadosDoClima}></Weather>
          <Stats dadosDoClima={dadosDoClima}></Stats>
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

import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Weather from "./components/Weather/Weather.jsx";
import Map from "./components/Map/Map.jsx";
import Stats from "./components/Stats/Stats.jsx";
import NextDays from "./components/NextDays/NextDays.jsx";
import "./App.css";

function get5DayForecast(dataList) {
  if (!dataList) return [];

  const dailyData = {};

  dataList.forEach((item) => {
    const date = new Date(item.dt * 1000);

    const dateKey = date.toISOString().slice(0, 10);

    if (!dailyData[dateKey]) {
      dailyData[dateKey] = {
        date: dateKey,
        list: [],
      };
    }

    dailyData[dateKey].list.push(item);
  });

  const forecastArray = Object.values(dailyData);

  return forecastArray
    .map((day) => {
      const temps = day.list.map((entry) => entry.main.temp);

      return {
        date: day.date,
        description: day.list[0].weather[0].description,
        icon: day.list[0].weather[0].icon,
        tempMin: Math.round(Math.min(...temps)),
        tempMax: Math.round(Math.max(...temps)),
      };
    })
    .slice(1, 6);
}

function App() {
  const [nomePesquisado, setNomePesquisado] = useState("");
  const [dadosDoClima, setDadosDoClima] = useState(null);
  const [previsao5Dias, setPrevisao5Dias] = useState(null);
  const [dados5DiasProcessados, setDados5DiasProcessados] = useState([]);

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  async function buscarClima() {
    const cidade = nomePesquisado;
    if (!API_KEY || API_KEY === "undefined") {
      console.error(
        "ERRO: A chave de API está faltando! Verifique o arquivo .env."
      );
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
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=pt`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        setDadosDoClima(weatherData);

        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=pt`;
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        setPrevisao5Dias(forecastData);
        if (forecastData && forecastData.list) {
          const processedData = get5DayForecast(forecastData.list);
          setDados5DiasProcessados(processedData);
        }
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
    if (dadosDoClima && previsao5Dias) {
      console.log("Dados do clima ATUALIZADOS!:", dadosDoClima);
      console.log("Dados dos proximos 5 dias: ", previsao5Dias);
    }
  }, [dadosDoClima, previsao5Dias]);

  useEffect(() => {
    if (dados5DiasProcessados.length > 0) {
      console.log("5 Dias Processados:", dados5DiasProcessados);
    }
  }, [dados5DiasProcessados]);

  return (
    <div className="container">
      <Header
        setNomePesquisado={setNomePesquisado}
        buscarClima={buscarClima}
      ></Header>
      <main className="main-container">
        <section className="weather-container">
          <Weather dadosDoClima={dadosDoClima}></Weather>
          <Stats dadosDoClima={dadosDoClima}></Stats>
        </section>
        <section className="map-section">
          <Map></Map>
          <div className="nextDays-container">
            <h5>Previsão para <br /> <h4>os proximos 5 dias:</h4></h5>
            <div className="nextDays-content">
              {dados5DiasProcessados.map((dayData) => (
                <NextDays key={dayData.date} data={dayData} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

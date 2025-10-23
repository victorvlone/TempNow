import styles from "./Weather.module.css";

const ICON_MAP = {
  sun: "sol.png",
  partlyCloudy: "parcialmente-nublado.png",
  cloudy: "nublado.png",
  rain: "chuva.png",
  other: "neve.png",
  default: "padrao.png",
};

const getWeatherType = (iconCode) => {
  if (typeof iconCode !== "string" || iconCode.length < 2) {
    return "default";
  }
  const code = iconCode.substring(0, 2);
  if (code === "01") {
    return "sun";
  }
  if (code === "02") {
    return "partlyCloudy";
  }
  if (code === "03" || code === "04") {
    return "cloudy";
  }
  if (code === "09" || code === "10" || code === "11") {
    return "rain";
  }
  if (code === "13" || code === "50") {
    return "other";
  }
  return "default";
};

const DEFAULT_WEATHER_DATA = {
  name: "Anhanguera",
  sys: { country: "BR" },
  weather: [{ description: "Céu Limpo", icon: "01d" }], 
  main: { temp: 25, feels_like: 25 }, 
};

function Weather({ dadosDoClima, dadosAnteriores, buscarClima }) {
  const dataToDisplay = dadosDoClima || DEFAULT_WEATHER_DATA;
  const LastData = dadosAnteriores || DEFAULT_WEATHER_DATA;
  const { weather, main, name, sys } = dataToDisplay;

  const {
    weather: lastWeather,
    main: lastMain,
    name: lastName,
    sys: lastSys,
  } = LastData;

  const iconCode = weather[0].icon;
  const climaTipo = getWeatherType(iconCode);
  const imageFileName = ICON_MAP[climaTipo] || ICON_MAP.default;
  const imagePath = `/assets/images/${imageFileName}`;
  const descricao = weather[0].description;
  const temperatura = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);

  const lastIconCode = lastWeather[0].icon;
  const lastClimaTipo = getWeatherType(lastIconCode);
  const lastImageFileName = ICON_MAP[lastClimaTipo] || ICON_MAP.default;
  const lastImagePath = `/assets/images/${lastImageFileName}`;
  const lastDescricao = lastWeather[0].description;
  const lastTemperatura = lastMain ? Math.round(lastMain.temp) : 0;
  const lastFeelsLike = Math.round(lastMain.feels_like);

  const handleRechercheAnterieure = () => {
    buscarClima(lastName);
  };

  return (
    <section className={styles.weather_content}>
      <article className={styles.weather_warm}>
        <div className={styles.weather_warm_main}>
          <img
            src={imagePath}
            alt={descricao}
            className={styles.weather_icons}
          />
          <h1 className={styles.weather_warm_temp}>
            {temperatura}
            <p className={styles.weather_warm_Celsius}>ºC</p>
          </h1>
          <h4 className={styles.description_text}>{descricao}</h4>
          <hr />
          <h1 className={styles.country_text}>
            {name}, {sys.country} <br />
            Sensação térmica: {feelsLike}ºC
          </h1>
        </div>
      </article>

      <article
        className={styles.weather_cold}
        onClick={handleRechercheAnterieure}
      >
        <div className={styles.weather_warm_main}>
          <img
            src={lastImagePath}
            alt={lastDescricao}
            className={styles.lastWeather_icons}
          />
          <h1 className={styles.lastWeather_warm_temp}>
            {lastTemperatura}
            <p className={styles.lastWeather_warm_Celsius}>ºC</p>
          </h1>
          <h4 className={styles.lastDescription_text}>{lastDescricao}</h4>
          <hr />
          <h1 className={styles.lastCountry_text}>
            {lastName}, {lastSys.country} <br />
            Sensação térmica: {lastFeelsLike}ºC
          </h1>
        </div>
      </article>
    </section>
  );
}

export default Weather;

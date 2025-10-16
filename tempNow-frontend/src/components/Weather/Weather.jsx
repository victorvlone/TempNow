import styles from "./Weather.module.css";

const DEFAULT_WEATHER_DATA = {
  name: "N/A",
  sys: "N/A",
  weather: [{ description: "N/A" }],
  main: { temp: 0 },
};

function Weather({ dadosDoClima }) {
  const dataToDisplay = dadosDoClima || DEFAULT_WEATHER_DATA;
  const { weather, main, name, sys } = dataToDisplay;
  const descricao = weather[0].description;
  const temperatura = Math.round(main.temp);

  return (
    <section className={styles.weather_content}>
      <article className={styles.weather_warm}>
        <div className={styles.weather_warm_main}>
            <img src="assets/images/sol.png" alt="" className={styles.weather_icons}/>
          <h1 className={styles.weather_warm_temp}>
            {temperatura}
            <p className={styles.weather_warm_Celsius}>ºC</p>
          </h1>
          <h4 className={styles.description_text}>{descricao}</h4>
          <hr />
          <h1 className={styles.country_text}>{name}, {sys.country}</h1>
        </div>
      </article>

      <article className={styles.weather_cold}>
      </article>
    </section>
  );
}

export default Weather;

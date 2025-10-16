import styles from "./Weather.module.css";

const DEFAULT_WEATHER_DATA = {
  weather: [{ description: "N/A" }],
  main: { temp: 0 },
};

function Weather({ dadosDoClima }) {
  const dataToDisplay = dadosDoClima || DEFAULT_WEATHER_DATA;
  const { weather } = dataToDisplay;
  const { main } = dataToDisplay;
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
        </div>
        <section className={styles.weather_data}></section>
      </article>

      <article className={styles.weather_cold}>
        <section className={styles.weather_data}></section>
      </article>
    </section>
  );
}

export default Weather;

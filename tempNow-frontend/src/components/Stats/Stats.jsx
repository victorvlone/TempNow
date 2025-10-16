import styles from "./Stats.module.css";

const DEFAULT_STATS_DATA = {
  name: "N/A",
  main: { temp_min: 0, temp_max: 0, humidity: 0 },
  weather: [],
  wind: { speed: 0 },
};

function Stats({ dadosDoClima }) {
  const dataToDisplay = dadosDoClima || DEFAULT_STATS_DATA;

  const { main, wind } = dataToDisplay;

  const tempMinina = Math.round(main.temp_min);
  const tempMaxima = Math.round(main.temp_max);
  const umidade = main.humidity;
  const vento = wind.speed;

  return (
    <section className={styles.stats_container}>
      <div className={styles.stats}>
        <div className={styles.info_icon_container}>
          <img
            src="/assets/images/circulo-de-informacao.png"
            alt="Info"
            className={styles.icon_info}
          />
        </div>
        <img
          src="/assets/images/temperatura-baixa.png"
          alt="Temperatura Baixa"
          className={styles.stats_icon}
        />
        <div className={styles.stats_text}>
          <h4>{tempMinina}</h4>
          <p className={styles.temp}>ºC</p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.info_icon_container}>
          <img
            src="/assets/images/circulo-de-informacao.png"
            alt="Info"
            className={styles.icon_info}
          />
        </div>
        <img
          src="/assets/images/temperatura-alta.png"
          alt="Temperatura Alta"
          className={styles.stats_icon}
        />
        <div className={styles.stats_text}>
          <h4>{tempMaxima}</h4>
          <p className={styles.temp}>ºC</p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.info_icon_container}>
          <img
            src="/assets/images/circulo-de-informacao.png"
            alt="Info"
            className={styles.icon_info}
          />
        </div>
        <img
          src="/assets/images/vento.png"
          alt="Vento"
          className={styles.stats_icon}
        />
        <div className={styles.stats_text}>
          <h4>{vento}</h4>
          <p>m/s</p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.info_icon_container}>
          <img
            src="/assets/images/circulo-de-informacao.png"
            alt="Info"
            className={styles.icon_info}
          />
        </div>
        <img
          src="/assets/images/agua.png"
          alt="Água"
          className={styles.stats_icon}
        />
        <div className={styles.stats_text}>
          <h4>{umidade}</h4>
          <p>%</p>
        </div>
      </div>
    </section>
  );
}
export default Stats;

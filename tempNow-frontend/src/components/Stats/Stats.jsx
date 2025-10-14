import styles from "./Stats.module.css";

function Stats({ dadosDoClima }) {
  const { name, main, weather, wind } = dadosDoClima;

  const tempMinina = main.temp_min;
  const tempMaxima = main.temp_max;
  const umidade = main.humidity;
  const vento = wind.speed;

  return (
    <section className={styles.stats_container}>
      <div className={styles.stats}>
        <div className={styles.info_icon_container}>
          <img
            src="../public/assets/images/circulo-de-informacao.png"
            alt=""
            className={styles.icon_info}
          />
        </div>
        <img
          src="../public/assets/images/temperatura-baixa.png"
          alt=""
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
            src="../public/assets/images/circulo-de-informacao.png"
            alt=""
            className={styles.icon_info}
          />
        </div>
        <img
          src="../public/assets/images/temperatura-alta.png"
          alt=""
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
            src="../public/assets/images/circulo-de-informacao.png"
            alt=""
            className={styles.icon_info}
          />
        </div>
        <img
          src="../public/assets/images/vento.png"
          alt=""
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
            src="../public/assets/images/circulo-de-informacao.png"
            alt=""
            className={styles.icon_info}
          />
        </div>
        <img
          src="../public/assets/images/agua.png"
          alt=""
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

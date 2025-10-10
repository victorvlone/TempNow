import styles from "./Stats.module.css";

function Stats() {
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
          <h4>32</h4>
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
          <h4>40</h4>
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
          <h4>3.9</h4>
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
          <h4>62</h4>
          <p>%</p>
        </div>
      </div>
    </section>
  );
}
export default Stats;

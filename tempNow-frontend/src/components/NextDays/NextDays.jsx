import styles from "./NextDays.module.css";

const ICON_MAP = {
  sun: "sol.png",
  partlyCloudy: "parcialmente-nublado.png",
  cloudy: "nublado.png",
  rain: "chuva.png",
  other: "neve.png",
  default: "padrao.png",
};

function NextDays({ data }) {
  const getWeatherType = (iconCode) => {
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
  const climaTipo = getWeatherType(data.icon);
  const cardClasses = `${styles.nextDays_container} ${
    styles[`${climaTipo}_bg`]
  }`;

  const imageFileName = ICON_MAP[climaTipo] || ICON_MAP.default;
  const imagePath = `/assets/images/${imageFileName}`;

  return (
    <div className={cardClasses}>
      <p>{data.date}</p>
      <div className={styles.cardClasses_description}>
        <img src={imagePath} alt="" />
        <p>{data.description}</p>
      </div>
      <div className={styles.cardClasses_maxandMin}>
        <h2>{data.tempMax} <p>ºC</p> </h2>
        <h2>{data.tempMin} <p>ºC</p></h2>
      </div>
    </div>
  );
}
export default NextDays;

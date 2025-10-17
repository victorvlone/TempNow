import styles from "./NextDays.module.css";

const ICON_MAP = {
  sun: "sol.png",
  partlyCloudy: "parcialmente-nublado.png",
  cloudy: "nublado.png",
  rain: "chuva.png",
  other: "neve.png",
  default: "padrao.png",
};

import { DEFAULT_NEXTDAYS_DATA } from "../../utils/defaults.js";

const formatarData = (dateString, format = "diaSemana") => {
  if (dateString.startsWith("Dia-")) {
    return "Dia";
  }

  const date = new Date(dateString + "T00:00:00");

  if (format === "diaSemana") {
    return new Intl.DateTimeFormat("pt-BR", { weekday: "short" }).format(date);
  }

  if (format === "diaMes") {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    }).format(date);
  }

  return dateString;
};

function NextDays({ data }) {
  const dataToDisplay = data || DEFAULT_NEXTDAYS_DATA;

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
      <p>{formatarData(dataToDisplay.date, 'diaMes')}</p>
      <div className={styles.cardClasses_description}>
        <img src={imagePath} alt="" />
        <p>{dataToDisplay.description}</p>
      </div>
      <div className={styles.cardClasses_maxandMin}>
        <h2>
          {dataToDisplay.tempMax} <p>ºC</p>{" "}
        </h2>
        <h2>
          {dataToDisplay.tempMin} <p>ºC</p>
        </h2>
      </div>
    </div>
  );
}
export default NextDays;

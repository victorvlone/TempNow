import styles from './Weather.module.css'

function Weather(icon, temperatura, cidade, tempo){
    return(
        <section className={styles.weather_content}>

        <article className={styles.weather_warm}>
            <section className={styles.weather_data}>

            </section>
        </article>
        <article className={styles.weather_cold}>
            <section className={styles.weather_data}>

            </section>
        </article>
        </section>
    )
}
export default Weather;
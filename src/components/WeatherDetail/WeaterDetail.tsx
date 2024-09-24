import { formatTempeture } from "../../helpers";
import { Weather } from "../../hooks/useWeather";
import styles from "./WeatherDetail.module.css";

type WeatherDetailProps = {
    weather: Weather;
};

export const WeaterDetail = ({ weather }: WeatherDetailProps) => {
    return (
        <div className={styles.container}>
            <h2>Weather of: {weather.name}</h2>
            <p className={styles.current}>
                {formatTempeture(weather.main.temp)}&deg;C
            </p>
            <div className={styles.temperatures}>
                <p>
                    Min:{" "}
                    <span>{formatTempeture(weather.main.temp_min)}&deg;C</span>
                </p>
                <p>
                    Max:{" "}
                    <span>{formatTempeture(weather.main.temp_max)}&deg;C</span>
                </p>
            </div>
        </div>
    );
};

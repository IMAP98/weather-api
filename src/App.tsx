import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { WeaterDetail } from "./components/WeatherDetail/WeaterDetail";
import { useWeather } from "./hooks/useWeather";

function App() {
    const { weather, fetchWeather, hasWeatherData } = useWeather();

    return (
        <>
            <h1 className={styles.title}>Weather searcher</h1>

            <div className={styles.container}>
                <Form fetchWeather={fetchWeather} />
                {hasWeatherData && <WeaterDetail weather={weather} />}
            </div>
        </>
    );
}

export default App;

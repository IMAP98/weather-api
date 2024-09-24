import styles from "./App.module.css";
import { Alert } from "./components/Alert/Alert";
import { Form } from "./components/Form/Form";
import { Spinner } from "./components/Spinner/Spinner";
import { WeaterDetail } from "./components/WeatherDetail/WeaterDetail";
import { useWeather } from "./hooks/useWeather";

function App() {
    const { weather, loading, notFound, fetchWeather, hasWeatherData } =
        useWeather();

    return (
        <>
            <h1 className={styles.title}>Weather searcher</h1>

            <div className={styles.container}>
                <Form fetchWeather={fetchWeather} />

                {loading && <Spinner />}

                {hasWeatherData && <WeaterDetail weather={weather} />}

                {notFound && <Alert>City not found</Alert>}
            </div>
        </>
    );
}

export default App;

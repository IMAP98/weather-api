import { ChangeEvent, FormEvent, useState } from "react";
import { countries } from "../../data/countries";
import styles from "./Form.module.css";
import type { SearchType } from "../../types";
import { Alert } from "../Alert/Alert";

type FormProps = {
    fetchWeather: (search: SearchType) => Promise<void>;
};

export const Form = ({ fetchWeather }: FormProps) => {
    const [search, setSearch] = useState<SearchType>({
        city: "",
        country: "",
    });

    const [alert, setAlert] = useState("");

    const handleChange = (
        event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
    ) => {
        setSearch({
            ...search,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (Object.values(search).includes("")) {
            setAlert("All fileds are required.");
            return;
        }

        fetchWeather(search);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {alert && <Alert>{alert}</Alert>}
            <div className={styles.field}>
                <label htmlFor="city">City:</label>
                <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="City"
                    value={search.city}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.field}>
                <label htmlFor="country">Country:</label>
                <select
                    id="country"
                    name="country"
                    value={search.country}
                    onChange={handleChange}
                >
                    <option value="">-- Country selection --</option>
                    {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                            {country.name}
                        </option>
                    ))}
                </select>
            </div>
            <input
                className={styles.submit}
                type="submit"
                value="Check weather"
            />
        </form>
    );
};

import { ChangeEvent, FormEvent, useState } from "react";
import { countries } from "../../data/countries";
import styles from "./Form.module.css";
import type { SearchType } from "../../types";

export const Form = () => {
    const [search, setSearch] = useState<SearchType>({
        city: "",
        country: "",
    });

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
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
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

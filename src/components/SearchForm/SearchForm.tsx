import { useState, type FormEvent, type FC } from "react";
import { useWeatherContext } from "../../context/WeatherContext";
import "./SearchForm.scss";

export const SearchForm: FC = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const { fetchWeather } = useWeatherContext();

  const isValidCity = (
    name: string // cityName
  ): boolean => /^[a-zA-ZÀ-ÿ\s-]+$/i.test(name.trim());

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedCity = city.trim(); // po co tu robisz trim i potem w funkcji tez?

    if (!trimmedCity || !isValidCity(trimmedCity)) {
      setError("Please enter a valid city name (no numbers or symbols)");
      return;
    }

    fetchWeather(trimmedCity);
    setCity("");
    setError("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter Your Location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
      {error && <p className="form-error">{error}</p>}
    </>
  );
};

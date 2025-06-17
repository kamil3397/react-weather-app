import { type FC } from "react";
import "./MyLocationButton.scss"; // scss jest po to, zebys nie musial ciagle importowac. Niczym nie rozni sie Twoja implementacja scss'a
// od uzycia czystego css
import { useWeatherContext } from "../../context/WeatherContext";

export const MyLocationButton: FC = () => {
  const { fetchWeatherByGeolocation } = useWeatherContext();

  return (
    <button className="my-location-btn" onClick={fetchWeatherByGeolocation}>
      Find my localization
    </button>
  );
};

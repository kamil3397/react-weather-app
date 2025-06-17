import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { WeatherData } from "../types/types";
import { apiKey, baseUrl } from "../config";

interface WeatherContextType {
  weather: WeatherData | null;
  error: string;
  fetchWeather: (query: string) => void;
  fetchWeatherByGeolocation: () => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  // wystarczy uzyc  typu PropsWithChildren
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");

  const fetchWeather = (query: string) => {
    fetch(`${baseUrl}current.json?key=${apiKey}&q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      })
      .catch(() => setError("Failed to fetch data"));
  };

  const fetchWeatherByGeolocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not available");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
        fetchWeather(coords);
      },
      () => {
        setError("Failed to retrieve user location");
      }
    );
  };

  useEffect(() => {
    fetchWeatherByGeolocation();
  }, []);

  return (
    <WeatherContext.Provider
      value={{ weather, error, fetchWeather, fetchWeatherByGeolocation }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within WeatherProvider");
  }
  return context;
};

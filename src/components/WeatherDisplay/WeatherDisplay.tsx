import type { FC } from 'react'
import { useWeatherContext } from '../../context/WeatherContext'
import './WeatherDisplay.scss'

 const WeatherDisplay: FC = () => {
  const { weather, error } = useWeatherContext()

  if (error) return <p className="display-error">Error: {error}</p>
  if (!weather) return <p className="loading">Fetching data...</p>

  const {
    location: { name, country },
    current: {
      temp_c,
      condition: { text, icon },
      humidity,
      wind_kph
    }
  } = weather

  return (
    <div className="weather-card">
      <h2>{name}, {country}</h2>

      <div className="temperature">
        {Math.round(temp_c)}
        <span>°C</span>
      </div>

      <p className="description">{text}</p>

      <img
        src= {`https:${icon}`}
        alt={text}
        className="icon"
      />

      <div className="details">
        <div>
          <div className="value">{humidity}%</div>
          <div className="label">Humidity</div>
        </div>
        <div>
          <div className="value">{wind_kph}Km/h</div>
          <div className="label">Wind Speed</div>
        </div>
      </div>
    </div>
  )
}
export default WeatherDisplay
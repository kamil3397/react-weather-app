import { type FC } from 'react'
import './MyLocationButton.scss'
import { useWeatherContext } from '../../context/WeatherContext'

const MyLocationButton: FC = () => {
  const { fetchWeatherByGeolocation } = useWeatherContext()

  return (
    <button className="my-location-btn" onClick={fetchWeatherByGeolocation}>
      Find my localization
    </button>
  )
}
export default MyLocationButton
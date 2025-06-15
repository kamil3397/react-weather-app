import { WeatherProvider } from './context/WeatherContext'
import { SearchForm } from './components/SearchForm/SearchForm'
import { WeatherDisplay } from './components/WeatherDisplay/WeatherDisplay'
import './App.scss'
import { MyLocationButton } from './components/MyLocationButton/MyLocationButton'

const App = () => (
  <WeatherProvider>
    <div className="app-container">
      <h1>Simple Weather App</h1>
      <SearchForm />
      <MyLocationButton />
      <WeatherDisplay />
    </div>
  </WeatherProvider>
)

export default App
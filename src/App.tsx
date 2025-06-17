import { Suspense, lazy } from 'react'
import './App.scss'

const SearchForm = lazy(() => import('./components/SearchForm/SearchForm'))
const WeatherDisplay = lazy(() => import('./components/WeatherDisplay/WeatherDisplay'))
const MyLocationButton = lazy(() => import('./components/MyLocationButton/MyLocationButton'))

const App = () => (
    <div className="app-container">
      <h1>Simple Weather App</h1>

      <Suspense fallback={<p className='loading'>Loading weather…</p>}>

        <SearchForm />
        <MyLocationButton />
        <WeatherDisplay />

      </Suspense>
    </div>
)

export default App

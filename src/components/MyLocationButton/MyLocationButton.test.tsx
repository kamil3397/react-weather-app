import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import MyLocationButton from './MyLocationButton'

const fetchWeatherByGeolocationMock = vi.fn()

vi.mock('../../context/WeatherContext', () => ({
  useWeatherContext: () => ({
    fetchWeatherByGeolocation: fetchWeatherByGeolocationMock
  })
}))

describe('MyLocationButton', () => {
  it('renders the button with correct text', async () => {
    render(<MyLocationButton />)

    const button = await screen.findByRole('button', {
      name: /find my localization/i
    })

    expect(button).toBeInTheDocument()
  })

  it('calls fetchWeatherByGeolocation when clicked', async () => {
    render(<MyLocationButton />)

    const button = await screen.findByRole('button', {
      name: /find my localization/i
    })

    fireEvent.click(button)

    expect(fetchWeatherByGeolocationMock).toHaveBeenCalledTimes(1)
  })
})

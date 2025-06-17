import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchForm from './SearchForm'

const fetchWeatherMock = vi.fn()
vi.mock('../../context/WeatherContext', () => ({
  useWeatherContext: () => ({ fetchWeather: fetchWeatherMock })
}))

describe('SearchForm', () => {
  beforeEach(() => {
    fetchWeatherMock.mockClear()
  })

  it('updates the input value on change', async () => {
    render(<SearchForm />)
    const input = screen.getByPlaceholderText('Enter Your Location') as HTMLInputElement
    const user = userEvent.setup()

    await user.type(input, 'Warsaw')
    expect(input).toHaveValue('Warsaw')
  })

  it('shows an error when submitting an empty input', async () => {
    render(<SearchForm />)
    const button = screen.getByRole('button', { name: '🔍' })
    const user = userEvent.setup()

    await user.click(button)
    expect(await screen.findByText(/please enter a valid city name/i)).toBeInTheDocument()
    expect(fetchWeatherMock).not.toHaveBeenCalled()
  })

  it('shows an error when input contains invalid characters', async () => {
    render(<SearchForm />)
    const input = screen.getByPlaceholderText('Enter Your Location') as HTMLInputElement
    const user = userEvent.setup()

    await user.type(input, 'C1ty!')
    await user.click(screen.getByRole('button', { name: '🔍' }))

    expect(await screen.findByText(/please enter a valid city name/i)).toBeInTheDocument()
    expect(fetchWeatherMock).not.toHaveBeenCalled()
  })

  it('calls fetchWeather and clears state on valid submit', async () => {
    render(<SearchForm />)
    const input = screen.getByPlaceholderText('Enter Your Location') as HTMLInputElement
    const user = userEvent.setup()

    await user.type(input, '  Kraków  ')
    await user.click(screen.getByRole('button', { name: '🔍' }))

    expect(fetchWeatherMock).toHaveBeenCalledWith('Kraków')
    expect(input).toHaveValue('')
    expect(screen.queryByText(/please enter a valid city name/i)).toBeNull()
  })
})

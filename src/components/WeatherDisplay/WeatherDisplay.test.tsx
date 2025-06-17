import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { WeatherDisplay } from "./WeatherDisplay";

const mockWeather = {
  location: { name: "Barcelona", country: "Spain" },
  current: {
    temp_c: 21.4,
    condition: {
      text: "Sunny",
      icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
    },
    humidity: 60,
    wind_kph: 8,
  },
};

const useWeatherContextMock = vi.fn();
vi.mock("../../context/WeatherContext", () => ({
  useWeatherContext: () => useWeatherContextMock(),
}));

describe("WeatherDisplay", () => {
  it("renders a loading state when weather is null and no error", async () => {
    useWeatherContextMock.mockReturnValue({ weather: null, error: "" });
    render(<WeatherDisplay />);
    expect(await screen.findByText(/Fetching data.../i)).toBeInTheDocument();
  });

  it("displays weather information when weather is available", async () => {
    useWeatherContextMock.mockReturnValue({ weather: mockWeather, error: "" });
    render(<WeatherDisplay />);

    expect(await screen.findByRole("heading")).toHaveTextContent(
      "Barcelona, Spain"
    );

    expect(await screen.findByText("21")).toBeInTheDocument(); // czemu oddzielnie?
    expect(await screen.findByText("°C")).toBeInTheDocument();

    expect(
      await screen.findByText(mockWeather.current.condition.text)
    ).toBeInTheDocument();

    const img = (await screen.findByAltText(
      mockWeather.current.condition.text
    )) as HTMLImageElement; // po co rzutowanie?
    expect(img.src).toBe(`https:${mockWeather.current.condition.icon}`);

    expect(
      await screen.findByText(`${mockWeather.current.humidity}%`)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(`${mockWeather.current.wind_kph}Km/h`)
    ).toBeInTheDocument();
  });
});

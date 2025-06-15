# 🌤️ Simple Weather App

A clean and minimal weather application built with **React + TypeScript**. It allows users to check current weather data by searching for a city or using their geolocation.

---

## 🔍 Features

- 🌍 Search weather by city name  
- 📍 Detect and fetch weather using your current location  
- ⚠️ Basic validation and error handling for invalid input  
- 🎯 Simple, responsive UI with clean SCSS styling  
---

## 🧰 Tech Stack

- **React** with functional components and hooks  
- **TypeScript** for type safety  
- **SCSS** for styling  
- **WeatherAPI.com** 

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/kamil3397/react-weather-app.git
cd react-weather-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your API Key

- Your API key and base URL should be configured in a `.env` file and imported via `config.ts`.
- If not already set, create a `.env` file in the project root:

```env
VITE_API_KEY=your_api_key_here
VITE_BASE_URL=https://api.weatherapi.com/v1/
```
### 4. Start the App

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 How It Works

- The app uses React Context to share weather state and API methods.
- `SearchForm` allows users to enter a city name with basic validation.
- `MyLocationButton` uses the browser's geolocation API.
- `WeatherDisplay` shows weather info or error messages based on state.

## 👨‍💻 Author

**Kamil Kamiński**  
[GitHub Profile](https://github.com/kamil3397)

---

## 📄 License

This project is licensed under the **MIT License**.

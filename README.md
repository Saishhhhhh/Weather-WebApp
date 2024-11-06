# Know Weather 🌤️

Welcome to **Know Weather**, a simple weather app that fetches and displays real-time weather data for any city you search. Built using HTML, CSS, and JavaScript, this project uses the OpenWeather API to show details like temperature, humidity, wind speed, and a short weather description.

---

## Features ✨

- **Real-time Weather Data**: Provides current weather details for cities worldwide.
- **Dynamic UI**: Smooth user interface that adapts based on the weather data.
- **Responsive Design**: Works seamlessly across devices.
- **Search Functionality**: Input a city name, and the app updates instantly with weather data.

---

## Demo 🎬

![WeatherVideo-ezgif com-speed](https://github.com/user-attachments/assets/2e49ccf9-3dcc-4d17-a720-222ec189990e)

---

## Installation & Setup 🛠️

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/know-weather.git
    cd know-weather
    ```

2. **API Key Setup**:
   - This project uses the OpenWeather API via RapidAPI. To fetch weather data, an API key is required.
   - By default, this repository includes an API key that allows **50 API calls per month**. 
   - **To increase the limit**, get your own API key from [RapidAPI](https://rapidapi.com/).
     - Sign up or log in to RapidAPI.
     - Search for "OpenWeather" and subscribe to a plan.
     - Replace the API key in the `script.js` file with your own.

3. **Run the Project**:
   - Open `index.html` in your browser to see the app in action.

---

## Code Overview 📜

- **HTML**: Defines the structure of the app, including the city input, weather details, and date-time display.
- **CSS**: Styles the app for a sleek, modern look with responsive design.
- **JavaScript**: Fetches and displays weather data, converts temperature and wind speed units, and handles user interactions.

---

## API Usage & Limitations 🚨

> Note: The included API key provides only **50 API calls per month**. For extended usage, get your own API key from [RapidAPI](https://rapidapi.com/) and replace it in `script.js`:
   ```javascript
   const options = {
       method: "GET",
       headers: {
           "x-rapidapi-key": "YOUR_API_KEY_HERE",
           "x-rapidapi-host": "open-weather13.p.rapidapi.com",
       },
   };

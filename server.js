const express = require('express');
const app = express();
const port = 3000;

const weatherData = [
  {
    "city": "New York",
    "country": "US",
    "weather": {
      "main": "Clouds",
      "description": "scattered clouds"
    },
    "temperature": {
      "current": 22.4,
      "feels_like": 21.0,
      "min": 20.0,
      "max": 24.0
    },
    "humidity": 60,
    "wind_speed": 4.5
  },
  {
    "city": "London",
    "country": "GB",
    "weather": {
      "main": "Rain",
      "description": "light rain"
    },
    "temperature": {
      "current": 18.2,
      "feels_like": 17.3,
      "min": 17.0,
      "max": 19.0
    },
    "humidity": 85,
    "wind_speed": 5.0
  },
  // Add other cities here...
];

app.get('/api/weather', (req, res) => {
  res.json(weatherData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


const apiKey = import.meta.env.VITE_WEATHER_KEY
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
import axios from 'axios'

const getWeather = (city) => {
  return axios
    .get(`${baseUrl}?q=${city}&units=metric&APPID=${apiKey}`)
    .then(response => response.data)
}

export default { getWeather }
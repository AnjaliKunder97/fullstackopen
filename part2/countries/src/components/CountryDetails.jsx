import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState(null)
  const capital = country.capital[0]

  useEffect(() => {
    weatherService
      .getWeather(capital)
      .then(data => setWeather(data))
      .catch(() => setWeather(null))
  }, [capital])


  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>Capital: {country.capital?.join(', ')}</div>
      <div>Area: {country.area}</div>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages ?? {}).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} width="150" />
      <h3>Weather in {capital}</h3>
      {weather && (
        <>
          <p>Temperature {weather.main.temp} °C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>Wind {weather.wind.speed} m/s</p>
        </>
      )}
    </div>
  )
}

export default CountryDetails
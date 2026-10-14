import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Filter from './components/Filter'
import Countries from './components/Countries'


function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  },[])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setSelectedCountry(null)
  }

  const countriesToShow = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      {filter !== '' && <Countries countries={countriesToShow} selectedCountry={selectedCountry} showCountryDetails={setSelectedCountry}/>}
    </>
  )
}

export default App

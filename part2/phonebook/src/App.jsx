import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  },[])

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const addName = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(
      person => person.name.toLowerCase() === newName.trim().toLowerCase()
    )
    if(existingPerson){
      if (window.confirm(`${existingPerson.name} is already added to the phonebook, replace the old number with new number?`)) {
        const updatedPerson = { ...existingPerson, number: newNumber}
        
        personService
        .update(existingPerson.id,updatedPerson)
        .then((returnedPerson) => {
          setPersons(persons.map(person =>
            person.id !== existingPerson.id ? person : returnedPerson
          ))
          setNewName('')
          setNewNumber('')
        })
      }
    return
  }

    const personObject = {
      name: newName.trim(),
      number: newNumber
    }

     personService
      .create(personObject)
      .then(returnedPerson  => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const deletePerson  = (id,name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson}/>
    </div>
  )
}

export default App

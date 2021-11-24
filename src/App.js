import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Display from './components/Display'
import personService from './services/persons'
import Search from './components/Search'

const App = () => {
  const [ persons, setPersons ] = useState([])
  useEffect(() => {
    personService.getAll()
    .then(rtnPsn => setPersons(rtnPsn))
  }, [])
  
  return (
    <div>
      <Form persons={persons} setPersons={setPersons} />
      <Search persons={persons} setPersons={setPersons} />
      <Display persons={persons} />
    </div>
  )
}

export default App
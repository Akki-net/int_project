import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Display from './components/Display'
import personService from './services/persons'
import Search from './components/Search'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ salary, setSalary ] = useState('')
  const [ designation, setDesignation ] = useState('') 

  useEffect(() => {
    personService.getAll()
    .then(rtnPsn => setPersons(rtnPsn))
  }, [])

  return (
    <div>
      <Form 
      name={name}
      setName={setName}
      salary={salary}
      setSalary={setSalary}
      email={email}
      setEmail={setEmail}
      designation={designation}
      setDesignation={setDesignation}
      persons={persons} setPersons={setPersons} />
      <Search persons={persons} setPersons={setPersons} />
      <Display 
      setName={setName}
      setEmail={setEmail}
      setSalary={setSalary}
      setDesignation={setDesignation}
      persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App
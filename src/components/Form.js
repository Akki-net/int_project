import React, { useState } from 'react'
import personService from '../services/persons'

const Form = ({
    name,
    setName,
    salary,
    setSalary,
    email,
    setEmail,
    designation,
    setDesignation,
    persons, setPersons}) => {
    
  const [ errMsg, setErrMsg ] = useState(null)

  const submitHandler = event => {
      event.preventDefault()
      if(isNaN(salary)){
        setErrMsg('Must be a number')
        return 0
      }
      const obj = {
          name,
          email,
          salary,
          designation
      }
      const exists = persons.find(person => person.email === obj.email)
      if(exists){
        const result = window.confirm('Do you want to update the existing entity?')
        if(result){
            personService.update(exists.id, obj)
            .then(newObj => {
                setPersons(persons.map(person => person.email !== obj.email ?  person : newObj))
            })
        }
      }
      else{
      personService.create(obj)
      .then(rtnObj => setPersons(persons.concat(rtnObj)))
      }
      setName('')
      setSalary('')
      setEmail('')
      setDesignation('')
      setErrMsg(null)
      
  }

    return (
        <form onSubmit={submitHandler}> 
            <label htmlFor="name">Name:</label>
            <input name="name" id="name" required onChange={({target}) => setName(target.value)} value={name} /><br/>
            <label htmlFor="email">Email:</label>
            <input name="email" type="email" id="email" required onChange={({target}) => setEmail(target.value)} value={email} /><br/>
            <label htmlFor="salary">Salary:</label>
            <input name="salary" id="salary" required onChange={({target}) => setSalary(target.value)} value={salary} /> <span style={{color: "red"}}>{errMsg}</span> <br/>
            <label htmlFor="designation">Designation:</label>
            <input name="designation" id="designation" list="design" required onChange={({target}) => setDesignation(target.value)} value={designation} /><br/>
            <datalist id="design">
                <option value="Graphic designer" />
                <option value="Civil Engineer" />
                <option value="Photographer" />
                <option value="Web Developer" />
                <option value="Doctor" />
            </datalist>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form
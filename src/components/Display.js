import React from 'react';
import personService from '../services/persons'

const Display = ({
    setName,
    setEmail,
    setSalary,
    setDesignation,
    persons, setPersons}) => {    
    const css = {
        width : "80%",
        marginLeft : "auto",
        marginRight: "auto",
        border: "1px solid"
    }

    const deleteHandler = id => {
        personService.removeOne(id)
        .then(rtnObj => {
            setPersons(persons.filter(person => person.id!==id))
        })
    } 

    const editHandler = id => {
        const editPerson = persons.find(person => person.id===id)
        setName(editPerson.name)
        setEmail(editPerson.email)
        setSalary(editPerson.salary)
        setDesignation(editPerson.designation)
    }

    return(
        <table style={css}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Designation</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {persons.map(person =>
                <tr key={person.id}>
                    <td> {person.name} </td>
                    <td> {person.email} </td>
                    <td> {person.salary} </td>
                    <td> {person.designation} </td>
                    <td><button onClick={() => editHandler(person.id)} >Edit</button>/<button onClick={() => deleteHandler(person.id)}>Delete</button></td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export default Display
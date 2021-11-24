import React from 'react';
import personService from '../services/persons'

const Display = ({persons, setPersons}) => {    
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
                    <td><button>Edit</button>/<button onClick={() => deleteHandler(person.id)}>Delete</button></td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export default Display
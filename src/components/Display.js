import React from 'react';

const Display = ({persons}) => {    
    const css = {
        width : "80%",
        marginLeft : "auto",
        marginRight: "auto",
        border: "1px solid"
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
                    <td>edit/delete</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export default Display
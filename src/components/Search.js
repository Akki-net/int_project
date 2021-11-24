import React, { useState } from 'react'
import personService from '../services/persons'

const Search = ({ persons, setPersons }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const searchHandler = event => {
        event.preventDefault()
        if(name!=='' && email!==''){
            const searchWord = new RegExp(name, 'i')
            const selName = persons.filter(person => {
                if(person.name.search(searchWord) !== -1)
                return person

                return false
            })
            if(selName.length > 0){
                const finalPerson = selName.find(person => person.email === email)
                persons.length = 0
            setPersons(persons.concat(finalPerson))
            }
            else{
                alert(`No person's email exists with this name, try again!`)
            }
            setName('')
        setEmail('')
        }
        else if(name!=='' && email===''){
            const searchWord = new RegExp(name, 'i')
            const newPersons = persons.filter(person => {
                if(person.name.search(searchWord) !== -1)
                return person

                return false
            })
            setPersons(newPersons)
            setName('')
        }
        else if(name==='' && email!==''){
            const selPerson = persons.find(person => person.email===email)
            persons.length = 0
            setPersons(persons.concat(selPerson))
            setEmail('')
        }
        else{
            personService.getAll()
            .then(rtnPsn => setPersons(rtnPsn))            
        }
    }

    return (
        <form onSubmit={searchHandler} >
            <label htmlFor="name">Name:</label>
            <input name="name" id="name" onChange={({ target }) => setName(target.value)} value={name} />
            <label htmlFor="email">Email:</label>
            <input name="email" type="email" id="email" onChange={({ target }) => setEmail(target.value)} value={email} />
            <input type="submit" value="Search" />
        </form>
    )
}

export default Search
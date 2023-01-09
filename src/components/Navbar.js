import React, { useContext } from 'react'
import { BookContext } from '../Context/BookContext'

const Navbar = () => {
    const [books] = useContext(BookContext)
    return (
        <div>
            <p> Wie Viele: {books.length} </p>
        </div>
    )
}

export default Navbar


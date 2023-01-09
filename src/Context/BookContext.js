import React, { useState, createContext } from 'react'
export const BookContext = createContext();

export const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {
            id: 1,
            title: "harry potter",
            author: "jk rowling"
        },
        {
            id: 2,
            title: "lord of the rings",
            author: "jrr tolkien"
        },
        {
            id: 3,
            title: "infinite jest",
            author: "david foster wallace"
        }
    ])
    return (
        <div>
            <BookContext.Provider value={[books, setBooks]} >
                {props.children}
            </ BookContext.Provider>
        </div>
    )
}

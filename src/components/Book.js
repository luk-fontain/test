import React from 'react'

const Book = ({ title, author }) => {
    return (
        <div className="container">
            <div>
                <h3>Titel: {title}</h3>
                <p>Author: {author}</p>
            </div>
        </div>
    )
}

export default Book
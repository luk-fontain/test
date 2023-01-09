import React, { useState, useContext } from 'react';
import { BookContext } from '../Context/BookContext';

const AddBook = () => {

    const [inputAuthor, setInputAuthor] = useState("");
    const [inputTitle, setInputTitle] = useState("");
    const [books, setBooks] = useContext(BookContext);

    const submitHandler = (e) => {
        e.preventDefault();
        setBooks(prevBooks => [...prevBooks, { title: inputTitle, author: inputAuthor, id: books.length + 1 }]);
    }

    return (
        <div className="container bg-black p-5">
            <form className="" onSubmit={submitHandler}>
                <input type="text"
                    placeholder="title"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                />
                <input type="text"
                    placeholder="author"
                    value={inputAuthor}
                    onChange={(e) => setInputAuthor(e.target.value)}
                />
                <button className="btn btn-success">Add to Booklist</button>
            </form>
        </div>
    )
}

export default AddBook;
import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';
import Book from './Book';

const Booklist = () => {
    const [books] = useContext(BookContext);

    return (
        <div>
            <h5>Sollte alle Bücher aus Ihrem Kontext nehmen und für jedes eine ...</h5>
            {books.map((item, index) =>
                <Book title={item.title}
                    key={index}
                    author={item.author} />
            )}
        </div>
    )
}

export default Booklist
import React, { createContext, useReducer, useEffect } from 'react'
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [
        // { title: 'Name of the Wind', author: 'Patrick Rothfuss', id: 1 },
        // { title: 'The Final Empire', author: 'Brandon Sanderson', id: 2 },
    ], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : []
    });

    // const addBook = (title, author) => {
    //     setBooks([...books, { title: title, author: author, id: (books.length + 1) }])
    // }
    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id))
    // }
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return (
        // <BookContext.Provider value={{ books, addBook, removeBook }}>
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider

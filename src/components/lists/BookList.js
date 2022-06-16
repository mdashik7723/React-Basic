import React from 'react';
import Book from '../representational/Book';

const BookList = (props) => {
    return (
        props.Books.map((book, index) => {
            return(
                <Book
                    bookName = {book.bookName}
                    Writer = {book.Writer}
                    delete = {() => this.deleteBookState(index)}
                    key={book.id}
                    inputName = {(event) => this.changeWithInputState(event, index)}

                />
            );
        })
);
}
 export default BookList;
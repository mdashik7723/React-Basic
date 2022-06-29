import React from 'react';
import Book from '../representational/Book';
import { withRouter } from "react-router-dom";

const BookList = (props) => {
    return (
        props.Books.map((book, index) => {
            return(
                <Book
                    bookName = {book.bookName}
                    Writer = {book.Writer}
                    key={book.id}
                    selectedBookHandler={()=>this.state.selectedBookHandler(book)}

                />
            );
        })
);
}
 export default BookList;
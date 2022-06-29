import React, {Component} from 'react';
import Book from '../representational/Book';
import {Router} from 'react-router';
import {Link} from "react-router-dom";

class BookList extends Component {
    render() {
        return (
            this.props.Books.map((book, index) => {
                return (
                    <Link to={"/book/" + book.id}> key={book.id}

                        <Book
                            bookName={book.bookName}
                            Writer={book.Writer}
                            selectedBookHandler={() => this.state.selectedBookHandler(book)}

                        />

                    </Link>
                );
            })
        );
    }
}

export default BookList;
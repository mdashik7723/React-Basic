import React, {Component} from 'react';
import Book from './representational/Book';
import bookList from '../assets/books.js';
import NewBook from "./representational/NewBook";
import {Route, NavLink, Switch} from "react-router-dom";
import BookList from "./lists/BookList";
import BookDetail from "./representational/BookDetail";
import book from "./representational/Book";

class MainComponent extends Component {

    state = {
        Books: bookList, selectedBook: null
    }
    selectedBookHandler = bookId => {
        const book = this.state.books.filter(bookId === book) [0];
        this.setState({
            selectedBook: book
        })
    }

    render() {

        const Books = <BookList
            books={this.state.Books}>
            selectedBookHandler={this.state.selectedBookHandler}
        </BookList>
        return (<div className="App">
            <nav className="nav-bar">
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/new-book">New Book</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact render={() => Books}/>
                <Route path="/new-book" exact component={NewBook}/>
                <Route path="/book/:id" render={() => <BookDetail book={this.state.selectedBook}/>}/>
            </Switch>
        </div>);

    }

}


export default MainComponent;
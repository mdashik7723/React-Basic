import React, { Component} from 'react';
import Book from './representational/Book';
import bookList from '../assets/books.js';
import NewBook from "./representational/NewBook";
import { Route, NavLink } from "react-router-dom";
import BookList from "./lists/BookList";
import book from "./representational/Book";

class MainComponent extends Component {

    state = {
        Books: bookList
    }


    render() {

     const Books = <BookList
         books = {this.state.Books}></BookList>
        return (
            <div className= "App">
                <nav className="nav-bar">
                    <ul>
                        <li><NavLink to="/" exact>Home</NavLink> </li>
                        <li><NavLink to ="/new-book">New Book</NavLink> </li>
                    </ul>
                </nav>
                <Route path="/" exact render={() => Books}/>
                <Route path="/new-book" exact component={NewBook}/>
            </div>
        );

    }

}


export default MainComponent;
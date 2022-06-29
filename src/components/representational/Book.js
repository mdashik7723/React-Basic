import React from "react"
import '../../Stylesheet/Book.css';
import { withRouter } from "react-router";

const Book = props =>{
    return (
        <div className= "Book" onClick={props.selectedBookHandler}>
            <h1> Book Name: {props.bookName}</h1>
            <h2> Writer: {props.Writer}</h2>
        </div>
    )
}

    export default Book;

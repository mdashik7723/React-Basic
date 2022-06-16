import React from "react"
import '../../Stylesheet/Book.css';

const Book = props =>{
    return (
        <div className= "Book">
            <h1 onClick={props.delete}> Book Name: {props.bookName}</h1>
            <h2> Writer: {props.Writer}</h2>
            <input type="text"onChange = {props.inputName} value={props.bookName}/>
        </div>
    )
}

    export default Book;

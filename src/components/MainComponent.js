import React, { Component} from 'react';
import Book from './Book';

class MainComponent extends Component {

    state = {
        Books: [
            { id: 1, bookName: "Bangladesh" , Writer: "1971"},
            { id: 2, bookName: "Pakisthan", Writer: "1947"},
            { id: 3, bookName: "India", Writer: "1947"}
        ],
        showBooks: true
    }

    // changeBookState =(newBookName) =>{
    //     this.setState({
    //         Books: [
    //             { bookName: newBookName, Writer: "1971"},
    //             { bookName: "Sri Lanka", Writer: "1947"},
    //             { bookName: "Malaishiya", Writer: "1947"}
    //         ],
    //     })
    // }

    changeWithInputState = (event, index) => {
        const book = {
            ...this.state.Books[index]
        }

        book.bookName = event.target.value;
        const books = [...this.state.Books];

        books[index] = book;

        this.setState({Books: books});
    }
    // constructor() {
    //     super();
    //     this.state = {}
    // }


    deleteBookState = index => {
        const books = this.state.Books;
        books.splice(index,1);
        this.setState({
            books: books
        })

    };

    toggleBooks = () => {
        this.setState ({ showBooks: !this.state.showBooks});
    }

    render() {
        const style = {
            border:"1px solid red",
            borderRadius:"5px",
            backgroundColor: "Black",
            color:"White"
        };

        // const booksState = this.state.Books;


        let books = null;
        if (this.state.showBooks){
            books = this.state.Books.map((book, index) => {
                return(
                    <Book
                        bookName = {book.bookName}
                        Writer = {book.Writer}
                        delete = {() => this.deleteBookState(index)}
                        key={book.id}
                        inputName = {(event) => this.changeWithInputState(event, index)}

                    />
                );
            });

        }

        return (
            <div className= "App">
                <h1 style={style}>Book List</h1>
                <button onClick={this.toggleBooks}>ToggleBooks</button>
                {books}
            </div>
        );

    }

}


export default MainComponent;
import './App.css';
import React, { Component} from 'react';
import Book from './components/Book';
import * as events from "events";

// Functional component
// function App() {
//   return (
//     <div className="App">
//       <h1>
//         Hello World
//       </h1>
//       < Person/>
//     </div>
//
//   );
// }

// Class component

class App extends Component {



    // State

    state = {
        Books: [
            { bookName: "Ashik" , Writer: "244"},
            { bookName: "Kalam", Writer: "Lomalala"},
            { bookName: "Halalalalalalal", Writer: "hummmaaa"}
        ],
        OtherPros: "I am other prop"
    }

    changeBookState =(newBookName) =>{
        this.setState({
            Books: [
                { bookName: newBookName, Writer: "saik"},
                { bookName: "Booth", Writer: "Huyaaa"},
                { bookName: "Lomaaaa", Writer: "arabic"}
            ],
        })
    }

    changeWithStateInputState = event => {
        this.setState({
            Books: [
                {bookName: event.target.value, Writer: "saik"},
                {bookName: "Booth", Writer: "Huyaaa"},
                {bookName: "Lomaaaa", Writer: "arabic"}
            ],
        });
    }
    // constructor() {
    //     super();
    //     this.state = {}
    // }

    render() {
        const style = {
            border:"1px solid red",
            borderRadius:"5px",
            backgroundColor: "Black",
            color:"White"
        };
        return (
            <div className= "App">
                <h1 style={style}>Book List</h1>
                <button onClick = {()=>this.changeBookState("Nahid")} >Change State</button>
                <input type= "text" onChange={this.changeWithStateInputState}/>
                <Book
                    bookName = {this.state.Books[0].bookName}
                    Writer = {this.state.Books[0].Writer}
                    inputName = {this.changeWithStateInputState}/>
                <Book
                    bookName = {this.state.Books[1].bookName}
                    Writer = {this.state.Books[1].Writer} />
                <Book
                    bookName = {this.state.Books[2].bookName}
                    Writer = {this.state.Books[2].Writer}
                change = {()=>this.changeBookState("Zahid")}/>
            </div>
        );

    }
}


export default App;

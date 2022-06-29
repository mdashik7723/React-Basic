import './App.css';
import React from 'react';
import * as events from "events";
import MainComponent from './components/MainComponent';
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <MainComponent/>
        </BrowserRouter>
        )
}


export default App;

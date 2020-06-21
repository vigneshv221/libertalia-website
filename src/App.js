import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

export class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                Hi
            </div>
        );
    }
}

export default App;

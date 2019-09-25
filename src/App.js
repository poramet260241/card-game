import React, { Component } from 'react';
import './App.css';
import WordCard from "./WordCard";

const word = ["Dog", "Apple", "Computer", "Congratulations"];
class App extends Component {
  render() {

    return (
    <div className = 'App'>
        <p className = 'Description'>CREATE WORDS FROM THE FOLLOWING CHARACTERS</p>
        <WordCard value={word[Math.floor((Math.random() * 4))]}/>
        <p className = 'Status'>ROUND 1</p>
    </div>
    );
   }
}

export default App



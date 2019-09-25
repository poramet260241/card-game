import React, { Component } from 'react';
import './App.css';
import WordCard from "./WordCard";

const word = ["Dog", "Apple", "Computer", "Power"];
class App extends Component {

  reload = () => {
    window.location.reload(false);
  }

  render() {

    return (
    <div className = 'App'>
        <p className = 'Description'>CREATE WORDS FROM THE FOLLOWING CHARACTERS</p>
        <WordCard value={word[Math.floor((Math.random() * 4))]}/>
        <p className = 'Status' id = 'roundBar'>ROUND 1</p>
        <p className = 'Status' id = 'statusBar'></p>
        <button id = 'newgameBtn' onClick = {this.reload}>New Game</button>
        <br></br>
        <br></br>
        <button id = 'surrenderBtn'>Surrender</button>
        <p className = 'Status' id = 'answerBar'></p>

    </div>
    );
   }
}

export default App



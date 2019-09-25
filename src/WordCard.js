import React, { Component } from 'react';
import './App.css';

import CharacterCard from './CharacterCard';
import _ from 'lodash';
import { get } from 'http';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    console.log({word})
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false,
    }
}

export default class WordCard extends Component {

    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }

    activationHandler = (c) => {
            let guess = [...this.state.guess, c]
            this.setState({guess})
            if(guess.length == this.state.chars.length && this.state.attempt < 5){
                if(guess.join('').toString() == this.state.word){
                    this.setState({guess: [], completed: true})
                    document.getElementById('statusBar').innerHTML = `COMPLETE!`
                }
                else{
                    this.setState({guess: [], attempt: this.state.attempt + 1})
                    document.getElementById('roundBar').innerHTML = `ROUND ${this.state.attempt+1}`
                    
                }
            }
            else if(guess.length == this.state.chars.length && this.state.attempt >= 5){
                document.getElementById('statusBar').innerHTML = `GAME OVER!`
                document.getElementById('answerBar').innerHTML = `Answer is ${this.state.word}`
            }
    }
       

render() {
 return (
    <div>
        { Array.from(this.state.chars.join('').toString()).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} {...this.state}/>)}
    </div>
 );
 }
}

   
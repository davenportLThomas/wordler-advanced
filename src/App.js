import WordLine from './WordLine';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [size, setSize] = useState(6);
  const [secretWord, setSecretWord] = useState('');

  console.log(secretWord);

  if(secretWord === ''){
    createSecretWord();
    console.log(secretWord);
  }

  function createSecretWord(){
    var randomWords = require('random-words');
    var newWord;
    do{
      newWord = randomWords({maxLength: size, exactly: 1});
    }
    while(newWord[0].length !== size);
    setSecretWord(newWord[0]);
  }

  function createGrid(){
    var grid = [];
     for (var i = 0; i < size + 1; i++) {
         grid.push(<WordLine n={size}/>);
     } 
     return (grid);
 }

  const onInputchange = (event) => {
    var value = parseInt(event.target.value);
    if(isNaN(value) || value > 13){
      setSize('');
    }
    else
    {
      setSize(parseInt(event.target.value));
    }
  }

  return (
    <div>
    <div className='Title'> 
      Wordle Advanced
    </div>
    <div>
        {createGrid()}
    </div>
    <div className='SizeChange'>
      Enter word size
      <input type="text" maxLength='2' value={size} onChange={onInputchange}></input>
    </div>
    </div>
  );
}


export default App;

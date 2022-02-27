import WordLine from './WordLine';
import './App.css';
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

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
         grid.push(<WordLine n={size} secret={secretWord}/>);
     } 
     return (grid);
 }

  const onInputchange = (event) => {
    var value = parseInt(event.target.value);
    if(isNaN(value) || value > 13 || value < 3){
      setSize('');
    }
    else
    {
      setSize(parseInt(event.target.value));
      setSecretWord('');
    }
  }

  return (
    <div>
    <div className='Title'> 
      Wordle Advanced
    </div>
    Enter word size
      <Slider
    aria-label="Temperature"
    defaultValue={30}
    valueLabelDisplay="auto"
    onChange={onInputchange}
    value={size}
    step={1}
     marks
    min={3}
    max={11}
    size="small"
    />
    <div>
        {createGrid()}
    </div>
    {secretWord}
    </div>
  );
}


export default App;

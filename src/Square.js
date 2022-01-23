import './App.css';
import React, { useState, useEffect } from 'react';

function Square(props) {
    const [value, setValue] = useState();
    const word = String(props.secret);
    const letter = word.slice(props.position, props.position+1);
    
    useEffect(() => {
        if(value === letter){
            console.log('Correct match at %d', props.position);
        }
        else if(props.secret.includes(value) && value !== ''){
            console.log('Got a letter at %d', props.position);
        } else {
            console.log('no match');
        }

    });

    const onInputchange = (event) => {
        var input = event.target.value;
        if (!/[^a-z]/.test(input)){
            setValue(event.target.value);
        } else {
            setValue('');
        }
    }

    return(
        <input type="text" className ='Square' background-color='blue' maxLength='1' value={value} onChange={onInputchange}></input>
    )
    
}

export default Square;
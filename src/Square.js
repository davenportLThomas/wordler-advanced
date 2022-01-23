import './App.css';
import React, { useState } from 'react';

function Square() {
    const [value, setValue] = useState('');

    const onInputchange = (event) => {
        var input = event.target.value;
        if (!/[^a-z]/.test(input)){
            setValue(event.target.value);
        } else {
            setValue(value);
        }
    }

    return(
        <input type="text" className ='Square' maxLength='1' value={value} onChange={onInputchange} autoFocus></input>
    )
    
}

export default Square;
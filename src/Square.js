import './App.css';
import React, { useState } from 'react';

function Square() {
    const [value, setValue] = useState('');

    const onInputchange = (event) => {
        setValue(event.target.value);
    }

    return(
        <input type="text" className ='Square' maxLength='1' value={value} onChange={onInputchange}></input>
    )
    
}

export default Square;
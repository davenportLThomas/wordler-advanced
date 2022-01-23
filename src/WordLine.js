import './App.css';
import React from 'react';
import Square from './Square';

function WordLine(props) {

   function createRows(){
       var rows = [];
        for (var i = 0; i < props.n; i++) {
            rows.push(<Square />);
        }
        return (rows);
    }

    return(
        <div>
            {createRows()}
        </div>
    );
    
}

export default WordLine;
import './App.css';
import React from 'react';
import Square from './Square';

class WordLine extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.n);
    }

   createRows(){
       var rows = [];
        for (var i = 0; i < 6; i++) {
            rows.push(<Square />);
        }
        return (rows);
    }

    render() {
        return(
            <div>
                {this.createRows()}
            </div>
        );
    }
}

export default WordLine;
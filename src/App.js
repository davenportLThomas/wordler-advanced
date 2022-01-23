import WordLine from './WordLine';
import './App.css';

function App() {

  function createGrid(){
    var grid = [];
     for (var i = 0; i < 6; i++) {
         grid.push(<WordLine n="6"/>);
     } 
     return (grid);
 }

  return (
    <div>
        {createGrid()}
    </div>
  );
}

export default App;

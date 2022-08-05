import { useState } from 'react';
import './App.css';
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';

function App() {

  const [displayStartPage, toggleDisplayStartPage] = useState("block");
  const [displayGamePage, toggleDisplayGamePage] = useState("none");

  return (
    <div className="App">
      {/*<StartPage/>*/}
      <GamePage/>
    </div>
  );
}

export default App;

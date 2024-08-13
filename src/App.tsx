import React, { useState, useEffect } from 'react';
import './App.css';
import CactusTable from './components/Table';

function App() {
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    fetch('/game').then(res => res.json()).then(data=> {
      setGame(data);
    });
  }, []);
  if(!game) {
    return (
      <div className="App">
        <header className="App-header">
  
        <h2> Game is still not loaded </h2>
        </header>
      </div>
    );
  }

  const {id, throwPile, deck, ...tableProps} = game

  return (
    <div className="App">
      <header className="App-header">

      <CactusTable {... tableProps}/>

      <p>The current time is {id}.</p>
      </header>
    </div>
  );
}

interface Game {
  id: number
  deck: string[]
  player1: string[]
  player2: string[]
  throwPile: string[]
}


export default App;
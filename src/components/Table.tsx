import React, { useEffect, useState } from 'react';
import './Table.scss';
import Player from './Player';
import Card from './Card';
import { drawFromDeck, startNewGame, throwCard } from './api';
import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React.FC = () => {
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    startNewGame().then(data=> {
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

  const onCardClicked = async (index: number) => {
    const newGameState = await throwCard(index)
    setGame(newGameState)
  }

  return (
    <GameContext.Provider value={{...game, onCardClicked}}>
      <div className="cactus-table">
        <div className="table-center">
          <div className='cards'>
          <Card value={game.throwPile.length > 0 ? game.throwPile[game.throwPile.length-1]: ""} canPlay={true}/>
        
          <Card value='deck' isFlippedDown={true} canPlay={true} onCardClicked={async () => {
            const hand = await drawFromDeck()
            setGame({...game, turn: hand.turn, valueInHand: hand.card})
          }}/>
          </div>
        </div>
        <div className="seats">
          <Player name={'p1'} cards={game.player1} seatPosition='top'/>
          <Player name={'p2'} cards={game.player2} seatPosition='bottom'/>
        </div>
      </div>
    </GameContext.Provider>
  );
};

export default CactusTable;

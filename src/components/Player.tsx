import React, { useContext } from 'react';
import Card from './Card';
import { GameContext } from './Table';

type PlayerProps = {
    name: string
    cards: string[]
    seatPosition: "top" | "bottom"
};

const Player: React.FC<PlayerProps> = ({ name, cards, seatPosition }) => {
    const {turn, valueInHand} = useContext(GameContext)
    const canPlay = turn.player === name
    const showDrawnCard = canPlay && !!valueInHand
    debugger
    return (
        <div className={`seat ${seatPosition}-seat`}>
          <div className='player-name'>{name}</div>
          <div className={`cards`}>
            {cards.map((card, i) =>
              <Card key={i} value={card} canPlay={canPlay}/>
            )}

            {showDrawnCard ? <Card value={valueInHand} canPlay={canPlay}/> :<></> }
          </div>
          
        </div>
    );
};

export default Player;
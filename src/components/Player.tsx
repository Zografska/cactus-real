import React, { useContext } from 'react';
import Card from './Card';
import { GameContext } from './context';

type PlayerProps = {
    name: string
    cards: string[]
    seatPosition: "top" | "bottom"
};

const Player: React.FC<PlayerProps> = ({ name, cards, seatPosition }) => {
    const {turn, valueInHand, onCardClicked} = useContext(GameContext)
    const canPlay = turn.player === name
    const showDrawnCard = canPlay && !!valueInHand

    return (
        <div className={`seat ${seatPosition}-seat`}>
          <div className='player-name'>{name}</div>
          <div className={`cards`}>
            {cards.map((card, i) =>
              <Card key={i} value={card} canPlay={canPlay} onCardClicked={() => onCardClicked(i) }/>
            )}

            {showDrawnCard ? <Card value={valueInHand} canPlay={canPlay} onCardClicked={() => onCardClicked(cards.length) }/> :<></> }
          </div>
          
        </div>
    );
};

export default Player;
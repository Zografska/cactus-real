import React, { useContext } from 'react';
import Card from './Card';
import { GameContext } from './Table';

type PlayerProps = {
    name: string
    cards: string[]
    seatPosition: "top" | "bottom"
};

const Player: React.FC<PlayerProps> = ({ name, cards, seatPosition }) => {
    const {turn} = useContext(GameContext)
    const canPlay = turn.player === name
    return (
        <div className={`seat ${seatPosition}-seat`}>
          <div className='player-name'>{name}</div>
          <div className={`cards`}>
            {cards.map((card, i) =>
              <Card key={i} value={card} canPlay={canPlay}/>
            )}
          </div>
        </div>
    );
};

export default Player;
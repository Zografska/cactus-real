import React from 'react';
import Card from './Card';

type PlayerProps = {
    name: string
    cards: string[]
    seatPosition: "top" | "bottom"
};

const Player: React.FC<PlayerProps> = ({ name, cards, seatPosition }) => {
    return (
        <div className={`seat ${seatPosition}-seat`}>
          <div className='player-name'>{name}</div>
          <div className="cards">
            {cards.map((card, i) =>
              <Card key={i} value={card}/>
            )}
          </div>
        </div>
    );
};

export default Player;
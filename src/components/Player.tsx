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
          {name}
          <div className="cards">
            {cards.map(card =>
                    <Card value={card}/>
            )}
          </div>
        </div>
    );
};

export default Player;
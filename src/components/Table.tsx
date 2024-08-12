import React from 'react';
import './Table.scss';
import Card from './Card';

interface TableProps{
    player1: string[]
    player2: string[]
    deck?: string[]
    pile?: string[]
}

const PokerTable: React.FC<TableProps> = ({player1, player2}) => {
    return (
    <div className="poker-table">
      <div className="table-center">🌵</div>
      <div className="seats">
        <div className="seat top-seat">
          Player 1
          <div className="cards">
            {player1.map(card =>
                <Card value={card}/>
            )}
            
          </div>
        </div>
        <div className="seat bottom-seat">
          Player 2
          <div className="cards">
          {player2.map(card =>
                <Card value={card}/>
            )}
          </div>
        </div>
      </div>
    </div>
      );
};

export default PokerTable;

import React from 'react';
import './Table.scss';
import Player from './Player';

interface TableProps{
    player1: string[]
    player2: string[]
    deck?: string[]
    pile?: string[]
}

const CactusTable: React.FC<TableProps> = ({player1, player2}) => {
    return (
    <div className="cactus-table">
      <div className="table-center">🌵</div>
      <div className="seats">
        <Player name={'Laura'} cards={player2} seatPosition='top'/>
        <Player name={'Alex'} cards={player2} seatPosition='bottom'/>
      </div>
    </div>
      );
};

export default CactusTable;

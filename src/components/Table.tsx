import React from 'react';
import './Table.scss';

const PokerTable: React.FC = () => {
    return (
    <div className="poker-table">
      <div className="table-center">Poker Table</div>
      <div className="seats">
        <div className="seat top-seat">
          Player 1
          <div className="cards">
            <div className="card">A♥</div>
            <div className="card">K♠</div>
            <div className="card">Q♦</div>
            <div className="card">J♣</div>
          </div>
        </div>
        <div className="seat bottom-seat">
          Player 2
          <div className="cards">
            <div className="card">10♠</div>
            <div className="card">9♥</div>
            <div className="card">8♦</div>
            <div className="card">7♣</div>
          </div>
        </div>
      </div>
    </div>
      );
};

export default PokerTable;

import React, { useEffect } from 'react'
import playerIcon from '../player-icon.png';
import './Dealer_And_Player.css';
import GameCard from './GameCard';


const Player = ({playerCards, playerCardsCount, totalCash }) => {
  const cards = playerCards.map((card) => {
    <GameCard cardResponse={card} />
  })

  return (
    <div className='player-container'>
        <img className='player-img' src={playerIcon} />
        <h3>Player</h3>
        {cards}
        <div>Count: {playerCardsCount}</div>
        <div className='total-cash'>Total Cash: {totalCash}</div>
    </div>
  )
}

export default Player
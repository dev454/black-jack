import React, {useEffect} from 'react';
import dealerIcon from '../dealer-icon.png'
import './Dealer_And_Player.css';
import GameCard from './GameCard';

const Dealer = ({dealerCards, dealerCardsCount}) => {

  const cards = dealerCards.map((card) => {
    <GameCard cardResponse={card} />
  })

  return (
    <div className='dealer-container'>
        <img src={dealerIcon} />
        <h3>Dealer</h3>
        {cards}
        <div>Count: {dealerCardsCount}</div>
        <br />
    </div>
  )
}

export default Dealer
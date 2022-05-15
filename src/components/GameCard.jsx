import React, {useEffect} from 'react';
import './GameCard.css';

const GameCard = ({cardResponse}) => {
  let cardValue;
  let suitChar;
  let suit;

  cardValue = cardResponse.charAt(0);
  suitChar = cardResponse.charAt(1);
  
  switch (suitChar) {
    case "C":
      suit = <span>&clubs;</span>;
      break;
    case "D":
      suit = <span className='red-suit'>&diams;</span>;
      break;
    case "H":
      suit = <span className='red-suit'>&hearts;</span>;
      break;
    case "S":
      suit = <span>&spades;</span>;
      break;
    default:
      break;
  }


  return (
    <div className='card-container'>
      {suit}
      <br />
      {cardValue}
      <br />
      {suit}
    </div>
  )
}

export default GameCard
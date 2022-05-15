import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Dealer from './Dealer';
import Player from './Player';
import DealButton from './DealButton';
import StandButton from './StandButton';
import HitButton from './HitButton';


const App = () => {
  const [playerTotalCash, setPlayerTotalCash] = useState(1000);
  const [dealerCards, setDealerCards] = useState([]);
  const [dealerCardsCount, setDealerCardsCount] = useState(0);
  const [playerCards, setPlayerCards] = useState([]);
  const [playerCardsCount, setPlayerCardsCount] = useState(0);
  
  const handleDealClick = () => {
    console.log("Starting new game");
    createNewDeck();
  }
 
  const handleStandClick = () => {
    console.log("Stand Button Clicked")
    setDealerCards([...dealerCards, getCard()]);
    countCards();
  }
  
  const handleHitClick = () => {
    console.log("Hit Button Clicked");
    setPlayerCards([...playerCards, getCard()]);
    if (dealerCardsCount < 17) setDealerCards([...dealerCards, getCard()]);
    countCards();
  }  

  const createNewDeck = () => {
    axios.post("http://localhost:4000/new-deck")
      .then((res) => {
        console.log(res.data)
      });
  }

  let winner;

  const countCards = (dealerCards=dealerCards, playerCards=playerCards) => {
    dealerCards.forEach(card => {
      switch(card.charAt(0)){
        case "2":
          setDealerCardsCount(dealerCardsCount+2);
          break;
        case "3":
          setDealerCardsCount(dealerCardsCount+3);
          break; 
        case "4":
          setDealerCardsCount(dealerCardsCount+4);
          break;
        case "5":
          setDealerCardsCount(dealerCardsCount+5);
          break;
        case "6":
          setDealerCardsCount(dealerCardsCount+6);
          break;
        case "7":
          setDealerCardsCount(dealerCardsCount+7);
          break;
        case "8":
          setDealerCardsCount(dealerCardsCount+8);
          break;
        case "9":
          setDealerCardsCount(dealerCardsCount+9);
          break;
        case "10":
          setDealerCardsCount(dealerCardsCount+10);
          break;
        case "J":
          setDealerCardsCount(dealerCardsCount+10);
          break;
        case "Q":
          setDealerCardsCount(dealerCardsCount+10);
          break;
        case "K":
          setDealerCardsCount(dealerCardsCount+10);
          break;
        case "A":
          setDealerCardsCount(dealerCardsCount+11);
          break;
      }
    });
    playerCards.forEach(card => {
      switch(card.charAt(0)){
        case "2":
          setPlayerCardsCount(playerCardsCount+2);
          break;
        case "3":
          setPlayerCardsCount(playerCardsCount+3);
          break; 
        case "4":
          setPlayerCardsCount(playerCardsCount+4);
          break;
        case "5":
          setPlayerCardsCount(playerCardsCount+5);
          break;
        case "6":
          setPlayerCardsCount(playerCardsCount+6);
          break;
        case "7":
          setPlayerCardsCount(playerCardsCount+7);
          break;
        case "8":
          setPlayerCardsCount(playerCardsCount+8);
          break;
        case "9":
          setPlayerCardsCount(playerCardsCount+9);
          break;
        case "10":
          setPlayerCardsCount(playerCardsCount+10);
          break;
        case "J":
          setPlayerCardsCount(playerCardsCount+10);
          break;
        case "Q":
          setPlayerCardsCount(playerCardsCount+10);
          break;
        case "K":
          setPlayerCardsCount(playerCardsCount+10);
          break;
        case "A":
          setPlayerCardsCount(playerCardsCount+11);
          break;
      }
    });
    if (dealerCardsCount >= 17) {
      if (dealerCardsCount > playerCardsCount){
        winner = <div>Dealer has won!</div>;
      } else{
        winner = <div>You won!</div>;
      }
    } else {
      setDealerCards([...dealerCards, getCard()])
    }
  }

  const getCard = () => {
    axios.get("http://localhost:4000/get-card")
      .then((res) => {
        return res.data;
      })
  }

  useEffect(() => {
    createNewDeck();
    setDealerCards([getCard(), getCard()]);
    setPlayerCards([getCard(), getCard()]);
  }, [])



  return (
    <div>
        <h1>Black Jack</h1>=
        <Dealer dealerCards={dealerCards} dealerCardsCount={dealerCardsCount} />
        <div id="buttons-container">
          <DealButton clickHandler={handleDealClick} />
          <StandButton clickHandler={handleStandClick} />
          <HitButton clickHandler={handleHitClick} />
        </div>
        <Player playerCards={playerCards} playerCardsCount={playerCardsCount} totalCash={playerTotalCash} />
        {winner}
    </div>
  )
}

export default App;
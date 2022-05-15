import React from 'react';
import './Button.css';

const button = ({buttonText, buttonClickHandler}) => {
  return (
    <button onClick={buttonClickHandler}>{buttonText}</button>
  )
}

export default button
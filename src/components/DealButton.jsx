import React from 'react'
import Button from './UI/Button'

const DealButton = ({clickHandler}) => {
  return (
    <Button buttonText={"Deal"} buttonClickHandler={clickHandler} />
  )
}

export default DealButton
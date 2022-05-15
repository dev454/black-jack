import React from 'react'
import Button from './UI/Button'

const DoubleDownButton = ({clickHandler}) => {
    return (
        <Button buttonText={"Double Down"} buttonClickHandler={clickHandler} />
    )
}

export default DoubleDownButton
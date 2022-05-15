import React from 'react'
import Button from './UI/Button'

const HitButton = ({clickHandler}) => {
    return (
        <Button buttonText={"Hit"} buttonClickHandler={clickHandler} />
    )
}

export default HitButton
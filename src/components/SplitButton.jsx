import React from 'react'
import Button from './UI/Button'

const SplitButton = ({clickHandler}) => {
    return (
        <Button buttonText={"Split"} buttonClickHandler={clickHandler} />
    )
}

export default SplitButton
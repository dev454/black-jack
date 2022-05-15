import React from 'react'
import Button from './UI/Button'

const StandButton = ({clickHandler}) => {
    return (
        <Button buttonText={"Stand"} buttonClickHandler={clickHandler} />
    )
}

export default StandButton
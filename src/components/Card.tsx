import React, { useContext } from 'react';
import { GameContext } from './context';

interface CardProps {
    value: string
    canPlay: boolean
    onCardClicked?: () => Promise<void>
    isFlippedDown?: boolean
}

const Card: React.FC<CardProps> = ({value, canPlay, isFlippedDown, onCardClicked}: CardProps) => {
    const type = getTypeView(value[0])
    const number = getNumberView(value.substring(1))
    const isRed = value.startsWith("K") || value.startsWith("C")

    const displayedValue = isFlippedDown? "🌵" : `${number}${type}`
    const extraClasses = `${canPlay? "can-play" : ""} ${isFlippedDown? "flipped-down" : ""}`

    if (value === ""){
        return <></>
    }

    return (
        <div 
        className={`card ${extraClasses}`} 
        style={{color: isRed ? "red" : "black"}}
        aria-disabled={!canPlay}
        onClick={() => {
            if(canPlay){
                onCardClicked?.()
            }
        }}
        >{displayedValue}</div>
    );
};

function getNumberView(number: string): string{
    switch(number){
        case "1":
            return "A"
        case "11":
            return "J"
        case "12":
            return "Q"
        case "13":
            return "K"
    }
    return number
}

function getTypeView(type: string): string{
    switch(type){
        case "K":
            return "♦"
        case "P":
            return "♠"
        case "C":
            return "♥"
        case "T":
            return "♣"
    }
    return ""
}

export default Card;
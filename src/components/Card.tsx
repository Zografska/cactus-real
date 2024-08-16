import React from 'react';

interface CardProps {
    value: string
    canPlay: boolean
    isFlippedDown?: boolean
}

const Card: React.FC<CardProps> = ({value, canPlay, isFlippedDown}: CardProps) => {
    const type = getTypeView(value[0])
    const number = getNumberView(value.substring(1))
    const isRed = value.startsWith("K") || value.startsWith("C")

    if (isFlippedDown){
        return <div className={`card ${canPlay? "can-play" : ""} flipped-down`} >🌵</div>
    }

    if (value === ""){
        return <></>
    }

    return (
        <div 
        className={`card ${canPlay? "can-play" : ""}`} 
        style={{color: isRed ? "red" : "black"}}
        >{number}{type}</div>
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
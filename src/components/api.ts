import { Game } from "./types"

const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
}

export const startNewGame = (): Promise<Game> => fetch('/game').then(res => res.json())
export const drawFromDeck = (): Promise<Game> => {
    // const url =  new URL("/game/deck")
    return fetch('/game/draw', {...postOptions, }).then(res => res.json())
}

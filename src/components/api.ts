import { Game, Hand } from "./types"

const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
}

export const startNewGame = (): Promise<Game> => fetch('/game').then(res => res.json())
export const drawFromDeck = async (): Promise<Hand> => {
    const res = await fetch('/game/draw')
  return await res.json()
}

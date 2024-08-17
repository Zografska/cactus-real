export interface Game {
    id: number
    deck: string[]
    player1: string[]
    player2: string[]
    throwPile: string[]
    turn: Turn
  }
  
  export interface Turn {
    player: "p1" | "p2", 
    action: "start" | "throw" | "swap" | "peek"
  }
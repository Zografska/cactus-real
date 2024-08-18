import { createContext } from "react";
import { Game } from "./types";

export type GameContextState = Game & {
    onCardClicked: (index: number) => Promise<void>
  }
  
  export const GameContext = createContext<GameContextState>({} as GameContextState);
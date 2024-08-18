from serializer import Object
import random
from game_logic import pick_from_deck, put_card_on_throw_pile
class Turn(Object):
  def __init__(self, player="p1", action="start"):
    self.player = player
    self.action = action

class Hand(Object):
  def __init__(self, card, turn):
    self.card = card
    self.turn = turn
  	

class Game(Object):
    def __init__(self):
        card_values = [str(x + 1) for x in range(13)]
        card_types = ['T', 'K', 'C', 'P']
        deck = ["{0}{1}".format(color, value) for color in card_types for value in card_values]

        random.shuffle(deck)

        [player1, deck] = pick_from_deck(deck, 4)
        [player2, deck] = pick_from_deck(deck, 4)
        self.id = 1
        self.player1 = player1
        self.player2 = player2
        self.deck = deck
        self.throwPile = []
        self.turn = Turn()

    def pick_from_deck(self):
        [card, deck] = pick_from_deck(self.deck)
        self.deck = deck
        current_turn = self.turn.player
        self.turn = Turn(current_turn, "swap")

        if(current_turn == 'p1'):
            self.player1.append(card)
        else: 
            self.player2.append(card)
                        
        return Hand(card,self.turn)
    
    def throw_card(self, index: int):
        cards = self.player1 if self.turn.player == "p1" else self.player2
        [throwPile, cards] = put_card_on_throw_pile(self.throwPile, cards, index)
        if (self.turn.player == "p1"):
            self.player1 = cards
            self.turn = Turn("p2", "start")
        else:
            self.player2 = cards
            self.turn = Turn("p1", "start")
        


        
    

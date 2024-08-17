from serializer import Object
import random
from game_logic import pick_from_deck
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
        self.turn = Turn(self.turn.player, "swap")
        return Hand(card,self.turn)

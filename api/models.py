from serializer import Object
class Turn(Object):
  def __init__(self, player="p1", action="start"):
    self.player = player
    self.action = action

  	

class Game(Object):
  def __init__(self, player1, player2, deck, throwPile):
    self.id = 1
    self.player1 = player1
    self.player2 = player2
    self.deck = deck
    self.throwPile = throwPile
    self.turn = Turn()

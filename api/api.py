import time
import random
from flask import Flask

def pick_from_deck(deck, n=1):
    if n == 1:
        return [deck[0], deck[1:]]
    return [deck[:n], deck[n:]]

app = Flask(__name__)

@app.route('/game')
def create_game():
    card_values = [str(x + 1) for x in range(13)]
    card_types = ['T', 'K', 'C', 'P']
    deck = ["{0}{1}".format(color, value) for color in card_types for value in card_values]

    random.shuffle(deck)
    # print(deck)
    # new game

    [player1, deck] = pick_from_deck(deck, 4)
    [player2, deck] = pick_from_deck(deck, 4)

    return {"id": 1, "player1": player1, "player2": player2}


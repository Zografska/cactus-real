import time
import json
from flask import Flask
from models import Game, Turn


# actions: start, throw, swap, peek

app = Flask(__name__)

game = None

@app.route('/game')
def create_game():
    global game
    game = Game()
    return game.toJSON()

@app.route('/game/draw')
def draw_from_deck():
    global game
    return game.pick_from_deck().toJSON()

@app.route('/game/throw/<int:index>', methods=['POST'])
def throw_card(index: int):
    global game
    game.throw_card(index)
    return game.toJSON()


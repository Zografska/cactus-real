# Getting Started with Cactus Game App

This project is a small experiment with technologies, to try to implement a game we played with a loved one.

## Game Rules

Playing with the whole deck, sans Jokers

Goal of the game: have lowest score when someone says `Cactus`
scores of cards are correspondant to their index in the deck:

```
1 - 1
2 - 2
...
J - 11
Q - 12

!! Exception !!

black K -> 20
red K -> 0
```

Start: Every player gets 4 cards, and can peek the first two of them, then they get turned back down.

### On Your turn:

Possible moves:

- pick up card from deck and switch it with one of your cards
- pick up a card from the throw pile and switch it with one of yours

After every throw in the pile, you're able to out down a card in the pile that matches by number.
!! If you try to throw a card that does not match the number, your card gets switched with a new one from the deck and you must throw the old one on the pile

After a throw of certain cards, you can have special actions that you can choose if you want to play

7 - switch a card with the oponent

Q - peek at any card again (yours or the oponnent's)

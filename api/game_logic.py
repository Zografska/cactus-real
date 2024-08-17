def pick_from_deck(deck, n=1):
    if n == 1:
        return [deck[0], deck[1:]]
    return [deck[:n], deck[n:]]

def switch_card(cards, new_card, position):
    temporary = cards[position]
    cards[position] = new_card
    return [cards, temporary]

def get_card_value(card: str):
    if(card == ""):
        return 0
    
    type = card[0]
    number = int(card[1:])
    if(number == 13):
        return 50 if type == "T" or type == "P" else 0
    return number

def get_player_score(cards: []):
    score = 0
    for card in cards:
        score += get_card_value(card)
    return score

def put_card_on_throw_pile(deck: [], throw_pile: [], cards, card_index: int):
    card = cards[card_index]
    card_number = int(card[1:])
    last_deck_value = deck[-1]
    last_deck_number = int(last_deck_value[1:])
    throw_pile.append(card)
    success = False
    if card_number == last_deck_number:
        cards[card_index] = ""
        success = True
    else: 
        [picked_up, deck] = pick_from_deck(deck, 1)
        cards[card_index] = picked_up
    
    return [deck, throw_pile, cards, success]
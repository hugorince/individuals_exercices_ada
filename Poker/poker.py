import random
cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'V', 'D', 'R', 'A']

cards_all = []


def create_colors(deck):
    pique = []
    carreaux = []
    coeur = []
    trefle = []
    for card in deck:
        card_pique = card + '♠︎'
        pique.append(card_pique)
        card_carreau = card + '♢'
        carreaux.append(card_carreau)
        card_coeur = card + '♡'
        coeur.append(card_coeur)
        card_trefle = card + '♣︎'
        trefle.append(card_trefle)
    for card in coeur:
        cards_all.append(card)
    for card in pique:
        cards_all.append(card)
    for card in carreaux:
        cards_all.append(card)
    for card in trefle:
        cards_all.append(card)


def create_deck(deck):
    new_deck = []
    for card in deck:
        new_deck.append(card)
    random.shuffle(new_deck)
    return new_deck


def deal(n, dek):
    hand = []
    for i in range(n):
        hand.append(dek[i])
        dek.remove(dek[i])
        print('coucou')
    return hand


create_colors(cards)

new_deck = create_deck(cards_all)

hand1 = deal(2, new_deck)
hand2 = deal(2, new_deck)

print(hand1)
print(hand2)
print(new_deck)


def flop(dek):
    i = 0
    flopped = []
    dek.remove(dek[0])
    for card in dek:
        while i < 3:
            flopped.append(dek[i])
            dek.remove(dek[i])
            i += 1
    dek.remove(dek[0])
    flopped.append(dek[1])
    dek.remove(dek[0])
    flopped.append(dek[1])
    return flopped


cards_flop = flop(new_deck)
print(cards_flop)


class Carte:
    def __init__(self, color, num, value):
        self.color = color
        self.num = num
        self.value = value


p2 = Carte("pique", 2, '2')
p3 = Carte("pique", 3, '3')
p4 = Carte("pique", 4, '4')
p5 = Carte("pique", 5, '5')
p6 = Carte("pique", 6, '6')
p7 = Carte("pique", 7, '7')
p8 = Carte("pique", 8, '8')
p9 = Carte("pique", 9, '9')
p10 = Carte("pique", 10, '10')
pV = Carte("pique", 11, 'V')
pD = Carte("pique", 12, 'D')
pR = Carte("pique", 13, 'R')
pA = Carte("pique", 14, 'A')

c2 = Carte("coeur", 2, '2')
c3 = Carte("coeur", 3, '3')
c4 = Carte("coeur", 4, '4')
c5 = Carte("coeur", 5, '5')
c6 = Carte("coeur", 6, '6')
c7 = Carte("coeur", 7, '7')
c8 = Carte("coeur", 8, '8')
c9 = Carte("coeur", 9, '9')
c10 = Carte("coeur", 10, '10')
cV = Carte("coeur", 11, 'V')
cD = Carte("coeur", 12, 'D')
cR = Carte("coeur", 13, 'R')
cA = Carte("coeur", 14, 'A')

k2 = Carte("carreau", 2, '2')
k3 = Carte("carreau", 3, '3')
k4 = Carte("carreau", 4, '4')
k5 = Carte("carreau", 5, '5')
k6 = Carte("carreau", 6, '6')
k7 = Carte("carreau", 7, '7')
k8 = Carte("carreau", 8, '8')
k9 = Carte("carreau", 9, '9')
k10 = Carte("carreau", 10, '10')
kV = Carte("carreau", 11, 'V')
kD = Carte("carreau", 12, 'D')
kR = Carte("carreau", 13, 'R')
kA = Carte("carreau", 14, 'A')

t2 = Carte("trefle", 2, '2')
t3 = Carte("trefle", 3, '3')
t4 = Carte("trefle", 4, '4')
t5 = Carte("trefle", 5, '5')
t6 = Carte("trefle", 6, '6')
t7 = Carte("trefle", 7, '7')
t8 = Carte("trefle", 8, '8')
t9 = Carte("trefle", 9, '9')
t10 = Carte("trefle", 10, '10')
tV = Carte("trefle", 11, 'V')
tD = Carte("trefle", 12, 'D')
tR = Carte("trefle", 13, 'R')
tA = Carte("trefle", 14, 'A')

cards_objects = [p2, p3, p4, p5, p6, p7, p8, p9, p10, pV, pD, pR, pA, c2, c3, c4, c5, c6, c7, c8, c9, c10,
                 cV, cD, cR, cA, k2, k3, k4, k5, k6, k7, k8, k9, k10, kV, kD, kR, kA, t2, t3, t4, t5, t6, t7, t8, t9, t10]


deck_from_objects = create_deck(cards_objects)

hand_obj1 = deal(2, deck_from_objects)
hand_obj2 = deal(2, deck_from_objects)
flop_obj = flop(deck_from_objects)
print(flop_obj)


def showdown(hand, flop):
    total = []
    pique = []
    coeur = []
    carreau = []
    trefle = []

    print('looking for corrsepondances')
    for card in hand:
        total.append(card)
    for card in flop:
        total.append(card)
    total.sort(key=lambda x: x.num)

    for card in total:
        if card.color == 'trefle':
            trefle.append(card)
        elif card.color == 'coeur':
            coeur.append(card)
        elif card.color == 'carreau':
            carreau.append(card)
        elif card.color == 'pique':
            pique.append(card)

    if len(pique) > 4 or len(coeur) > 4 or len(carreau) > 4 or len(trefle) > 4:
        print('color!')

    for card in total:
        if total.count(card.num) == 2:
            print('one pair')
        if total.count(card.num) == 3:
            print('brelan')
        if total.count(card.num) == 4:
            print('carre')


showdown(hand_obj1, flop_obj)

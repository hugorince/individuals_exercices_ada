import random
from random import randrange
print('coucou')


def grid(N):
    grid = []
    for i in range(N):
        grid.append('0')
    return grid


def mines(G, K):
    count = 0
    for i in range(K):
        new_k = randrange(len(G))
        if (G[new_k] == '0'):
            G[new_k] = 'k'
            count += 1
        else:
            mines(G, (K - count))

    return G


test_grid = mines(grid(4), 2)


def check_case(index, grille):
    if (grille[index] == '0'):
        print('plouf')
    if (grille[index] == 'T'):
        print('already played')
    else:
        print('touché')
        grille[index] = 'T'
    return grille


coup1 = check_case(1, test_grid)
coup2 = check_case(2, test_grid)

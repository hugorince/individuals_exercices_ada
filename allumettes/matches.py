total_alllumetes = 50


def retirerX(x):
    global total_alllumetes
    total_alllumetes -= x
    return total_alllumetes


def gameplay():
    nombredejoueur = input(" combien de joueur: ")
    nombredejoueurint = int(nombredejoueur)
    global total_alllumetes
    joueur = "joueur"
    turn = 0
    while total_alllumetes > 0:
        turn += 1
        joueur = "joueur" + str(turn)
        if turn > nombredejoueurint:
            turn = 1
            joueur = "joueur" + str(turn)
        combien_retirer = input(
            joueur + " combien d'allumettes souhaitez vous retirer entre 1 et 6: ")
        if int(combien_retirer) > 6 or int(combien_retirer) < 0:
            combien_retirer = input(
                joueur + " combien d'allumettes souhaitez vous retirer entre 1 et 6: ")
        retirerX(int(combien_retirer))
        print(total_alllumetes)

    if total_alllumetes == 0:
        print("gg" + joueur)


gameplay()

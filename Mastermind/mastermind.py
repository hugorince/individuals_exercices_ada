import random
list = ['red', 'yellow', 'blue', 'purple']
list2 = ['blue', 'blue', 'yellow', 'green']
listAll = ['red', 'blue', 'yellow', 'purple',
           'green', 'orange', 'brown', 'pink']


def checkIfCorrectAmount(arr):
    if (len(arr) == 4):
        return True


def checkIfIsInList(arr):
    if arr and all(elem in ('red', 'blue', 'yellow', 'purple', 'green', 'orange', 'brown', 'pink') for elem in arr):
        print('correct colors')
        return True


def elementsCheck(arr):
    if checkIfCorrectAmount(arr) == True and checkIfIsInList(arr) == True:
        print('you can play')
        return True


elementsCheck(list)


def win(arr, arr2):
    if elementsCheck(arr) == True and arr == arr2:
        print('you Won')
        return True
    else:
        print('try again')
        return False


win(list2, list2)


def continueOrStop(arr, arr2):
    if win(arr, arr2) == True:
        print('Bravo!')
        return True
    else:
        print('Try Again')
        return False


checkIfIsInList(list)
checkIfIsInList(['blue', 'blue', 'blue', 'blue'])

continueOrStop(list2, list2)


def randomGuess(arr):
    print(random.choices(arr, k=4))
    return random.choices(arr, k=4)


randomGuess(listAll)

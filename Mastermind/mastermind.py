import random
from tkinter import *

root = Tk()


list1 = ['green', 'yellow', 'yellow', 'purple']
list2 = ['blue', 'blue', 'yellow', 'green']
listAll = ['Red', 'Blue', 'Yellow', 'Purple',
           'Green', 'Orange', 'Brown', 'Pink']


def randomGuess(arr):
    return random.choices(arr, k=4)


def checkIfCorrectAmount(arr):
    if (len(arr) == 4):
        return True


def checkIfIsInList(arr):
    if arr and all(elem in ('red', 'blue', 'yellow', 'purple', 'green', 'orange', 'brown', 'pink') for elem in arr):
        return True


def elementsCheck(arr):
    if checkIfCorrectAmount(arr) == True and checkIfIsInList(arr) == True:
        return True

# elementsCheck(list1)


def win(arr, arr2):
    if arr == arr2:
        return True

# win(list2, list2)


def rightSpot(arr, arr2):
    # print(sum(a == b for a, b in zip(arr, arr2)))
    return sum(a == b for a, b in zip(arr, arr2))


def wrongSpot(arr, arr2):
    # print(len((list(set(arr).intersection(arr2)))) -
    #       (sum(a == b for a, b in zip(arr, arr2))))
    return (len((list(set(arr).intersection(arr2)))) -
            sum(a == b for a, b in zip(arr, arr2)))


def answer(arr, arr2):
    return [rightSpot(arr, arr2), wrongSpot(arr, arr2)]
    # return rightSpot(arr, arr2), wrongSpot(arr, arr2)


guess = []


def continueOrStop(arr, arr2):
    if win(arr, arr2) == True:
        print('Bravo!')
        resultLabel = Label(root, text='You WOn!!')
        resultLabel.pack()

    else:
        # print('Try Again')
        resultLabel = Label(root, text=answer(arr, arr2))
        resultLabel.pack()
        guess.clear()


# checkIfIsInList(list1)
# checkIfIsInList(['blue', 'blue', 'blue', 'blue'])
# continueOrStop(list2, list2)
# rightSpot(list2, list1)
# wrongSpot(list1, list2)
# answer(list1, list2)

# continueOrStop(list1, list2)

list3 = randomGuess(listAll)
print(list3)

myLabel = Label(root, text="Welcome to MASTERMIND")
myLabel.pack()


def chooseColorRed():
    if (len(guess) < 4):
        guess.append('Red')
        print(guess)
        guessLabel = Label(root, text=guess)
        guessLabel.pack()
    else:
        return False


def chooseColorYellow():
    if (len(guess) < 4):
        guess.append('Yellow')
        guessLabel = Label(root, text=guess)
        guessLabel.pack()
    else:
        return False


def chooseColorBlue():
    if (len(guess) < 4):
        guess.append('Blue')
        guessLabel = Label(root, text=guess)
        guessLabel.pack()
    else:
        return False


def chooseColorPink():
    if (len(guess) < 4):
        guess.append('Pink')
        print(guess)
        guessLabel = Label(root, text=guess)
        guessLabel.pack()
    else:
        return False


def chooseColorBrown():
    if (len(guess) < 4):
        guess.append('Brown')
        print(guess)
        guessLabel = Label(root, text=guess)
        guessLabel.pack()
    else:
        return False


def chooseColorOrange():
    if (len(guess) < 4):
        guess.append('Orange')
        print(guess)
        guessLabel = Label(root, text=guess)
        guessLabel.pack()
    else:
        return False


def chooseColorGreen():
    if (len(guess) < 4):
        guess.append('Green')
        print(guess)
        guessLabel = Label(root, text=guess)
        guessLabel.pack()
    else:
        return False


def chooseColorPurple():
    if (len(guess) < 4):
        guess.append('Purple')
        print(guess)
        guessLabel = Label(root, text=guess)
        guessLabel.pack()
    else:
        return False


def buttonClear():
    guess.clear()
    guessLabel = Label(root, text=guess)
    guessLabel.pack()


def tryFunc():
    hintLabel = Label(root, text=continueOrStop(guess, list3))
    hintLabel.pack()


buttonRed = Button(root, text="Red", command=chooseColorRed)
buttonYellow = Button(root, text="Yellow", command=chooseColorYellow)
buttonBlue = Button(root, text="Blue", command=chooseColorBlue)
buttonPink = Button(root, text="Pink", command=chooseColorPink)
buttonBrown = Button(root, text="Brown", command=chooseColorBrown)
buttonPurple = Button(root, text="Purple", command=chooseColorPurple)
buttonOrange = Button(root, text="Orange", command=chooseColorOrange)
buttonGreen = Button(root, text="Green", command=chooseColorGreen)
buttonCleared = Button(root, text="CLEAR", command=buttonClear)
buttonTry = Button(root, text="Try", command=tryFunc)

buttonBlue.pack()
buttonYellow.pack()
buttonRed.pack()
buttonPink.pack()
buttonBrown.pack()
buttonPurple.pack()
buttonOrange.pack()
buttonGreen.pack()
buttonCleared.pack()
buttonTry.pack()

# guessLabel = Label(root, text=guess)
# guessLabel.pack()


root.mainloop()

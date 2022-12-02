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
        resultLabel.grid(row=7, column=4)

    else:
        # print('Try Again')
        resultLabel = Label(root, text=answer(arr, arr2))
        resultLabel.grid(row=7, column=4)
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

myLabel = Label(root, text="MASTERMIND")
myLabel.grid(row=0, column=5)


def chooseColorRed():
    if (len(guess) < 4):
        guess.append('Red')
        print(guess)
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3, column=4)
    else:
        return False


def chooseColorYellow():
    if (len(guess) < 4):
        guess.append('Yellow')
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3, column=4)
    else:
        return False


def chooseColorBlue():
    if (len(guess) < 4):
        guess.append('Blue')
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3, column=4)
    else:
        return False


def chooseColorPink():
    if (len(guess) < 4):
        guess.append('Pink')
        print(guess)
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3, column=4)
    else:
        return False


def chooseColorBrown():
    if (len(guess) < 4):
        guess.append('Brown')
        print(guess)
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3, column=4)
    else:
        return False


def chooseColorOrange():
    if (len(guess) < 4):
        guess.append('Orange')
        print(guess)
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3, column=4)
    else:
        return False


def chooseColorGreen():
    if (len(guess) < 4):
        guess.append('Green')
        print(guess)
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3, column=4)
    else:
        return False


def chooseColorPurple():
    if (len(guess) < 4):
        guess.append('Purple')
        print(guess)
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3, column=4)
    else:
        return False


def buttonClear():
    guess.clear()


def tryFunc():
    hintLabel = Label(root, text=continueOrStop(guess, list3))
    hintLabel.grid(row=7, column=0)


buttonRed = Button(root, text="Red", command=chooseColorRed, fg="red")
buttonYellow = Button(root, text="Yellow",
                      command=chooseColorYellow, fg="yellow")
buttonBlue = Button(root, text="Blue", command=chooseColorBlue, fg="blue")
buttonPink = Button(root, text="Pink", command=chooseColorPink, fg="pink")
buttonBrown = Button(root, text="Brown", command=chooseColorBrown, fg="brown")
buttonPurple = Button(root, text="Purple",
                      command=chooseColorPurple, fg="purple")
buttonOrange = Button(root, text="Orange",
                      command=chooseColorOrange, fg="orange")
buttonGreen = Button(root, text="Green", command=chooseColorGreen, fg="green")
buttonCleared = Button(root, text="CLEAR", command=buttonClear)
buttonTry = Button(root, text="Try", command=tryFunc)

buttonBlue.grid(row=1, column=1)
buttonYellow.grid(row=1, column=2)
buttonRed.grid(row=1, column=3)
buttonPink.grid(row=1, column=4)
buttonBrown.grid(row=1, column=5)
buttonPurple.grid(row=1, column=6)
buttonOrange.grid(row=1, column=7)
buttonGreen.grid(row=1, column=8)
buttonCleared.grid(row=2, column=4)
buttonTry.grid(row=2, column=5)

# guessLabel = Label(root, text=guess)
# guessLabel.pack()


root.mainloop()

import random
from tkinter import *

root = Tk()


list1 = ['yellow', 'blue', 'brown', 'purple']
list2 = ['purple', 'purple', 'purple', 'green']
listAll = ['Red', 'Blue', 'Yellow', 'Purple',
           'Green', 'Orange', 'Brown', 'Pink']


def randomGuess(arr):
    return random.choices(arr, k=4)


def checkIfCorrectAmount(arr):
    if (len(arr) == 4):
        return True


def checkIfIsInList(arr):
    if arr and all(elem in listAll for elem in arr):
        return True


def elementsCheck(arr):
    if checkIfCorrectAmount(arr) and checkIfIsInList(arr):
        return True


def win(arr, arr2):
    return arr == arr2


def rightSpot(arr, arr2):
    # print(sum(a == b for a, b in zip(arr, arr2)))
    return sum(a == b for a, b in zip(arr, arr2))


def wrongSpot(arr, arr2):
    wrong = 0
    right = rightSpot(arr, arr2)
    for i in arr:
        for j in arr2:
            if i == j:
                wrong += 1
                arr2.remove(j)
                print('wrong =', wrong, 'j = ', j, 'i = ', i)
                break

    return (wrong - right)


print(wrongSpot(list1, list2))


def answer(arr, arr2):
    return [rightSpot(arr, arr2), wrongSpot(arr, arr2)]


guess = []
counter_list = []


def continueOrStop(arr, arr2):
    if win(arr, arr2):
        print('Bravo!')
        resultLabel = Label(root, text='You Won!!')
        resultLabel.grid(row=3 + len(counter_list), column=4)

    else:
        # print('Try Again')
        if len(counter_list) < 13:
            resultLabel = Label(root, text=answer(arr, arr2))
            resultLabel.grid(row=3 + len(counter_list), column=5)
            guess.clear()
        if len(counter_list) == 13:
            resultLabel = Label(root, text='Game Over!!')
            resultLabel.grid(row=3 + len(counter_list), column=5)


list3 = randomGuess(listAll)
print(list3)


def chooseColorRed():
    if (len(guess) < 4):
        guess.append('Red')
        print(guess)
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3 + len(counter_list), column=4)
    else:
        return False


def chooseColorYellow():
    if (len(guess) < 4):
        guess.append('Yellow')
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3 + len(counter_list), column=4)
    else:
        return False


def chooseColorBlue():
    if (len(guess) < 4):
        guess.append('Blue')
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3 + len(counter_list), column=4)
    else:
        return False


def chooseColorPink():
    if (len(guess) < 4):
        guess.append('Pink')
        print(guess)
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3 + len(counter_list), column=4)
    else:
        return False


def chooseColorBrown():
    if (len(guess) < 4):
        guess.append('Brown')
        print(guess)
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3 + len(counter_list), column=4)
    else:
        return False


def chooseColorOrange():
    if (len(guess) < 4):
        guess.append('Orange')
        print(guess)
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3 + len(counter_list), column=4)
    else:
        return False


def chooseColorGreen():
    if (len(guess) < 4):
        guess.append('Green')
        print(guess)
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3 + len(counter_list), column=4)
    else:
        return False


def chooseColorPurple():
    if (len(guess) < 4):
        guess.append('Purple')
        print(guess)
        if len(guess) == 4:
            guessLabel = Label(root, text=guess)
            guessLabel.grid(row=3 + len(counter_list), column=4)
    else:
        return False


def buttonClear():
    guess.clear()


def tryFunc():
    if checkIfCorrectAmount(guess):
        hintLabel = Label(root, text=continueOrStop(list3, guess))
        hintLabel.grid(row=7, column=0)
        counter_list.append('1')
        print('counter =', len(counter_list))


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

title = Label(root, text="MASTERMIND")
title.grid(row=0, column=5)

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

root.mainloop()

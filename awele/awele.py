class case:
    def __init__(self, count, letter):
        self.count = count
        self.letter = letter

    def show(self):
        print(self.letter, self.count)


def create_board():
    return {case(0, 'A'), case(0, 'B'), case(0, 'C'), case(0, 'D')}

def is_empty(board):
    for element in range(len(board)):
        element.count = 0
    return board

board = create_board()



def check_winner(board):
    lines = board + [list(col) for col in zip(*board)] + [[board[i][i] for i in range(3)]] + [[board[i][2-i] for i in range(3)]]

    if ['X', 'X', 'X'] in lines:
        return "X wins"
    elif ['O', 'O', 'O'] in lines:
        return "O wins"
    elif all(cell in ('X', 'O') for row in board for cell in row):
        return "Draw"
    else:
        return "game is not finished."

board = [
    ['X', 'O', 'O'], 
    ['X', 'X', 'O'],
    ['O', 'O', 'X']
    ]

print(check_winner(board))
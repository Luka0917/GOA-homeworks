# 8kyu

# https://www.codewars.com/kata/59126992f9f87fd31600009b

def whose_move(last_player, win):
    if win: 
        return last_player
    if last_player == 'black' and win == False:
        return 'white'
    return 'black'

# https://www.codewars.com/kata/5951d30ce99cf2467e000013

def pythagorean_triple(integers):
    integers.sort()
    return integers[0] ** 2 + integers[1] ** 2 == integers[2] ** 2

# https://www.codewars.com/kata/59f9796cffe75f9299000025

# const a = []
# 7kyu

# https://www.codewars.com/kata/57e141ad8a8b8d4d150004f6/train/python

import random

def r_p_s_cheat(choice):
    win = {
        'rock': 'paper',
        'paper': 'scissors',
        'scissors': 'rock'
    }
    lose = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    }
    if random.random() < 0.9:
        return win[choice]
    return lose[choice]

# https://www.codewars.com/kata/511f11d355fe575d2c000001/solutions/python

def two_oldest_ages(ages):
    return sorted(ages)[-2:]

# https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d

def halving_sum(n): 
    result = 0
    while n > 0:
        result += n
        n //= 2
    return result
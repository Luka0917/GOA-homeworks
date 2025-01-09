# 1

# https://www.codewars.com/kata/5545f109004975ea66000086

def is_divisible(n,x,y):
    if n % x == 0 and n % y == 0:
        return True
    else:
        return False
    
# 2

# https://codewars.com/kata/5a2be17aee1aaefe2a000151

def array_plus_array(arr1,arr2):
    return sum(arr1) + sum(arr2)

# 3

# https://www.codewars.com/kata/5aa736a455f906981800360d/train/python

def feast(beast, dish):
    return beast[0] + beast[-1] == dish[0] + dish[-1]

# 4

# https://www.codewars.com/kata/5302d846be2a9189af0001e4

def say_hello(name, city, state):
    name1 = ""
    for i in name:
        name1 += i + " "
    name1 = name1[:-1]
    return f"Hello, {name1}! Welcome to {city}, {state}!"

# 5

# https://www.codewars.com/kata/5bb904724c47249b10000131

def points(games):
    score = 0
    for i in games:
        i = i.split(":")
        if i[0] > i[1]:
            score += 3
        elif i[0] == i[1]:
            score += 1
    return score
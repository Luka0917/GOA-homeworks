# 1

# https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/python

def digitize(n):
    num = []
    for number in str(n):
        num = [int(number)] + num
    return num

# 2

# https://www.codewars.com/kata/53af2b8861023f1d88000832/train/python

def are_you_playing_banjo(name):
    if (name[0]) == "R" or (name[0]) == "r":
        return name + " plays banjo"
    else:
        return name + " does not play banjo"
    
# 3

# https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/python

def rps(p1, p2):
    if p1 == p2:
        return "Draw!"
    elif p1 == "scissors" and p2 == "paper":
        return "Player 1 won!"
    elif p1 == "paper" and p2 == "rock":
        return "Player 1 won!"
    elif p1 == "rock" and p2 == "scissors":
        return "Player 1 won!"
    else:
        return "Player 2 won!"
    
# 4

# https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/python

def quarter_of(month):
    return (month + 2) // 3

# 5

# https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/python

def count_sheep(n):
    final_result = ""
    for num in range(1, 1 + n):
        final_result += str(num) + " sheep..."
    return final_result

# 6

# https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/python

def greet(name, owner):
    if name == owner:
        return "Hello boss"
    else:
        return "Hello guest"
    
# 7

# https://www.codewars.com/kata/568d0dd208ee69389d000016/train/python

def rental_car_cost(d):
    if d >= 3 and d <= 6:
        return (d * 40) - 20
    elif d >= 7:
        return (d * 40) - 50
    else:
        d < 3
        return d * 40
    
# 8

# https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/python

def remove_exclamation_marks(s):
    text = ""
    for word in s:
        if word != "!":
            text += word
    return text
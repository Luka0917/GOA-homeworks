# https://www.codewars.com/kata/57cc981a58da9e302a000214/train/python

def small_enough(array, limit):
    for i in array:
        if i > limit:
            return False
    return True

# https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/python

def declare_winner(fighter1, fighter2, first_attacker):
    if first_attacker == fighter1.name:
        attacker = fighter1
        defender = fighter2
    else:
        attacker = fighter2
        defender = fighter1
    while True:
        defender.health -= attacker.damage_per_attack
        if defender.health <= 0:
            return attacker.name
        attacker, defender = defender, attacker

# https://www.codewars.com/kata/5aba780a6a176b029800041c/train/python

def max_multiple(divisor, bound):
    return (bound // divisor) * divisor

# https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/python

def stock_list(stocklist, categories):
    if not stocklist or not categories: return ""
    result = []
    for i in categories:
        total = 0
        for j in stocklist:
            code, quantity = j.split()
            if code[0] == i:
                total += int(quantity)
        result.append(f"({i} : {total})")
    return " - ".join(result)

# https://www.codewars.com/kata/52761ee4cffbc69732000738/train/python

def good_vs_evil(good, evil):
    good_worth = [1, 2, 3, 3, 4, 10]
    evil_worth = [1, 2, 2, 2, 3, 5, 10]
    good_total = sum(int(x) * y for x, y in zip(good.split(), good_worth))
    evil_total = sum(int(x) * y for x, y in zip(evil.split(), evil_worth))
    if good_total > evil_total:
        return "Battle Result: Good triumphs over Evil"
    elif evil_total > good_total:
        return "Battle Result: Evil eradicates all trace of Good"
    else:
        return "Battle Result: No victor on this battle field"
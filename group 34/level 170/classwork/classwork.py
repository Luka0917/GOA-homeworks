# 6kyu

# https://www.codewars.com/kata/545cedaa9943f7fe7b000048

def is_pangram(st):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    st = st.lower()
    for char in alphabet:
        if char not in st:
            return False
    return True

# 8kyu

# https://www.codewars.com/kata/5748a883eb737cab000022a6

def cannons_ready(gunners):
    for i in gunners.values():
        if i != 'aye':
            return 'Shiver me timbers!'
    return 'Fire!'

# https://www.codewars.com/kata/574c5075d27783851800169e

def animals(heads, legs):
    if heads < 0 or legs < 0:
        return "No solutions"
    if heads == 0 and legs == 0:
        return (0, 0)
    
    cows = (legs - 2 * heads) / 2
    chickens = heads - cows

    if cows < 0 or chickens < 0 or cows % 1 != 0 or chickens % 1 != 0:
        return "No solutions"
    return (int(chickens), int(cows))
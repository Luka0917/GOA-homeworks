# 8kyu

# https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

def multi_table(number):
    result = ""
    for i in range(1, 11):
        if i > 1:
            result += '\n'
        result += f'{i} * {number} = {i * number}'
    return result

# 7kyu

# https://www.codewars.com/kata/5acbc3b3481ebb23a400007d

def is_flush(cards):
    suit = cards[0][-1]
    return all(card[-1] == suit for card in cards)

# 6kyu

# https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

def wave(people):
    result = []
    for i in range(len(people)):
        if people[i] != " ":
            word = people[0:i] + people[i].upper() + people[i + 1:]
            result.append(word)
    return result
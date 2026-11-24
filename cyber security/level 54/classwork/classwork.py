# https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/python

def expanded_form(num):
    num = str(num)
    result = []
    for i in range(len(num)):
        if num[i] != "0":
            result.append(num[i] + ("0" * (len(num) - i - 1)))
    return " + ".join(result)

# https://www.codewars.com/kata/51b6249c4612257ac0000005/train/python

def solution(roman: str) -> int:
    values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    result = 0
    for i in range(len(roman)):
        if i + 1 < len(roman) and values[roman[i]] < values[roman[i + 1]]:
            result -= values[roman[i]]
        else:
            result += values[roman[i]]
    return result
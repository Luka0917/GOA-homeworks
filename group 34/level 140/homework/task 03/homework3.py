# 7kyu

# https://www.codewars.com/kata/54ff3102c1bad923760001f3

def get_count(sentence):
    result = []
    result.append(sentence.count("a"))
    result.append(sentence.count("e"))
    result.append(sentence.count("i"))
    result.append(sentence.count("o"))
    result.append(sentence.count("u"))
    return sum(result)

# https://www.codewars.com/kata/5aca48db188ab3558e0030fa

def calc_type(a, b, res):
    if a + b == res:
        return "addition"
    elif a - b == res:
        return "subtraction"
    elif a * b == res:
        return "multiplication"
    elif a / b == res:
        return "division"
    
# https://www.codewars.com/kata/567bed99ee3451292c000025

def is_vowel(s): 
    return s.lower() in {'a', 'e', 'i', 'o', 'u'}

# 6kyu

# https://www.codewars.com/kata/525f50e3b73515a6db000b83

def create_phone_number(n):
    return f'({n[0]}{n[1]}{n[2]}) {n[3]}{n[4]}{n[5]}-{n[6]}{n[7]}{n[8]}{n[9]}'
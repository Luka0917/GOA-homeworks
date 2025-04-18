# 8kyu

# https://www.codewars.com/kata/5810085c533d69f4980001cf

def calculator(x, y, op):
    if (op == '+' or op == '-' or op == '*' or op == '/') and type(x) == int and type(y) == int:
        if op == '+':
            return x + y
        elif op == '-':
            return x - y
        elif op == '*':
            return x * y
        else:
            return x / y
    return 'unknown value'

# https://www.codewars.com/kata/566dc566f6ea9a14b500007b

def kata_13_december(lst):
    return [x for x in lst if x % 2 != 0]

# https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed

def replace_exclamation(st):
    vowels = 'aeiouAEIOU'
    result = ''
    for i in range(len(st)):
        if st[i] in vowels:
            result += '!'
        else:
            result += st[i]
    return result
# 8kyu

# https://www.codewars.com/kata/56f6ad906b88de513f000d96

def bonus_time(salary, bonus):
    if bonus:
        total = salary * 10
    else:
        total = salary
    return f'${total}'

# https://www.codewars.com/kata/56b1f01c247c01db92000076

def double_char(s):
    new_s = ""
    for i in s:
        new_s += i * 2
    return new_s

# 7kyu

# https://www.codewars.com/kata/559590633066759614000063

def min_max(lst):
    min = lst[0]
    max = lst[0]
    for i in lst:
        if i < min:
            min = i
        if i > max:
            max = i
    return [min, max]

# https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

def number(lines):
    result = [] 
    for index in range(len(lines)):
        word = str(index + 1) + ": " + lines[index]
        result.append(word)
    return result

# https://www.codewars.com/kata/5412509bd436bd33920011bc

def maskify(cc):
    if len(cc) <= 4:
        return cc
    return "#" * (len(cc) - 4) + cc[-4:]
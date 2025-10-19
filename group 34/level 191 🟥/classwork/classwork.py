# 7kyu

# https://www.codewars.com/kata/57d2ba8095497e484e00002e/train/python

def borrow(s):
    s = s.replace(' ', '')
    s = s.lower()
    result = ''
    for i in s: 
        if i.isalpha(): 
            result += i
    return result

# https://www.codewars.com/kata/56b1eb19247c01493a000065/train/python

def unique_sum(lst):
    if len(lst) == 0:
        return None
    result = []
    for i in lst:
        if i not in result:
            result.append(i)
    return sum(result)
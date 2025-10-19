# 7kyu

# https://www.codewars.com/kata/56b1eb19247c01493a000065/train/python

def unique_sum(lst):
    if len(lst) == 0:
        return None
    result = []
    for i in lst:
        if i not in result:
            result.append(i)
    return sum(result)

# https://www.codewars.com/kata/57f7796697d62fc93d0001b8/train/python

def trouble(x, t):
    i = 0
    while i < len(x) - 1:
        if x[i] + x[i + 1] == t:
            x.pop(i + 1)
        else:
            i += 1
    return x
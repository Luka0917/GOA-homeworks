# 7kyu

# https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/python

def capitalize(s, ind):
    ind_set = set(ind)
    result = ''
    for i in range(len(s)):
        if i in ind_set:
            result += s[i].upper()
        else:
            result += s[i]
    return result
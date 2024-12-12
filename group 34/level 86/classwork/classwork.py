# 6kyu

# 1

#  https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python

def find_it(seq):
    for num in seq:
        if seq.count(num) % 2 != 0:
            return num

# 2

#  https://www.codewars.com/kata/523f5d21c841566fde000009

def array_diff(a, b):
    result = []
    for i in a:
        if i not in b:
            result.append(i)
    return result 
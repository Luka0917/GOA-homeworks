# 8kyu

# https://www.codewars.com/kata/576bb71bbbcf0951d5000044

def count_positives_sum_negatives(arr):
    if not arr:
        return []
    positive = 0
    negative = 0
    for i in arr:
        if i > 0:
            positive += 1
        elif i < 0:
            negative += i
    return [positive, negative]

# 7kyu

# https://www.codewars.com/kata/5356ad2cbb858025d800111d

def cap_me(arr):
    return [i.capitalize() for i in arr]
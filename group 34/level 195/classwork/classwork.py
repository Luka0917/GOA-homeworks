# 7kyu

# https://www.codewars.com/kata/5f70e4cce10f9e0001c8995a/train/python

def solution(stones):
    result = 0
    for i in range(1, len(stones)):
        if stones[i] == stones[i - 1]:
            result += 1
    return result

# https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/python

def sum_two_smallest_numbers(numbers):
    min1 = min(numbers)
    numbers.remove(min1)
    min2 = min(numbers)
    result = min1 + min2
    return result
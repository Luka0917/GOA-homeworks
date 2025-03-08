# 7kyu

# https://www.codewars.com/kata/58fd96a59a9f65c2e900008d

def smallest_integer(matrix):
    numbers = set(num for row in matrix for num in row)
    n = 0
    while n in numbers:
        n += 1
    return n
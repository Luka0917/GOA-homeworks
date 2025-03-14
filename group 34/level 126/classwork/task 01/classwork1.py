# 7kyu

# https://www.codewars.com/kata/589422431a88082ea600002a

def digit_degree(n):
    degree = 0
    while n >= 10:
        n = sum(int(digit) for digit in str(n))
        degree += 1
    return degree
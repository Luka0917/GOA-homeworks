# 6kyu

# https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

def persistence(n):
    count = 0
    while n >= 10:
        product = 1
        for digit in str(n):
            product *= int(digit)
        n = product
        count += 1
    return count
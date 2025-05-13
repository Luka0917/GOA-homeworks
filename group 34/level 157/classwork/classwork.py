# 6kyu

# https://www.codewars.com/kata/5626b561280a42ecc50000d1

def sum_dig_pow(a, b):
    result = []
    for i in range(a, b + 1):
        total = 0
        position = 1
        for x in str(i):
            total += int(x) ** position
            position += 1
        if total == i:
            result.append(i)
    return result
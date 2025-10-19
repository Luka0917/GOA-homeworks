# 7kyu

# https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/python

def divisors(integer):
    result = []
    for i in range(2, integer):
        if integer % i == 0:
            result.append(i)
    if not result:
        return f"{integer} is prime"
    return result

# https://www.codewars.com/kata/55b1e5c4cbe09e46b3000034/train/python

def is_pronic(n):
    k = 0
    while k * (k + 1) <= n:
        if k * (k + 1) == n:
            return True
        k += 1
    return False
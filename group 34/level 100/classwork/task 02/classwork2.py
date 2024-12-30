# 6kyu

# 1

# https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

def solution(s):
    result = []
    for i in range(0, len(s), 2):
        pair = s[i:i+2]
        if len(pair) == 1:
            pair += '_'
        result.append(pair)
    return result

# 2

# https://www.codewars.com/kata/5266876b8f4bf2da9b000362

def likes(names):
    ln = len(names) 
    
    if ln == 0:
        return "no one likes this"
    elif ln == 1:
        return names[0] + " likes this"
    elif ln == 2:
        return names[0] + " and " + names[1] + " like this"
    elif ln == 3:
        return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    else:
        return names[0] + ", " + names[1] + " and " + str(ln - 2) + " others like this"
    
# 3

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

# 4

# https://www.codewars.com/kata/541c8630095125aba6000c00

def digital_root(n):
    if n == 0:
        return 0
    else:
        return 1 + (n - 1) % 9
# 7kyu

# https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/python

def solve(a, b):
    re_a = []
    for i in a:
        if i not in b:
            re_a.append(i)
    re_b = []
    for i in b:
        if i not in a:
            re_b.append(i)
    result = re_a + re_b
    return ''.join(result)

# https://www.codewars.com/kata/5a2d70a6f28b821ab4000004/train/python

def largest_sum(s):
    s = s.split('0')
    max_sum = 0
    for i in s:
        digit_sum = sum(int(x) for x in i)
        if digit_sum > max_sum:
            max_sum = digit_sum
    return max_sum

# https://www.codewars.com/kata/590f5b4a7bbb3e246000007d/train/python

def comes_after(st, l):
    l = l.lower()
    result = ""
    for i in range(len(st) - 1):
        current_char = st[i]
        next_char = st[i + 1]
        if current_char.lower() == l and next_char.isalpha():
            result += next_char
    return result

# https://www.codewars.com/kata/565b9d6f8139573819000056/train/python

def decode(message):
    result = ""
    for i in message:
        if i.isalpha():
            decoded_char = chr(ord('a') + (25 - (ord(i) - ord('a'))))
            result += decoded_char
        else:
            result += i
    return result
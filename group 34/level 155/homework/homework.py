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
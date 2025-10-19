# 7kyu

# https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/python

def triangular(n):
    if n <= 0:
        return 0
    return n * (n + 1) // 2

# https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/python

def solve(arr):
    for i in arr:
        if -i not in arr:
            return i
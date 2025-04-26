# 5kyu

# https://www.codewars.com/kata/5a51717fa7ca4d133f001fdf/train/python

def pack_backpack(scores, weights, capacity):
    n = len(scores)
    dp = [0] * (capacity + 1)
    for i in range(n):
        for w in range(capacity, weights[i] - 1, -1):
            dp[w] = max(dp[w], dp[w - weights[i]] + scores[i])
    return dp[capacity]

# 6kyu

# https://www.codewars.com/kata/5a91e0793e9156ccb0003f6e

def matrixfy(st):
    if len(st) == 0:
        return "name must be at least one letter"
    n = 1
    while n * n < len(st):
        n += 1
    padded = st + "." * (n * n - len(st))
    matrix = []
    for i in range(0, len(padded), n):
        matrix.append(list(padded[i:i+n]))
    return matrix
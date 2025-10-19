# 7kyu

# https://www.codewars.com/kata/58acfe4ae0201e1708000075/train/python

def invite_more_women(arr):
    return sum(arr) > 0

# 6kyu

# https://www.codewars.com/kata/5495bfa82eced2146100002f/train/python

def interval_insert(myl: list[tuple[int, int]], interval: tuple[int, int]) -> list[tuple[int, int]]:
    res = []
    i = 0
    n = len(myl)
    left, right = interval
    while i < n and myl[i][1] < left - 0:
        res.append(myl[i])
        i += 1
    while i < n and myl[i][0] <= right:
        left = min(left, myl[i][0])
        right = max(right, myl[i][1])
        i += 1
    res.append((left, right))
    while i < n:
        res.append(myl[i])
        i += 1
    return res
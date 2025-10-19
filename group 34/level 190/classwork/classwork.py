# 7kyu

# https://www.codewars.com/kata/58b972cae826b960a300003e/train/python

def missing(nums, s):
    result = ''
    nums.sort()
    s_clean = s.replace(" ", "").lower()
    if any(i >= len(s_clean) for i in nums):
        return "No mission today"
    for i in nums:
        result += s_clean[i]
    return result
# 7kyu

# https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/python

def descending_order(num):
    nums = list(str(num))
    nums.sort()
    nums = nums[::-1]
    return int("".join(nums))

# https://www.codewars.com/kata/57a6633153ba33189e000074/train/python

def ordered_count(inp):
    seen = {}
    result = []
    for char in inp:
        if char in seen:
            seen[char] += 1
        else:
            seen[char] = 1
            result.append((char, 1))
    return [(char, seen[char]) for char, _ in result]

# https://www.codewars.com/kata/56541980fa08ab47a0000040/train/python

def printer_error(s):
    errors = sum(1 for char in s if char < 'a' or char > 'm')
    return f"{errors}/{len(s)}"
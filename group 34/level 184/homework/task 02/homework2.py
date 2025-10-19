# 6kyu

# https://www.codewars.com/kata/59f7597716049833200001eb/train/python

def solve(a, b):
    rot_map = {'0': '0', '1': '1', '6': '9', '8': '8', '9': '6'}
    count = 0
    for num in range(a, b):
        str_num = str(num)
        if any(d not in rot_map for d in str_num):
            continue
        rotated = ''.join(rot_map[d] for d in reversed(str_num))
        if rotated == str_num:
            count += 1
    return count

# https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/python

def find_even_index(arr):
    for i in range(len(arr)):
        if sum(arr[:i]) == sum(arr[i+1:]):
            return i
    return -1

# 7kyu

# https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/python

def binary_array_to_number(arr):
    return int(''.join(map(str, arr)), 2)

# https://www.codewars.com/kata/56541980fa08ab47a0000040/train/python

def printer_error(s):
    errors = sum(1 for char in s if char < 'a' or char > 'm')
    return f"{errors}/{len(s)}"
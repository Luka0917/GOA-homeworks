# https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/python

def find_uniq(arr):
    first = arr[0]
    second = arr[1]
    third = arr[2]
    if first == second:
        common = first
    elif first == third:
        common = first
    else:
        common = second
    for i in arr:
        if i != common:
            return i

# https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/python

def persistence(n):
    count = 0
    while n >= 10:
        product = 1
        for digit in str(n):
            product *= int(digit)
        n = product
        count += 1
    return count
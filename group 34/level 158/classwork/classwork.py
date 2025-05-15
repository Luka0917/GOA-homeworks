# 6kyu

# https://www.codewars.com/kata/585d7d5adb20cf33cb000235

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
# 1

# https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

def filter_list(l):
    new_list = []
    for element in l:
        if type(element) == int:
            new_list.append(element)
        
    return new_list

# 2

# https://www.codewars.com/kata/558fc85d8fd1938afb000014

def sum_two_smallest_numbers(numbers):
    min1 = min(numbers)
    numbers.remove(min1)
    min2 = min(numbers)
    result = min1 + min2
    
    return result

# 3

# https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

def solution(text, ending):
    return text.endswith(ending)

# 4

# https://www.codewars.com/kata/57f609022f4d534f05000024

def stray(arr):
    if arr[0] != arr[1]:
        if arr[0] == arr[2]:
            return arr[1]
        else:
            return arr[0]
    else:
        for num in arr:
            if num != arr[0]:
                return num

# 5

# https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c

def sort_by_length(arr):
    new_arr = sorted(arr, key=len)
    
    return new_arr
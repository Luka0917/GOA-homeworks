# 7kyu

# https://www.codewars.com/kata/5356ad2cbb858025d800111d

def cap_me(arr):
    return [i.capitalize() for i in arr]

# https://www.codewars.com/kata/582c81d982a0a65424000201

def arr_check(arr):
    return all(type(i) == list for i in arr)
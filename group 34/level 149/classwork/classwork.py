# 7kyu

# https://www.codewars.com/kata/5356ad2cbb858025d800111d

def cap_me(arr):
    return [i.capitalize() for i in arr]

# https://www.codewars.com/kata/582c81d982a0a65424000201

def arr_check(arr):
    return all(type(i) == list for i in arr)

# https://www.codewars.com/kata/56a921fa8c5167d8e7000053

def password(st):
    have_upper = False
    have_lower = False
    have_num = False
    for i in st:
        if len(st) >= 8:
            if i.isalpha() and i.isupper():
                have_upper = True
            if i.isalpha() and i.islower():
                have_lower = True 
            if i.isdigit():
                have_num = True
        else:
            return False
    return have_upper and have_lower and have_num
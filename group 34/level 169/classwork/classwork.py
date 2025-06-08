# 8kyu

# https://www.codewars.com/kata/55edaba99da3a9c84000003b

def divisible_by(numbers, divisor):
    result = []
    for num in numbers:
        if num % divisor == 0:
            result.append(num)
    return result

# 5kyu

# https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/python

def move_zeros(lst):
    no_zeros = []
    zeros = []
    for i in lst:
        if i != 0:
            no_zeros.append(i)
        else:
            zeros.append(i)
    return no_zeros + zeros

# 6kyu

# https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python

def is_pangram(st):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    st = st.lower()
    for char in alphabet:
        if char not in st:
            return False
    return True
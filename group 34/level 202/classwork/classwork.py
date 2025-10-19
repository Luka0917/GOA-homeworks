# 8kyu

# https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/python

def is_uppercase(inp):
    for i in inp:
        if i.islower():
            return False
    return True

# 7kyu

# https://www.codewars.com/kata/57be674b93687de78c0001d9/train/python

def largest_power(N):
    k = 0
    while 3 ** k < N:
        k += 1
    return k - 1

# https://www.codewars.com/kata/55c7f90ac8025ebee1000062/train/python

def sort_array(value):
    return "".join(sorted(value))
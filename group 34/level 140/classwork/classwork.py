# 8kyu

# https://www.codewars.com/kata/50ee6b0bdeab583673000025/train/python

a = "code"
b = "wa.rs"
name = a + b
print(name)

# https://www.codewars.com/kata/50654ddff44f800200000007

def solution(a, b):
    if len(a) > len(b):
        return b + a + b
    else:
        return a + b + a
    
# 7kyu

# https://www.codewars.com/kata/586f6741c66d18c22800010a

def sequence_sum(begin_number, end_number, step):
    if begin_number > end_number:
        return 0
    result = 0
    for num in range(begin_number, end_number + 1, step):
        result += num
    return result
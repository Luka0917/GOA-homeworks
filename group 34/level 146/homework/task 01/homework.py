# 8kyu

# https://www.codewars.com/kata/55acfc59c3c23d230f00006d/train/python

def get_ascii(ch):
    return ord(ch)

# https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/python

class Ball(object):
    def __init__(self, ball_type = 'regular'):
        self.ball_type = ball_type

# https://www.codewars.com/kata/5803956ddb07c5c74200144e/train/python

def dating_range(age):
    if age <= 14:
        min = int(age - 0.10 * age)
        max = int(age + 0.10 * age)
    else:
        min = age // 2 + 7
        max = 2 * (age - 7)
    return f'{min}-{max}'

# https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/python

def remove_every_other(my_list):
    result = []
    for i in range(len(my_list)):
        if i % 2 == 0:
            result.append(my_list[i])
    return result

# https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/python

def monkey_count(n):
    return [i for i in range(1, n+1)]

# 7kyu

# https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/python

def longest(a1, a2):
    return ''.join(sorted(set(a1 + a2)))

# https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/python

def reverse_letter(st):
    return ''.join([i for i in st if i.isalpha()])[::-1]

# https://www.codewars.com/kata/55de6173a8fbe814ee000061/train/python

def unused_digits(*numbers):
    used = set(str(x) for i in numbers for x in str(i))
    all_digits = set('0123456789')
    unused = sorted(all_digits - used)
    return ''.join(unused)
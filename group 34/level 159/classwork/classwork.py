# 6kyu

# https://www.codewars.com/kata/5208f99aee097e6552000148

def solution(s):
    result = ''
    for i in range(len(s)):
        if s[i].isupper():
            result += ' ' + s[i]
        else:
            result += s[i]
    return result

# https://www.codewars.com/kata/587731fda577b3d1b0001196

def camel_case(s):
    s = s.split()
    result = []
    for word in s:
        words = word.capitalize()
        result.append(words)
    return "".join(result)

# https://www.codewars.com/kata/57036f007fd72e3b77000023/train/python

class Solution:
    def main(*par):
        print('Hello World!')
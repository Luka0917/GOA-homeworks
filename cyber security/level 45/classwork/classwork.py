# https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/python

def clean_string(s):
    result = []
    for i in s:
        if i == "#":
            if result:
                result.pop()
        else:
             result.append(i)
    return "".join(result)

# https://www.codewars.com/kata/5511b2f550906349a70004e1/train/python

def last_digit(n1, n2):
    return pow(n1, n2, 10)
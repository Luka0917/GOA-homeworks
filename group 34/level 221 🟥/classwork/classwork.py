# 6kyu

# https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

def array_diff(a, b):
    result = []
    for i in a:
        if i not in b:
            result.append(i)
    return result 
# 7kyu

# https://www.codewars.com/kata/55147ff29cd40b43c600058b/train/python

def char_concat(word):
    if len(word) % 2 != 0:
        word = word[:len(word)//2] + word[len(word)//2 + 1:]
    result = []
    left = 0
    right = len(word) - 1
    count = 1
    while left < right:
        result.append(word[left] + word[right] + str(count))
        left += 1
        right -= 1
        count += 1
    return ''.join(result)

# https://www.codewars.com/kata/58fd96a59a9f65c2e900008d

def smallest_integer(matrix):
    numbers = set(num for row in matrix for num in row)
    n = 0
    while n in numbers:
        n += 1
    return n
# 7kyu

# https://www.codewars.com/kata/58a6841442fd72aeb4000080

def similarity(a, b):
    set_a = set(a)
    set_b = set(b)
    intersection = set_a & set_b
    union = set_a | set_b
    return len(intersection) / len(union)
# 7kyu

# https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/python

def even_numbers(arr,n):
    arr = arr[::-1]
    result = []
    for i in arr:
        if i % 2 == 0:
            result.append(i)
        if len(result) == n:
            break
    return result[::-1]
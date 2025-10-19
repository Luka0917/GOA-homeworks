import random

def bogo_sort(arr):
    while arr != sorted(arr):
        random.shuffle(arr)
    return arr

print(bogo_sort([3, 1, 2]))
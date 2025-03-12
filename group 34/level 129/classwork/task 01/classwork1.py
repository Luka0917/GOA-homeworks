# 7kyu

# https://www.codewars.com/kata/5834315e06f227a6ac000099/train/python

def elimination(arr):
    for i in arr:
        if arr.count(i) > 1:
            return i
        
# https://www.codewars.com/kata/59f061773e532d0c87000d16

def elevator_distance(array):
    total_distance = 0
    for i in range(1, len(array)):
        total_distance += abs(array[i] - array[i-1])
    return total_distance
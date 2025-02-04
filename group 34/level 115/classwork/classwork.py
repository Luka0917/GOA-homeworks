# 8kyu

# https://www.codewars.com/kata/576b93db1129fcf2200001e6

def sum_array(arr):
    if not arr or len(arr) <= 1:
        return 0
    arr_sorted = sorted(arr)
    arr_sorted = arr_sorted[1:-1]
    return sum(arr_sorted)
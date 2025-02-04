def sum_two_largest(lst):
    if len(lst) < 2:
        return None
    result = 0
    for i in range(2):
        result += max(lst)
        lst.remove(max(lst))
    return result

print(sum_two_largest([3, 7, 2, 9, 5]))
print(sum_two_largest([10, 10, 5, 3]))
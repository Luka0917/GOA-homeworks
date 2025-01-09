def func(array):
    result = 0
    for i in range(len(array)):
        for x in range(len(array[i])):
            result += array[i][x]
    return result

print(func([
    [1,3],
    [1,4],
    [4,1],
    [2,2]
]))
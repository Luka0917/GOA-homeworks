def reversed_matrix(array):
    result = []
    for i in range(len(array[0])):
        row = []
        for x in range(len(array)):
            row.append(array[x][i])
        result.append(row)
    return result

print(reversed_matrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))
def diagonal_sum(array):
    n = len(array)
    
    diagonal_sum_1 = 0
    diagonal_sum_2 = 0
    
    for i in range(n):
        diagonal_sum_1 += array[i][i]
        diagonal_sum_2 += array[i][n-i-1]
    
    return f"Diagonal_1: {diagonal_sum_1} \n Diagonal_2: {diagonal_sum_2}"

print(diagonal_sum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))
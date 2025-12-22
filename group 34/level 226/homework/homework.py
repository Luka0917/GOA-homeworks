arr_1 = [
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ],
    [
        [13, 14, 15, 16],
        [17, 18, 19, 20],
        [21, 22, 23, 24]
    ]
]
result = []
for i in range(len(arr_1)):
    for x in range(len(arr_1[i])):
        for y in range(len(arr_1[i][x])):
            result.append(arr_1[i][x][y])
print(result)


def find_element(arr, el):
    for z in range(len(arr)):
        for y in range(len(arr[z])):
            for x in range(len(arr[z][y])):
                if arr[z][y][x] == el:
                    return [x, y, z]
    return "Element not found"
print(find_element(
    [
        [
            [6, 2, 4],
            [8, 5, 1],
            [3, 9, 7]
        ],
        [
            [4, 1, 6],
            [7, 0, 2],
            [8, 5, 9]
        ],
        [
            [2, 3, 8],
            [6, 7, 4],
            [1, 9, 5]
        ]
    ],
    0
))

def rotate_right(arr):
    n = len(arr)
    result = []
    for i in range(n):
        pre_result = []
        for x in range(n-1, -1, -1):
            pre_result.append(arr[x][i])
        result.append(pre_result)
    return result

def rotate_left(arr):
    n = len(arr)
    result = []
    for i in range(n-1, -1, -1):
        pre_result = []
        for x in range(n):
            pre_result.append(arr[x][i])
        result.append(pre_result)
    return result

def rotate_cube(arr, directions):
    result = arr
    for i in range(len(directions)):
        if directions[i] == 1:
            result = rotate_right(result)
        if directions[i] == -1:
            result = rotate_left(result)
    return result

print(rotate_cube(
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ],
    [1, 1, -1]
))

#! 1 --- right
#! -1 --- left

#! right
#* [2][0] --- [1][0] --- [0][0]
#* [2][1] --- [1][1] --- [0][1] 
#* [2][2] --- [1][2] --- [0][2]   

#! left
#* [0][2] --- [1][2] --- [2][2]
#* [0][1] --- [1][1] --- [2][1]
#* [0][0] --- [1][0] --- [2][0]
    

#& Test
arr = [ 
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8] 
]
# rotate_right(arr)
# rotate_left(arr)

#^ right
[
    [6, 3, 0], 
    [7, 4, 1], 
    [8, 5, 2]
]

#^ left
[
    [2, 5, 8], 
    [1, 4, 7], 
    [0, 3, 6]
]
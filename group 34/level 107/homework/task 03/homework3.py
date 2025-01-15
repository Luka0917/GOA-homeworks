def count_greater_left(arr):
    result = []
    for i in range(len(arr)):
        count = 0
        for j in range(i):
            if arr[i] > arr[j]:
                count += 1
        result.append(count)

    print(result)
count_greater_left([3, 2, 6, 5, 1])
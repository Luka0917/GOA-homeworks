def max_difference(arr):
    if len(arr) < 2:
        return 0
    min_so_far = arr[0]
    max_diff = 0
    for x in arr[1:]:
        diff = x - min_so_far
        if diff > max_diff:
            max_diff = diff
        if x < min_so_far:
            min_so_far = x
    return max_diff

print(max_difference([7, 1, 5, 3, 6, 4]))
#^ Time Complexity: O(n)
#^ Space Complexity: O(1)


def next_greater_elements(arr):
    result = []
    for i in range(len(arr)):
        next_greater = -1
        for j in range(i + 1, len(arr)):
            if arr[j] > arr[i]:
                next_greater = arr[j]
                break
        result.append(next_greater)
    return result

print(next_greater_elements([2, 5, 3]))
#^ Time Complexity: O(n^2)
#^ Space Complexity: O(n)


def all_subarray_sums_grouped(arr):
    n = len(arr)
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i+1] = prefix[i] + arr[i]
    result = []
    for i in range(n):
        row = []
        for j in range(i, n):
            s = prefix[j+1] - prefix[i]
            row.append(s)
        result.append(row)
    return result

print(all_subarray_sums_grouped([1, 2, 3]))
#^ Time Complexity: O(n^2)
#^ Space Complexity: O(n^2)


def permutations_iterative(s):
    arr = sorted(list(s))
    n = len(arr)
    result = []

    def add_current():
        result.append(''.join(arr))

    def next_permutation():
        i = n - 2
        while i >= 0 and arr[i] >= arr[i+1]:
            i -= 1
        if i == -1:
            return False
        j = n - 1
        while arr[j] <= arr[i]:
            j -= 1
        arr[i], arr[j] = arr[j], arr[i]
        arr[i+1:] = arr[i+1:][::-1]
        return True
    add_current()
    while next_permutation():
        add_current()
    return result

print(permutations_iterative("abc"))
#^ Time Complexity: O(n * n!)
#^ Space Complexity: O(n * n!)


#^ Time Complexity (დროის კომპლექსურობა):
#& რამდენი ოპერაცია სჭირდება ალგორითმს მონაცემების ზომის n-ის მიხედვით.
#& მაგალითად, ციკლი n-ჯერ -> O(n), nested loops n*n -> O(n^2)

#^ Space Complexity (სივრცის კომპლექსურობა):
#& რამდენი დამატებითი მეხსიერება სჭირდება ალგორითმს მონაცემების ზომის n-ის მიხედვით.
#& მაგალითად, ახალი მასივი n ელემენტით -> O(n), რამდენიმე ცვლადი -> O(1)
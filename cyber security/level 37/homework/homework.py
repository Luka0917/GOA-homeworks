# https://www.codewars.com/kata/595aa94353e43a8746000120/train/python

def find_deleted_number(arr, mixed_arr):
    return sum(arr) - sum(mixed_arr)

# https://www.codewars.com/kata/5bb804397274c772b40000ca/train/python

def stack_height_2d(layers):
    if layers == 0: return 0
    height = (layers - 1) * (3 ** 0.5) / 2 + 1
    return height

# https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1/train/python

def wave_sort(a):
    for i in range(len(a) - 1):
        if i % 2 == 0:
            if a[i] < a[i + 1]:
                a[i], a[i + 1] = a[i + 1], a[i]
        else:
            if a[i] > a[i + 1]:
                a[i], a[i + 1] = a[i + 1], a[i]
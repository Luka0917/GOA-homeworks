# 6kyu

# https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1

def wave_sort(a):
    for i in range(len(a) - 1):
        if i % 2 == 0:
            if a[i] < a[i + 1]:
                a[i], a[i + 1] = a[i + 1], a[i]
        else:
            if a[i] > a[i + 1]:
                a[i], a[i + 1] = a[i + 1], a[i]
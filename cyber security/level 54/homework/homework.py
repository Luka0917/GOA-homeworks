# https://www.codewars.com/kata/55466989aeecab5aac00003e/train/python

def sq_in_rect(lng, wdth):
    if lng == wdth: return None
    result = []
    while lng != wdth:
        if lng > wdth:
            result.append(wdth)
            lng -= wdth
        else:
            result.append(lng)
            wdth -= lng
    result.append(lng)
    return result

# https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/python

def find_missing(sequence):
    n = len(sequence)
    difference = (sequence[-1] - sequence[0]) / n
    for i in range(1, n):
        if sequence[i] - sequence[i - 1] != difference:
            return sequence[i - 1] + difference

# https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/python

def race(v1, v2, g):
    if v1 >= v2: return None
    total_seconds = (g / (v2 - v1)) * 3600
    hours = int(total_seconds // 3600)
    minutes = int((total_seconds % 3600) // 60)
    seconds = int(total_seconds % 60)
    return [hours, minutes, seconds]
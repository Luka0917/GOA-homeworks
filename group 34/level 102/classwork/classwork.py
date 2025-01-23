# 6kyu

# https://www.codewars.com/kata/54e6533c92449cc251001667

def unique_in_order(sequence):
    result = []
    for element in sequence:
        if not result or result[-1] != element:
            result.append(element)
    return result
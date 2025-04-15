# 7kyu

# https://www.codewars.com/kata/585af8f645376cda59000200

def format_poem(poem):
    return '.\n'.join(poem.split('. '))

# https://www.codewars.com/kata/582f52208278c6be55000067

def round_to_five(arr):
    result = []
    for i in arr:
        remainder = i % 5
        if remainder < 2.5:
            rounded = i - remainder
        else:
            rounded = i + (5 - remainder)
        result.append(round(rounded))
    return result
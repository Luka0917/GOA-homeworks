# https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/python

def number(bus_stops):
    people_on_bus = 0
    for stop in bus_stops:
        people_on_bus += stop[0]
        people_on_bus -= stop[1]
    return people_on_bus

# https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/python

def reverse_words(text):
    s = text.split(' ')
    result = []
    for i in s:
        result.append(i[::-1])
    return ' '.join(result)

# https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/python

def remove_smallest(numbers):
    if len(numbers) <= 1:
        return []
    min_index = numbers.index(min(numbers))
    return numbers[:min_index] + numbers[min_index + 1:]

# https://www.codewars.com/kata/583203e6eb35d7980400002a/train/python

def count_smileys(arr):
    count = 0
    for face in arr:
        if len(face) == 2:
            if face[0] in [':', ';'] and face[1] in [')', 'D']:
                count += 1
        elif len(face) == 3:
            if face[0] in [':', ';'] and face[1] in ['-', '~'] and face[2] in [')', 'D']:
                count += 1
    return count
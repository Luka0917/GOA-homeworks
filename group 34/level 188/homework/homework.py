# 7kyu

# https://www.codewars.com/kata/52fba66badcd10859f00097e

def disemvowel(string):
    result = ''
    vowels = 'AEIOUaeiou'
    for i in string:
        if i not in vowels:
            result += i
    return result

# https://www.codewars.com/kata/5648b12ce68d9daa6b000099

def number(bus_stops):
    people_on_bus = 0
    for stop in bus_stops:
        people_on_bus += stop[0]
        people_on_bus -= stop[1]
    return people_on_bus

# https://www.codewars.com/kata/55f2b110f61eb01779000053

def get_sum(a,b):
    min_num = min(a,b)
    max_num = max(a,b)
    sum = 0
    for num in range(min_num, max_num + 1):
        sum += num
    return sum

# https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

def duplicate_count(text):
    text = text.lower()
    duplicates = []
    for letter in text:
        if text.count(letter) > 1 and letter not in duplicates:
            duplicates.append(letter)
    return len(duplicates)

# https://www.codewars.com/kata/517abf86da9663f1d2000003

def to_camel_case(text):
    if not text:
        return text
    text = text.replace('_', '-')
    words = text.split('-')
    first_word = words[0]
    camel_words = [first_word] + [w.capitalize() for w in words[1:]]
    return ''.join(camel_words)
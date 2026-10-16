# https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/python

def find_missing(sequence):
    n = len(sequence)
    difference = (sequence[-1] - sequence[0]) / n
    for i in range(1, n):
        if sequence[i] - sequence[i - 1] != difference:
            return sequence[i - 1] + difference

# https://www.codewars.com/kata/5848565e273af816fb000449/train/python

def encrypt_this(text):
    result = []
    for i in text.split():
        if len(i) == 1:
            result.append(str(ord(i[0])))
        elif len(i) == 2:
            result.append(str(ord(i[0])) + i[1])
        else:
            i = str(ord(i[0])) + i[-1] + i[2:-1] + i[1]
            result.append(i)
    return ' '.join(result)

# https://www.codewars.com/kata/569d488d61b812a0f7000015/train/python

def data_reverse(data):
    chunks = []
    for i in range(0, len(data), 8):
        chunk = data[i:i + 8]
        chunks.append(chunk)
    chunks.reverse()
    result = []
    for chunk in chunks:
        for bit in chunk:
            result.append(bit)
    return result

# https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/python

def meeting(s):
    guests = s.upper().split(';')
    names = []
    for guest in guests:
        first, last = guest.split(':')
        names.append((last, first))
    names.sort()
    result = ''
    for last, first in names:
        result += f'({last}, {first})'
    return result

# https://www.codewars.com/kata/59c633e7dcc4053512000073/train/python

def solve(s):
    vowels = 'aeiou'
    highest = 0
    current = 0
    for letter in s:
        if letter not in vowels:
            value = ord(letter) - ord('a') + 1
            current += value
        else:
            if current > highest:
                highest = current
            current = 0
    if current > highest:
        highest = current
    return highest
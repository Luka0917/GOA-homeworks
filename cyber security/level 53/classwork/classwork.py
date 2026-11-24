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
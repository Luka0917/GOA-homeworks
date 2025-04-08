# 7kyu

# https://www.codewars.com/kata/567de72e8b3621b3c300000b/solutions/python

def is_letter(s):
    return len(s) == 1 and s.isalpha() and ord(s) < 123

# https://www.codewars.com/kata/557cffec8c3e8e55cc00010f

def count_zeros(x):
    count = 0
    for i in range(1, x + 1):
        count += str(i).count('0')
    return count

# https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/python

def count_red_beads(n):
    return 0 if n < 2 else 2 * (n - 1)
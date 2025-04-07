# 6kyu

# https://www.codewars.com/kata/58df62fe95923f7a7f0000cc

def palindrome(num):
    if not isinstance(num, int) or num < 0:
        return "Not valid"
    
    num = str(num)
    count = 0

    for i in range(2, len(num) + 1):
        for x in range(len(num) - i + 1):
            substring = num[x:x + i]
            if substring == substring[::-1]:
                count += 1
    return count
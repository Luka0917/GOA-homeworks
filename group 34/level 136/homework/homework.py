# 8kyu

# https://www.codewars.com/kata/59dd3ccdded72fc78b000b25

def whatday(num):
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    if num < 1 or num > 7:
        return "Wrong, please enter a number between 1 and 7"
    return days[num - 1]

# https://www.codewars.com/kata/57e1e61ba396b3727c000251

def string_clean(s):
    result = ""
    for char in s:
        if not char.isdigit():
            result += char
    return result

# 7kyu

# https://www.codewars.com/kata/593b1909e68ff627c9000186

def nickname_generator(name):
    if len(name) <= 3:
        return 'Error: Name too short'
    vowels = 'aeiou'
    if name[2] in vowels:
        return name[:4]
    return name[:3]

# https://www.codewars.com/kata/5874657211d7d6176a00012f

def convert(st):
    replace = {
        'a': 'o',
        'o': 'u'
    }
    result = []
    for i in st:
        if i in replace:
            result.append(replace[i])
        else:
            result.append(i)
    return ''.join(result)

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
# https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/python

def is_valid_IP(strng):
    splited_arr = strng.split(".")
    for i in splited_arr:
        if i.isdigit() == False or len(splited_arr) != 4:
            return False
        if i.startswith("0") and len(i) > 1 or int(i) > 255:
            return False
    return True

# https://www.codewars.com/kata/5202ef17a402dd033c000009/train/python

def title_case(title, minor_words=''):
    minor_words = minor_words.lower().split()
    words = title.lower().split()
    result = []
    for i, word in enumerate(words):
        if i == 0 or word not in minor_words:
            result.append(word.capitalize())
        else:
            result.append(word)
    return ' '.join(result)

# https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/python

def parts_sums(ls):
    total = sum(ls)
    result = [total]
    for num in ls:
        total -= num
        result.append(total)
    return result

# https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/python

def rev_rot(str, sz):
    if sz <= 0 or sz > len(str) or str == '': return ''
    result = ''
    for i in range(0, len(str) - sz + 1, sz):
        chunk = str[i:i + sz]
        if sum(int(digit) for digit in chunk) % 2 == 0:
            result += chunk[::-1]
        else:
            result += chunk[1:] + chunk[0]
    return result
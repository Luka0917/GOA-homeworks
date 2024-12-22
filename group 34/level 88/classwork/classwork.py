# 7 kyu

# 1

# https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

def validate_pin(pin):
    if len(pin) == 4 and pin.isnumeric():
        return True
    elif len(pin) == 6 and pin.isnumeric():
        return True
    else:
        return False

# 6 kyu

# 1

# https://www.codewars.com/kata/5264d2b162488dc400000001

def spin_words(sentence):
    result = []
    sentence = sentence.split(" ")
    for i in sentence:
        if len(i) >= 5:
            result.append(i[::-1])
        else:
            result.append(i)
    return " ".join(result)

# 2

# https://www.codewars.com/kata/514b92a657cdc65150000006

def solution(number):
    result = []
    for i in range(number):
        if i % 3 == 0 or i % 5 == 0:
            result.append(i)
    return sum(result)

# 3

# https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

def highest_rank(arr):
    max_count = None
    count = 0
    for i in arr:
        if arr.count(i) > count:
            count = arr.count(i)
            max_count = i
        elif arr.count(i) == count:
            if i > max_count:
                max_count = i
            else:
                continue
    return max_count

# 4

# https://www.codewars.com/kata/515decfd9dcfc23bb6000006

def is_valid_IP(strng):
    splited_arr = strng.split(".")
    for i in splited_arr:
        if i.isdigit() == False or len(splited_arr) != 4:
            return False
        if i.startswith("0") and len(i) > 1 or int(i) > 255:
            return False
    return True
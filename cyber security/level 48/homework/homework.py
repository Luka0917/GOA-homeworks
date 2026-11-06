# https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/python

def fold_array(array, runs):
    numbers = array.copy()
    for i in range(runs):
        if len(numbers) == 1:
            break
        middle = len(numbers) // 2
        left_side = numbers[:middle]
        right_side = numbers[middle:]
        if len(numbers) % 2 != 0:
            middle_number = right_side.pop(0)
        right_side.reverse()
        folded_array = []
        for j in range(len(left_side)):
            result = left_side[j] + right_side[j]
            folded_array.append(result)
        if len(numbers) % 2 != 0:
            folded_array.append(middle_number)
        numbers = folded_array
    return numbers

# https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/python

def triple_double(num1, num2):
    first_number = str(num1)
    second_number = str(num2)
    for i in range(len(first_number) - 2):
        digit = first_number[i]
        if first_number[i] == first_number[i + 1] == first_number[i + 2]:
            for j in range(len(second_number) - 1):
                if second_number[j] == digit and second_number[j + 1] == digit:
                    return 1
    return 0

# https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/python

def up_array(arr):
    if len(arr) == 0:
        return None
    for number in arr:
        if number < 0 or number > 9:
            return None
    result = arr.copy()
    for i in range(len(result) - 1, -1, -1):
        if result[i] < 9:
            result[i] += 1
            return result
        else:
            result[i] = 0
    result.insert(0, 1)
    return result

# https://www.codewars.com/kata/556e0fccc392c527f20000c5/train/python

def xbonacci(signature, n):
    result = signature.copy()
    while len(result) < n:
        total = 0
        for i in range(len(signature)):
            total += result[-(i + 1)]
        result.append(total)
    return result[:n]

# https://www.codewars.com/kata/559536379512a64472000053/train/python

def play_pass(s, n):
    result = ""
    for i in range(len(s)):
        character = s[i]
        if character.isalpha():
            character = chr((ord(character) - ord('A') + n) % 26 + ord('A'))
            if i % 2 == 0:
                character = character.upper()
            else:
                character = character.lower()
        elif character.isdigit():
            digit = int(character)
            character = str(9 - digit)
        result += character
    result = result[::-1]
    return result
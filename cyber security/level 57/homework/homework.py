# https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/python

def wave(people):
    result = []
    for i in range(len(people)):
        if people[i] != " ":
            word = people[0:i] + people[i].upper() + people[i + 1:]
            result.append(word)
    return result

# https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/python

def decrypt(encrypted_text, n):
    if not encrypted_text or n <= 0:
        return encrypted_text
    for _ in range(n):
        half = len(encrypted_text) // 2
        odd = encrypted_text[:half]
        even = encrypted_text[half:]
        result = ""
        for i in range(len(even)):
            result += even[i]
            if i < len(odd):
                result += odd[i]
        encrypted_text = result
    return encrypted_text

def encrypt(text, n):
    if not text or n <= 0:
        return text
    for _ in range(n):
        odd = text[1::2]
        even = text[::2]
        text = odd + even
    return text

# https://www.codewars.com/kata/5503013e34137eeeaa001648/train/python

def diamond(n):
    if n <= 0 or n % 2 == 0: return None
    result = ""
    for i in range(1, n + 1, 2):
        spaces = (n - i) // 2
        result += " " * spaces + "*" * i + "\n"
    for i in range(n - 2, 0, -2):
        spaces = (n - i) // 2
        result += " " * spaces + "*" * i + "\n"
    return result

# https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/python

def thirt(n):
    sequence = [1, 10, 9, 12, 3, 4]
    while True:
        digits = str(n)[::-1]
        total = 0
        for i in range(len(digits)):
            total += int(digits[i]) * sequence[i % 6]
        if total == n:
            return n
        n = total
print("----- 1 -----")

def print_number(number):
    return number + 5

print(print_number(5))

print("----- 2 -----")

def print_numbers(num1, num2):
    return num1 * num2

print(print_numbers(3, 6))

print("----- 3 -----")

def print_string(word):
    return len(word)

print(print_string("luka"))

print("----- 4 -----")

def print_list(list):
    return len(list)

print(print_list(["luka", "tornike", "andria"]))

print("----- 5 -----")

def is_palindrome(word):
    if word == word[::-1]:
        return True
    else:
        return False

print(is_palindrome("wow"))
print(is_palindrome("luka"))

print("----- 6 -----")

def print_string(words):
    long_word = []

    for word in words:
        if len(word) >= 5:
            long_word.append(word)
        
    return long_word

print(print_string(["python", "hrml", "javaScript", "C++", "java", "php"]))

print("----- 7 -----")

def print_factorial(num):
    factorial = 1

    for i in range(1, num + 1):
        factorial = factorial * i

    return factorial

print(print_factorial(3))

print("----- 8 -----")

def print_max_sum(num1, num2):
    return max(num1) + max(num2)

print(print_max_sum([1, 2, 3], [4, 5, 6]))

print("----- 9 -----")

def print_min_sum(num1, num2):
    return min(num1) - min(num2)

print(print_min_sum([1, 2, 3], [4, 5, 6]))

print("----- 10 -----")

def print_max_min_sum(num1, num2):
    return max(num1) - min(num2)

print(print_max_min_sum([1, 2, 3], [4, 5, 6]))

print("----- 11 -----")

def print_sum(num):
    return sum(num)

print(print_sum([1, 2, 3, 4]))

print("----- 12 -----")

def print_vowels(word):
    vowels = "aeiouAEIOU"
    count = 0
    for char in word:
        if char in vowels:
            count += 1
    return count

print(print_vowels("luka"))

print("----- 13 -----")

def print_square_numbers(numbers):
    squared_numbers = []

    for number in numbers:
        squared_numbers.append(number ** 2)

    return squared_numbers

print(print_square_numbers([1, 2, 3, 4, 5]))

print("----- 14 -----")

def print_reverse_string(word):
    return word[-1], word[-2], word[-3], word[-4]

print(print_reverse_string("luka"))

print("----- 15 -----")

def print_number(number):
    return number % 2 == 0

print(print_number(4))
print(print_number(5))

print("----- 16 -----")

def print_long_string(words):
    long_word = []

    for word in words:
        if len(word) >= 5:
            long_word.append(word)
        
    return long_word

print(print_long_string(["luka", "saba", "andria"]))

print("----- 17 -----")

def print_min(num):
    return min(num)

print(print_min([1, 2, 3, 4]))

print("----- 18 -----")

def print_numbers(num1, num2):
    while num2 != 0:
        num1, num2 = num2, num1 % num2
    return num1

print(print_numbers(12,24))

print("----- 19 -----")

def print_word_upper(word):
    return word.upper()

print(print_word_upper("luka"))

print("----- 20 -----")

def print_calculate_average():
    numbers = [1, 2, 3, 4, 5]
    return sum(numbers) / len(numbers)

print(print_calculate_average())
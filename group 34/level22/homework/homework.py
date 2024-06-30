print("----- 1 -----")

def calculate():
    return 3 + 5 * (2 - 8)

print(calculate())

print("----- 2 -----")

print("----- 3 -----")

print("----- 4 -----")

print("----- 5 -----")

print("----- 6 -----")

print("----- 7 -----")

print("----- 8 -----")

print("----- 9 -----")

print("----- 10 -----")

print("----- 11 -----")

def list_sum(numbers):
    return sum(numbers)

numbers = [1, 2, 3, 4, 5]
print(list_sum(numbers))

print("----- 12 -----")

print("----- 13 -----")

def square_numbers(numbers):
    squared_numbers = []
    for number in numbers:
        squared_numbers.append(number ** 2)
    return squared_numbers

example_list = [1, 2, 3, 4, 5]

print(square_numbers(example_list))

print("----- 14 -----")

def reverse_string(input):
    print(input[-1], input[-2], input[-3], input[-4])

reverse_string("luka")

print("----- 15 -----")

def print_number(number):
    return number % 2 == 0

print(print_number(4))
print(print_number(5))

print("----- 16 -----")

def long_word():
    words = ["python", "hrml", "javaScript", "C++", "java", "php"]
    long_word = []

    for word in words:
        if len(word) >= 5:
            long_word.append(word)
        
    print(long_word)

long_word()
        
print("----- 17 -----")

def min_number():
    numbers = [1, 2, 3, 4, 5]
    print(min(numbers))

min_number()

print("----- 18 -----")

def print_numbers(num1, num2):
    while num2 != 0:
        num1, num2 = num2, num1 % num2
    print(num1)

print_numbers(12,24)

print("----- 19 -----")

def word_upper(text):
    print(text.upper())

word_upper("luka")

print("----- 20 -----")

def calculate_average():
    numbers = [1, 2, 3, 4, 5]
    print(sum(numbers) / len(numbers))

calculate_average()
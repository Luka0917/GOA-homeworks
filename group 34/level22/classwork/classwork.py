print("----- 1 -----")

def calculate_average():
    numbers = [1, 2, 3, 4, 5]
    print(sum(numbers) / len(numbers))

calculate_average()

print("----- 2 -----")

def manual_sum(numbers_list):
    sum = 0

    for num in numbers_list:
        sum = sum + num
    
    return sum


print(manual_sum([1,2,3]))

print("----- 3 -----")

def greet(name = "guest"):
    print("wellcome " + name)

greet()

print("----- 4 -----")

def numbers(firstnum, secondnum):
    total_sum = 0
    for num in range(firstnum, secondnum):
        total_sum += num

    return total_sum

print(numbers(1, 6))

print("----- 5 -----")

def filter_list(numbers_list):
    for num in numbers_list:
        if num % 2 == 0:
            print("even:", num)
        else:
            print("odd:", num)


filter_list([1,2,3,4,5,6,7,8,9,10])

print("----- 6 -----")

def print_numbers(n):
    for i in range(1, n):
        print(i)

print_numbers(5)

print("----- 7 -----")

def print_even_numbers(n):
    for i in range(2,n + 1):
        if i % 2 == 0:
            print(i)
    
print_even_numbers(10)

print("----- 8 -----")

def sum(num1, num2):
    print(num1 + num2)

sum(1, 5)

print("----- 9 -----")

def sum(num1, num2):
    print(num1 + num2)

    return(num1 + num2)

sum(2, 6)

print("----- 10 -----")

def joined_string(str1, str2):
    print(str1 + " " + str2)

joined_string("GOA", "best")

print("----- 11 -----")

def find_maximum(num1, num2):
    if num1 > num2:
        print(num1)
    elif num2 > num1:
        print(num2)
    else:
        print("they are equal")

find_maximum(1, 5)
find_maximum(7, 3)
find_maximum(1, 1)

print("----- 12 -----")

def reverse_string(input):
    print(input[-1], input[-2], input[-3], input[-4])

reverse_string("luka")

print("----- 13 -----")

def rectangle_area(length, width):
    print(length * width)

rectangle_area(3, 5)

print("----- 14 -----")

def prime_number(n):
    if n <= 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

print(prime_number(4))
print(prime_number(3))

print("----- 15 -----")

def print_sum(num):
    return sum(num)

print(print_sum([1, 2, 3, 4, 5]))

print("----- 16 -----")

def print_vowels(word):
    vowels = "aeiouAEIOU"
    count = 0
    for char in word:
        if char in vowels:
            count += 1
    return count

print(print_vowels("GOA"))

print("----- 17 -----")

def print_string(word):
    uppercase_list = []

    for w in word:
        upper_w = w.upper()

        uppercase_list.append(upper_w)
    return uppercase_list

print(print_string("luka"))
def add(numbers):
    result = 0
    for num in numbers:
        result += num
    return result

def minus(numbers):
    result = numbers[0]
    for num in numbers[1:]:
        result -= num
    return result

def multiply(numbers):
    result = 1
    for num in numbers:
        result *= num
    return result

def division(numbers):
    result = numbers[0]
    for num in numbers[1:]:
        result /= num
    return result

def func(operation, numbers):
    return operation(numbers)

print(func(add, [1, 3, 4, 6]))
print(func(minus, [1, 3, 4, 6]))
print(func(multiply, [1, 3, 4, 6]))
print(func(division, [1, 3, 4, 6]))
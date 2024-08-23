# 1

# https://www.codewars.com/kata/57ed30dde7728215300005fa

def bumps(road):
    if road.count("n") <= 15:
        return "Woohoo!"
    else:
        return "Car Dead"

# 2

# https://www.codewars.com/kata/535474308bb336c9980006f2

def greet(name): 
    name = name.capitalize()
    return f"Hello {name}!"

# 3

# https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

def sum_even_numbers(seq): 
    total_sum = 0
    for num in seq:
        if num == int(num) and num % 2 == 0:
            total_sum += num
                
    return total_sum

# 4

# https://www.codewars.com/kata/5413759479ba273f8100003d

def reverse(lst):
    result = list()
    while lst:
        result.append(lst.pop())
        
    return result

# 5

# https://www.codewars.com/kata/57d2807295497e652b000139

def averages(arr):
    if arr is None or len(arr) <= 1:
        return []
    result = []

    for i in range(len(arr) - 1):
        avg = (arr[i] + arr[i + 1]) / 2
        result.append(avg)

    return result

# 6

# https://www.codewars.com/kata/5effa412233ac3002a9e471d



# 7

# https://www.codewars.com/kata/609eee71109f860006c377d1

def last_survivor(letters, coords):
    letters = list(letters)
    for index in coords:
        letters.pop(index)
    return letters[0]

# 8

# https://www.codewars.com/kata/5768a693a3205e1cc100071f



# 9

# https://www.codewars.com/kata/5701e43f86306a615c001868



# 10

# https://www.codewars.com/kata/57f7b8271e3d9283300000b4

def even_or_odd(s):
    even_sum = 0
    odd_sum = 0
    
    for char in s:
        digit = int(char)
        
        if digit % 2 == 0:
            even_sum += digit
        else:
            odd_sum += digit
    
    if even_sum > odd_sum:
        return "Even is greater than Odd"
    elif odd_sum > even_sum:
        return "Odd is greater than Even"
    else:
        return "Even and Odd are the same"
print("----- 1 -----")

numbers = [-6, -8, 3, 78, -2, 4]
positive_numbers = []
negative_numbers = []

for num in numbers:
    if num >= 0:
        positive_numbers.append(num)
    else:
        negative_numbers.append(num)

print(positive_numbers)
print(negative_numbers)

print("----- 2 -----")

words = ["python", "hrml", "javaScript", "C++", "java", "php"]
long_words = []
short_words = []

for word in words:
    if len(word) >= 5:
        long_words.append(word)
    else:
        short_words.append(word)

print(long_words)
print(short_words)

print("----- 3 -----")

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = []
odd_numbers = []

for num in numbers:
    if num % 2 == 0:
        even_numbers.append(num)
    else:
        odd_numbers.append(num)

print(even_numbers)
print(odd_numbers)
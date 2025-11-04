# რეკურსია არის პროგრამირების ტექნიკა, როცა ფუნქცია იძახებს საკუთარ თავს იმისთვის, რომ ამოხსნას ამოცანის უფრო მარტივი ან პატარა ვერსია.


def numbers_upto(n):
    if n == 1:
        return [1]
    return numbers_upto(n - 1) + [n]
print(numbers_upto(5))


def numbers_to_one(n):
    if n == 1:
        return [1]
    return [n] + numbers_to_one(n - 1)
print(numbers_to_one(5))


def arr_join(arr):
    if len(arr) == 0:
        return 0
    return arr[0] + arr_join(arr[1:])
print(arr_join([1, 2, 3, 4, 5]))


def arr_count(arr):
    if len(arr) == 0:
        return 0
    return 1 + arr_count(arr[1:])
print(arr_count([1, 2, 3, 4, 5]))


def reverse_text(text):
    if len(text) <= 1:
        return text
    return reverse_text(text[1:]) + text[0]
print(reverse_text('Hello, World!'))


def max_in_array(arr):
    if len(arr) == 1:
        return arr[0]
    else:
        return max(arr[0], max_in_array(arr[1:]))
print(max_in_array([1, 2, 3, 4, 5]))


def count_vowels(text):
    vowels = "aeiouAEIOU"
    if len(text) == 0:
        return 0
    first_char = text[0]
    if first_char in vowels:
        count_for_first = 1
    else:
        count_for_first = 0
    rest_count = count_vowels(text[1:])
    total_count = count_for_first + rest_count
    return total_count
print(count_vowels('Hello, World!'))
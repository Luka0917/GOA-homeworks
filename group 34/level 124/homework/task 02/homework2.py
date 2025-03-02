# 7kyu

# https://www.codewars.com/kata/563cf89eb4747c5fb100001b

def remove_smallest(numbers):
    if len(numbers) <= 1:
        return []
    min_index = numbers.index(min(numbers))
    return numbers[:min_index] + numbers[min_index + 1:]
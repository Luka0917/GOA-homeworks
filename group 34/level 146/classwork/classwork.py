# 7kyu

# https://www.codewars.com/kata/56582133c932d8239900002e

def most_frequent_item_count(collection):
    if not collection:
        return 0
    from collections import Counter
    counts = Counter(collection)
    return max(counts.values())

# https://www.codewars.com/kata/540c33513b6532cd58000259

def sum_args(*nums):
    return sum(nums)

# https://www.codewars.com/kata/52f3149496de55aded000410

def sum_digits(number):
    if number < 0: number = -number
    result = 0
    for i in range(len(str(number))):
        result += int(str(number)[i])
    return result

# https://www.codewars.com/kata/5b16490986b6d336c900007d

def my_languages(results):
    passed_languages = []
    for language, score in results.items():
        if score >= 60:
            passed_languages.append((language, score))
    passed_languages.sort(key=lambda x: x[1], reverse=True)
    return [language for language, score in passed_languages]
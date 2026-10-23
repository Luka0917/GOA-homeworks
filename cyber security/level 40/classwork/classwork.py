# https://www.codewars.com/kata/556196a6091a7e7f58000018/train/python

def largest_pair_sum(numbers): 
    numbers.sort(reverse=True)
    return numbers[0] + numbers[1]

# https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/python

def duplicate_count(text):
    text = text.lower()
    duplicates = []
    for letter in text:
        if text.count(letter) > 1 and letter not in duplicates:
            duplicates.append(letter)
    return len(duplicates)

# https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python

def duplicate_encode(word):
    word = word.lower()
    result = ""
    for char in word:
        if word.count(char) > 1:
            result = result + ")"
        else:
            result = result + "("
    return result
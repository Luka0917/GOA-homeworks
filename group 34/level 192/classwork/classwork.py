# 7kyu

# https://www.codewars.com/kata/5b6c220fa0a661fbf200005d/train/python

def scoreboard(score_string: str) -> list[int]:
    number_words = {
        'nil': 0,
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    }
    words = score_string.lower().split()
    result = []
    for i in words:
        if i in number_words:
            result.append(number_words[i])
    return result[:2]

# 6kyu

# https://www.codewars.com/kata/5264d2b162488dc400000001/train/python

def spin_words(sentence):
    result = []
    sentence = sentence.split(" ")
    for i in sentence:
        if len(i) >= 5:
            result.append(i[::-1])
        else:
            result.append(i)
    return " ".join(result)
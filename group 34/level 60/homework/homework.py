# 1

# https://www.codewars.com/kata/587731fda577b3d1b0001196/train/python

def camel_case(s):
    s = s.split()
    result = []
    for word in s:
        words = word.capitalize()
        result.append(words)
    return "".join(result)

# 2

# https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/python

def to_weird_case(words):
    words = words.split()
    result = []
    for word in words:
        tr_words = ""
        for index, char in enumerate(word):
            if index % 2 == 0:
                tr_words += char.upper()
            else:
                tr_words += char.lower() 
        result.append(tr_words)
    return " ".join(result)

# 3

# https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/python

def clean_string(s):
    result = []
    for i in s:
        if i == "#":
            if result:
                result.pop()
        else:
             result.append(i)
    return "".join(result)
# 7kyu

# 1

# https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/python

def reverse_words(text):
    words = text.split(' ')
    
    result = ""
    
    for i in range(len(words)):
        reversed_word = words[i][::-1]
        
        result += reversed_word
        
        if i < len(words) - 1:
            result += " "
    return result

# 6kyu

# 1

# https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/python

def order(sentence):
    words = sentence.split()

    def extract_number(word):
        for char in word:
            if char.isdigit():
                return int(char)
        return 0 

    return ' '.join(sorted(words, key=extract_number))

# 2

# https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/python

def solution(s):
    result = []
    for i in range(0, len(s), 2):
        pair = s[i:i+2]
        if len(pair) == 1:
            pair += '_'
        result.append(pair)
    return result
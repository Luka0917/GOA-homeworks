# 8kyu

# https://www.codewars.com/kata/559ac78160f0be07c200005a

def name_shuffler(str_):
    str_ = str_.split(" ")
    return " ".join(str_[::-1])

# https://www.codewars.com/kata/574b3b1599d8f897470018f6

def get_real_floor(n):
    if n <= 0:
        return n
    elif n < 13:
        return n - 1
    else:
        return n - 2

# https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c

def xor(a,b):
    if (a == True  or a == False) and a == b:
        return False
    else:
        return True

# https://www.codewars.com/kata/5808e2006b65bff35500008f

def position(letter):
    return f"Position of alphabet: {ord(letter) - ord('a') + 1}"

# https://www.codewars.com/kata/55ad04714f0b468e8200001c

def get_char(c):
    return chr(c)

# https://www.codewars.com/kata/56b29582461215098d00000f

def pipe_fix(nums):
    result = []
    for i in range(nums[0], nums[-1] + 1):
        result.append(i)
    return result

# https://www.codewars.com/kata/59441520102eaa25260000bf

def unusual_five():
    return len('hello')

# 6kyu

# https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

def duplicate_encode(word):
    word = word.lower()
    result = ""
    for char in word:
        if word.count(char) > 1:
            result = result + ")"
        else:
            result = result + "("
    return result
# 7kyu

# 1

# https://www.codewars.com/kata/55f2b110f61eb01779000053

def get_sum(a,b):
    min_num = min(a,b)
    max_num = max(a,b)
    sum = 0
    for num in range(min_num, max_num + 1):
        sum += num
    return sum

# 2

# https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/python

def number(lines):
    result = [] 
    for index in range(len(lines)):
        word = str(index + 1) + ": " + lines[index]
        result.append(word)
    return result

# 6kyu

# 3

# https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python

def is_pangram(st):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    st = st.lower()
    for char in alphabet:
        if char not in st:
            return False
    return True

# 4

# https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/python

def wave(people):
    result = []
    for i in range(len(people)):
        if people[i] != " ":
            word = people[0:i] + people[i].upper() + people[i + 1:]
            result.append(word)
    return result
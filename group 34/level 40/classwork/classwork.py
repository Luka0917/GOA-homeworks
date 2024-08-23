# 1

# https://www.codewars.com/kata/5966e33c4e686b508700002d

def sum_str(a, b):
    if a == "" and b == "":
        return str(0)
    elif a != "" and b == "":
        return a
    elif a == "" and b != "":
        return b
    else:
        return str(int(a) + int(b))
    
# 2

# https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/python

def flick_switch(lst):
    mylist = []
    for_flick = True
    for i in lst:
        if i == 'flick':
            for_flick = not for_flick
            mylist.append(for_flick)
        else:
            mylist.append(for_flick)
    return mylist

# 3

# https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/python

def open_or_senior(data):
    ans = []
    for i in data:
        if i[0] >= 55 and i[1] > 7:
            ans.append('Senior')
        else:
            ans.append('Open')
    return ans

# 4 

# https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/python

def is_anagram(test, original):
    test = test.lower()
    original = original.lower()
    return sorted(test) == sorted(original)

# 5

# https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/python

def is_isogram(string):
    string = string.lower()
    for word in string:
        if string.count(word) > 1:
            return False
    return True

# 6

# https://www.codewars.com/kata/56747fd5cb988479af000028/train/python

def get_middle(s):
    if len(s) % 2 == 0:
        return s[len(s) // 2 - 1] + s[len(s) // 2]
    else:
        return s[int(len(s) / 2)]
    
# 7

# https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/python

def remove_url_anchor(url):
    if "#" in url:
        ind = url.index("#")
        return url[:ind]
    else:
        return url
    
# 8

# https://www.codewars.com/kata/55908aad6620c066bc00002a/train/python

def xo(s):
    s = s.lower()
    return s.count("x") == s.count("o")
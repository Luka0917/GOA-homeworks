# 7kyu

# https://www.codewars.com/kata/52dbae61ca039685460001ae/train/python 

def change(st):
    st = st.lower()
    result = ''
    for i in range(26):
        letter = chr(ord('a') + i)
        if letter in st:
            result += '1'
        else:
            result += '0'
    return result
# 7kyu

# https://www.codewars.com/kata/56684677dc75e3de2500002b/train/python

def comfortable_word(word):
   left = [c in 'qwertasdfgzxcvb' for c in word[::2]]
   right = [c in 'yuiophjklnm' for c in word[1::2]]
   return (all(left) and all(right)) or (not any(left) and not any(right))
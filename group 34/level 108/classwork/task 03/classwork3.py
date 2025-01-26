def longest_unique(word):
    start = 0
    max_len = 0
    substring = ""
    seen = {}
    for i, letter in enumerate(word):
        if letter in seen and seen[letter] >= start:
            start = seen[letter] + 1
        seen[letter] = i
        current_len = i - start + 1
        if current_len > max_len:
            max_len = current_len
            substring = word[start:i+1]
    return substring

print(longest_unique("aaaaaa")) # a
print(longest_unique("abcabbbca")) # abc
def func(text):
    vowels = "aeiou"
    longest_sequence = ""
    current_sequence = ""
    for i in text:
        if i.lower() in vowels:
            current_sequence += i
            if len(current_sequence) > len(longest_sequence):
                longest_sequence = current_sequence
        else:
            current_sequence = ""
    return longest_sequence
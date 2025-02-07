def get_first_unique(text):
    text = text.lower()
    for i in text:
        if text.count(i) == 1:
            return i
    return None
    
print(get_first_unique("ccattc"))
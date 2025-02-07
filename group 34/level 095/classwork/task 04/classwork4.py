def unique_letter(text):
    text = text.lower()
    for i in text:
        if text.count(i) > 1:
            return False
        return True
    
print(unique_letter("cat"))
print(unique_letter("catC"))
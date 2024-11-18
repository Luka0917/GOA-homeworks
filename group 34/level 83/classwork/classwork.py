import random

def password_function(length = 8, symbols = ["!", "@", "#", "$", "%", "&", "*"], numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]):
    password = ""
    for i in range(4):
        password_symbols = random.choice(symbols)
        password_numbers = random.choice(numbers)
        password += password_symbols
        password += password_numbers
    print(password)

password_function()
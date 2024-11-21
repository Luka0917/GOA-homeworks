import random

def password_function(length = random.randint(4, 8), symbols = ["!", "@", "#", "$", "%", "&", "*"], numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]):
    password = ""
    for i in range(int(length / 2)):
        password_symbols = random.choice(symbols)
        password_numbers = random.choice(numbers)
        password += password_symbols
        password += password_numbers
    return password

print(password_function())
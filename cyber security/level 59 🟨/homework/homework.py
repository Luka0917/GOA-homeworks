secret_pin = input("Enter your 4 digit pin: ")

possible_pins = [
    "1234", "1111", "0000", "1212", "7777", "1004", "2000", "4444",
    "2222", "6969", "9999", "3333", "5555", "6666", "1122", "1313",
    "8888", "4321", "1010", "9876", "2468", "1357", "2580", "4242"
]

attempts = 0
found = 0

while attempts < len(possible_pins):
    guess = possible_pins[attempts]
    attempts = attempts + 1
    if guess == secret_pin:
        print("PIN found!")
        print(f"Attemps: {attempts}")
        found = True
        break

if found == 0:
    print("PIN not found!")
    print(f"Attempts: {attempts}")
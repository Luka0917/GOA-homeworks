running = True
while running:
    num1 = input("Enter number one (or exit to quit):")
    num2 = input("Enter number two (or exit to quit):")
    if num1.lower() == "exit" or num2.lower() == "exit":
        running = False
    else:
        num1 = int(num1)
        num2 = int(num2)
        print(f"Result: {num1 * num2}")
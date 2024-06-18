print("----- 1 -----")

for i in range(10, 21):
    print(i)

print("----- 2 -----")

for i in range(10):
    print(i)

print("----- 3 -----")

even_numbers = []

for number in range(0, 101):
    if number % 2 == 0:
        even_numbers.append(number) 
        
print("Even numbers from 0 to 100 are:")
for even_number in even_numbers:
    print(even_number)

print("----- 4 -----")

num = int(input("Enter number:"))

print(num > 0)
print(num < 0)
print(num == 0)

print("----- 5 -----")

age = int(input("How old are you?:"))

if age > 18:
    print("you are adult")
else:
    print("you are virgin")

print("----- 6 -----")

number = int(input("enter number below 8:"))
if number == 1:
    print("Monday")
if number == 2:
    print("Tuesday")
if number == 3:
    print("Wednesday")
if number == 4:
    print("Thursday")
if number == 5:
    print("Friday")
if number == 6:
    print("Saturday")
if number == 7:
    print("Sunday")
print("----- 1 -----")

num = []

for i in range(11):
    num.append(i)

print(num)
print(len(num))

print("----- 2 -----")

num1 = int(input("enter number1:"))
num2 = int(input("enter number2:"))

numbers = []

for i in range(num1, num2):
    numbers.append(i)

print(numbers)

print("----- 3 -----")

start = int(input("Please enter start number: "))
end = int(input("Please enter end number: "))

numbers = []

for i in range(start, end):
    numbers.append(i)

print(min(numbers))
print(max(numbers))
print(sum(numbers))

print("----- 4 -----")

count = int(input("Please enter quantity of how many numbers do you want to enter: "))

numbers = []

for i in range(count):
    num = int(input("Please enter number: "))
    numbers.append(num)

print(sum(numbers))

print("----- 5 -----")

cars = ["bmw", "mercedes", "pagani", "bugati", "mazerati"]

print(cars[0:3])
print(cars[2:5])

print(cars[len(cars) - 3])
print(cars[len(cars) - 4])

print("----- 6 -----")

names = ["luka", "luka", "giorgi", "nika", "saba"]

for name in names:
    print(name)
    if name == "luka":
        print("hello administrator")
    else:
        print("hello user")
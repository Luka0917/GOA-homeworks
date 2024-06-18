print("---------- WHILE LOOP ----------")
print("----- 1 -----")

num = 1
while num <= 10:
    print(num)
    num += 1

print("----- 2 -----")

num = 2
while num <= 10:
    print(num)
    num += 2

print("----- 3 -----")

passkey = 0
while passkey != 7:
    passkey = int(input("enter passkey:"))

print("----- 4 -----")

num = 5
while num > 0:
    print(num)
    num -=1

print("----- 5 -----")

num = 0
while num < 100:
    print("GOA is the best!")
    num = num +1

print("---------- FOR LOOP ----------")
print("----- 1 -----")

for i in range(10):
    print(i)

print("----- 2 -----")

name = "luka"
for i in range(10):
    print(name)

print("----- 3 -----")

name = input("what is your name?:")
for i in range(10):
    print(name)

print("----- 4 -----")

number = input("enter number:")
for i in range(10):
    print(int(number) + 1)

print("----- 5 -----")

for i in range(10):
    print(2 * 5)

print("---------- IF-ELSE ----------")
print("----- 1 -----")

num = int(input("enter number:"))

if num > 0:
    print("Number is positive")
else:
    print("Number is negative")

print("----- 2 -----")

ans = int(input("what is 5 + 5 ?:"))
if ans == 10:
    print("good job!")
else:
    print("false!")

print("----- 3 -----")

ans = input("are you signed up?:")
if ans == "yes":
    print("you are in")
else:
    print("please sign up")

print("----- 4 -----")

ans = input("which one GOA or novator?:")
if ans == "goa":
    print("Woohooo!")
else:
    print("GET OUT!!!")

print("----- 5 -----")

num1 = int(input("enter number1:"))
num2 = int(input("enter number2:"))

if num1 > num2:
    print("num1 is greater than num2")
else:
    print("num2 is greater than num1")
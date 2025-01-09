print("----- 1 -----")

for i in range(21):
    print(i)

print("----- 2 -----")

num = int(input("enter number:"))

if num % 2 == 0:
    print("number is even")
else:
    print("number is odd")

print("----- 3 -----")

for num in range(21):
    if num % 2 == 0:
        print(num)

print("----- 4 -----")

for i in range(50, 101):
    num = i + (i +1)
    print(num)

print("----- 4 -----")

for num in range(1, 51):
    if num % 5 == 0:
        print(num)

print("----- 5 -----")

for i in range(5, 11):
    num = i * (i + 1)
    print(num)
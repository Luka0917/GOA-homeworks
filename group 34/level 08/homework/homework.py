num = 3

print("----- > -----")

print(num > 4) # False
print(num > 6) # False
print(num > 5) # False
print(num > 2) # True
print(num > 9) # False

print("----- < -----")

print(num < 8) # True
print(num < 5) # True
print(num < 1) # False
print(num < 4) # True
print(num < 7) # True

print("----- == -----")

print(num == 3) # True
print(num == 4) # False
print(num == 6) # False
print(num == 0) # False
print(num == 1) # False

print("----- >= -----")

print(num >= 4) # False
print(num >= 7) # False
print(num >= 6) # False
print(num >= 2) # True
print(num >= 9) # False

print("----- <= -----")

print(num <= 5) # True
print(num <= 3) # True
print(num <= 1) # False
print(num <= 8) # True
print(num <= 6) # True

print("----- != -----")

print(num != 3) # False
print(num != 7) # True
print(num != 9) # True
print(num != 1) # True
print(num != 4) # True

print("----- AND -----")

print(num > 3 and num > 10) # False
print(num < 3 and num < 10) # False
print(num >= 3 and num <= 10) # True
print(num <= 3 and num >= 10) # False
print(num > 3 and num < 10) # True
print(num == 3 and num == 10) # False
print(num != 4 and num != 10) # False
print(num > 2 and num < 7) # True
print(num >= 4 and num <= 10) # False
print(num != 1 and num != 2) # True

print("----- OR -----")

print(num > 3 or num > 10) # True
print(num < 3 or num < 10) # True
print(num >= 3 or num <= 10) # True
print(num <= 3 or num >= 10) # False
print(num > 3 or num < 10) # True
print(num == 3 or num == 10) # False
print(num != 4 or num != 10) # False
print(num > 2 or num < 7) # True
print(num >= 4 or num <= 10) # False
print(num != 1 or num != 2) # True
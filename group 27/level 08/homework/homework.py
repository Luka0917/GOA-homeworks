#2

num = 5

# and ოპერატორის შემთხვევაში ორივე მონაცემი უნდა იყოს დაკმაყოფილებული

print(True and True) # True აქ ორივე დაკმაყოფილებულია ამიტომ იქნება True
print(True and False) # False აქ მხოლოდ ერთია დაკმაყოფილებული და ამიტომ იქნება False
print(False and True) # False აქ მხოლოდ ერთია დაკმაყოფილებული და ამიტომ იქნება False
print(False and False) # False აქ არცერთი არის დაკმაყოფილებული ამიტომ იქნება False

# or ოპერატორის შემთხვევაში ერთერთი მონაცემი მაინც უნდა იყოს დაკმაყოფილებული

print(True or True) # True აქ ორივე დაკმაყოფილებულია ამიტომ იქნება True
print(True or False) # True აქ ერთია დაკმაყოფილებული ამიტომ იქნება True
print(False or True) # True აქ ერთია დაკმაყოფილებული ამიტომ იქნება True
print(False or False) # False აქ არცერთი არის დაკმაყოფილებული ამიტომ იქნება False

print("----------- AND -----------")

print(num >= 1 and num <= 10) # True აქ 5 მეტია 1-ზე და ნაკლებია 10-ზე ანუ ორივე მონაცემს აკმაყოფილებს, ამიტომ არის True
print(num >= 1 and num <= 4) # False აქ 5 მეტია 1-ზე და მეტია 4-ზე ანუ მარტო ერთ მონაცემს აკმაყოფილებს, ამიტომ არის False
print(num > 5 and num <= 10) # False აქ 5 არ არის მეტი 5-ზე და ნაკლებია 10-ზე ანუ მარტო ერთ მონაცემს აკმაყოფილებს, ამიტომ არის False
print(num > 5 and num > 10) # False აქ 5 არ არის მეტი 5-ზე და მეტი 10-ზე ანუ არცერთ მონაცემს აკმაყოფილებს, ამიტომ არის False

print("----------- OR -----------")

print(num >= 1 or num <= 10) # True აქ 5 მეტია 1-ზე და ნაკლებია 10-ზე ანუ მარტო ერთ მონაცემს აკმაყოფილებს, ამიტომ იქნება True
print(num >= 1 or num <= 4) # True აქ 5 მეტია 1-ზე  და მეტია 4-ზე ანუ მარტო ერთ მონაცემს აკმაყოფილებს, ამიტომ იქნება True
print(num > 5 or num <= 10) # True აქ 5 არ არის მეტი 5-ზე მაგრამ არის 10-ზე ნაკლები ანუ მარტო ერთ მონაცემს აკმაყოფილებს, ამიტომ არის True
print(num > 5 or num > 10) # False აქ 5 არ არის მეტი 5-ზე და მეტი 10-ზე ანუ არცერთ მონაცემს აკმაყოფილებს, ამიტომ არის False

#3

print("----------- 3 -----------")

num = 8

print(num > 3 and num > 10) # False
print(num < 3 and num < 10) # False
print(num >= 3 and num <= 10) # True
print(num <= 3 and num >= 10) # False
print(num > 3 and num < 10) # True

print("")

print(num > 3 or num > 10) # True
print(num < 3 or num < 10) # True
print(num >= 3 or num <= 10) # True
print(num <= 3 or num >= 10) # False
print(num > 3 or num < 10) # True

#4

print("----------- 4 -----------")

num = 3
num1 = 7

print(num > num1)
print(num < num1)
print(num == num1)
print(num >= num1)
print(num <= num1)
def number(num):
    if num < 0:
        return num
    return num - (num * 2)
print(number(5) + 1)
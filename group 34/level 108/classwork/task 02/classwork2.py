def func(arg):
    for i in arg:
        if arg.count(i) == 1:
            return i
    return False

print(func("hannah")) # False
print(func("abbia")) # i
print(func([1, 2, 1, 2])) # False
print(func([1, 2, 1, 3])) # 3 
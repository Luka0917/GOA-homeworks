# 8kyu

# https://www.codewars.com/kata/56f3f6a82010832b02000f38

def describe_age(a): return"You're a(n) " + ("kid" if a<=12 else"teenager" if a<=17 else"adult" if a<=64 else"elderly")

# 7kyu

# https://www.codewars.com/kata/578fdcfc75ffd1112c0001a1

def bin_rota(arr):
    result = []
    for i, row in enumerate(arr):
        if i % 2 == 0:
            result.extend(row)
        else:
            result.extend(row[::-1])
    return result
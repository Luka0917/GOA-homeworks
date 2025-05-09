# 7kyu

# https://www.codewars.com/kata/5727868888095bdf5c001d3d

def string_to_int_list(s):
    result = []
    s = s.split(',')
    for i in s:
        cleaned = i.strip()
        if cleaned != '':
            result.append(int(cleaned))
    return result

# 8kyu

# https://www.codewars.com/kata/57a0885cbb9944e24c00008e

def remove_exclamation_marks(s):
    text = ""
    for word in s:
        if word != "!":
            text += word
    return text

# https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

def remove_every_other(my_list):
    result = []
    for i in range(len(my_list)):
        if i % 2 == 0:
            result.append(my_list[i])
    return result
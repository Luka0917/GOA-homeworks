# 6kyu

# https://www.codewars.com/kata/5266876b8f4bf2da9b000362

def likes(names):
    ln = len(names) 
    
    if ln == 0:
        return "no one likes this"
    elif ln == 1:
        return names[0] + " likes this"
    elif ln == 2:
        return names[0] + " and " + names[1] + " like this"
    elif ln == 3:
        return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    else:
        return names[0] + ", " + names[1] + " and " + str(ln - 2) + " others like this"
    
# https://www.codewars.com/kata/523f5d21c841566fde000009

def array_diff(a, b):
    result = []
    for i in a:
        if i not in b:
            result.append(i)
    return result 
# 7kyu

# https://www.codewars.com/kata/54b81566cd7f51408300022d 

def word_search(query, seq):
    query = query.lower()
    result = []
    for i in seq:
        if query in i.lower():
            result.append(i)
    if not result:
        return ['None']
    return result

# https://www.codewars.com/kata/5aca48db188ab3558e0030fa

def calc_type(a, b, res):
    if a + b == res:
        return "addition"
    elif a - b == res:
        return "subtraction"
    elif a * b == res:
        return "multiplication"
    elif a / b == res:
        return "division"
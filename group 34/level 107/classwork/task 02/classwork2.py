# 7kyu

# https://www.codewars.com/kata/6071ef9cbe6ec400228d9531

def calculator(txt):
    left, operator, right = txt.split()

    left_value = len(left)
    right_value = len(right)
    
    if operator == "+":
        result = left_value + right_value
    elif operator == "-":
        result = left_value - right_value
    elif operator == "*":
        result = left_value * right_value
    elif operator == "//":
        result = left_value // right_value

    return "." * result if result > 0 else ""
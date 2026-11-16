# https://www.codewars.com/kata/5aba780a6a176b029800041c/train/python

def max_multiple(divisor, bound):
    return (bound // divisor) * divisor

# https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/python

def bouncing_ball(h, bounce, window):
    rebounds = -1
    if 0 < bounce < 1:
        while h > window:
            rebounds += 2
            h *= bounce
    return rebounds

# https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/python

def valid_braces(string):
    stack = []
    pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for char in string:
        if char in "([{":
            stack.append(char)
        else:
            if not stack or stack[-1] != pairs[char]:
                return False
            stack.pop()
    return len(stack) == 0
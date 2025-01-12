# 7 kyu

# https://www.codewars.com/kata/5750699bcac40b3ed80001ca/train/python

def match(usefulness, months):
    points = sum(usefulness)
    month = 100 * (0.85 ** months)
    if points >= month:
        return "Match!"
    else:
        return "No match!"
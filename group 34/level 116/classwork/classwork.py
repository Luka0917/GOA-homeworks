# 7kyu

# https://www.codewars.com/kata/555eded1ad94b00403000071 

def series_sum(n):
    if n == 0:
        return '0.00'
    result = 0
    for i in range(n):
        result += 1 / (1 + i * 3)
    return f"{result:.2f}"
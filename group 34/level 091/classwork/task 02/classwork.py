# 7 kyu

# https://www.codewars.com/kata/5a34da5dee1aae516d00004a/train/python

def get_matrix(n):
    result = []
    for i in range(n):
        row = []
        for j in range(n):
            if i == j:
                row.append(1)
            else:
                row.append(0)
        result.append(row)
    return result
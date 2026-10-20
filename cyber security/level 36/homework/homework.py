# https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/python

def parse(data):
    value = 0
    result = []
    for i in data:
        if i == 'i':
            value += 1
        elif i == 'd':
            value -= 1
        elif i == 's':
            value **= 2
        elif i == 'o':
            result.append(value)
    return result

# https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/python

def multiplication_table(size):
    table = []
    for i in range(1, size + 1):
        row = []
        for j in range(1, size + 1):
            row.append(i * j)
        table.append(row)
    return table

# https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/python

def stock_list(stocklist, categories):
    if not stocklist or not categories: return ""
    result = []
    for i in categories:
        total = 0
        for j in stocklist:
            code, quantity = j.split()
            if code[0] == i:
                total += int(quantity)
        result.append(f"({i} : {total})")
    return " - ".join(result)
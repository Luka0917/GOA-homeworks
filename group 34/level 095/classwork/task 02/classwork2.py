# X --- Red
# O --- Yellow

def check_winner(arr):
    rows, columns = len(arr), len(arr[0])

    def check_line(line):
        count = 0
        last = ""
        for i in line:
            if i == last and i in ("X", "O"):
                count += 1
                if count == 3:
                    return i
            else:
                count = 1 if i in ("X", "O") else 0
            last = i
        return None

    for x in arr:
        winner = check_line(x)
        if winner:
            return winner

    for y in range(columns):
        column = [arr[x][y] for x in range(rows)]
        winner = check_line(column)
        if winner:
            return winner

    return None

a = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
]

print(check_winner(a))
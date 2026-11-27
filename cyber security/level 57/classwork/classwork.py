# https://www.codewars.com/kata/58663693b359c4a6560001d6/train/python

def maze_runner(maze, directions):
    n = len(maze)
    for r in range(n):
        for c in range(n):
            if maze[r][c] == 2:
                x, y = r, c
    moves = {
        "N": (-1, 0),
        "E": (0, 1),
        "S": (1, 0),
        "W": (0, -1)
    }
    for direction in directions:
        dx, dy = moves[direction]
        x += dx
        y += dy
        if x < 0 or x >= n or y < 0 or y >= n:
            return "Dead"
        if maze[x][y] == 1:
            return "Dead"
        if maze[x][y] == 3:
            return "Finish"
    return "Lost"

# https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/python

def longest_repetition(chars):
    if not chars:
        return ('', 0)
    longest_char = chars[0]
    longest_count = 1
    current_char = chars[0]
    current_count = 1
    for char in chars[1:]:
        if char == current_char:
            current_count += 1
        else:
            current_char = char
            current_count = 1
        if current_count > longest_count:
            longest_count = current_count
            longest_char = current_char
    return (longest_char, longest_count)

# https://www.codewars.com/kata/58223370aef9fc03fd000071/train/python

def dashatize(n):
    n = str(abs(n))
    result = ""
    for digit in n:
        if digit.isdigit() and int(digit) % 2 == 1:
            result += "-" + digit + "-"
        else:
            result += digit
    return result.strip("-").replace("--", "-")
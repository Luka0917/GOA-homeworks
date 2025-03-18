# 7kyu

# https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

def row_weights(array):
    team_1 = 0
    team_2 = 0
    for i in range(len(array)):
        if i % 2 == 0:
            team_1 += array[i]
        else:
            team_2 += array[i]
    return (team_1, team_2)

# 7kyu

# https://www.codewars.com/kata/563cf89eb4747c5fb100001b/python

def remove_smallest(numbers):
    if len(numbers) <= 1:
        return []
    min_index = numbers.index(min(numbers))
    return numbers[:min_index] + numbers[min_index + 1:]

# 6kyu

# https://www.codewars.com/kata/5645d1a4d907bd6009000052

def fizz_buzz_factory(arr):
    def func(n):
        for i in reversed(arr):
            if n % i[0] == 0:
                return i[1]
        return str(n)
    return func

# 5kyu

# https://www.codewars.com/kata/52685f7382004e774f0001f7/train/python

def make_readable(seconds):
    h = seconds // 3600
    m = (seconds % 3600) // 60
    s = seconds % 60
    return f"{h:02}:{m:02}:{s:02}"

# https://www.codewars.com/kata/52449b062fb80683ec000024

def generate_hashtag(s):
    s = s.strip()
    if not s:
        return False
    s = s.split()
    cap_words = []
    for i in s:
        cap_words.append(i.capitalize())
    result = "#" + "".join(cap_words)
    if len(result) > 140:
        return False
    return result
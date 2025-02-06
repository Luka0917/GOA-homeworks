# 7kyu

# https://www.codewars.com/kata/5648b12ce68d9daa6b000099

def number(bus_stops):
    people_on_bus = 0
    for stop in bus_stops:
        people_on_bus += stop[0]
        people_on_bus -= stop[1]
    return people_on_bus

# 8kyu

# https://www.codewars.com/kata/563e320cee5dddcf77000158

def get_average(marks):
    return int(sum(marks) // len(marks))

# 8kyu

# https://www.codewars.com/kata/57a0885cbb9944e24c00008e

def remove_exclamation_marks(s):
    text = ""
    for word in s:
        if word != "!":
            text += word
    return text

# 8kyu

# https://www.codewars.com/kata/568d0dd208ee69389d000016

def rental_car_cost(d):
    if d >= 3 and d <= 6:
        return (d * 40) - 20
    elif d >= 7:
        return (d * 40) - 50
    else:
        d < 3
        return d * 40
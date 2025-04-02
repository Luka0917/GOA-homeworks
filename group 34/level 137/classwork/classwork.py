# 7kyu

# https://www.codewars.com/kata/595519279be6c575b5000016

def battle(group1, group2):
    def func(group):
        total_power = 0
        for i in group:
            total_power += ord(i) - ord('A') + 1
        return total_power
    
    group1_power = func(group1)
    group2_power = func(group2)
    
    if group1_power > group2_power:
        return group1
    elif group2_power > group1_power:
        return group2
    else:
        return "Tie!"
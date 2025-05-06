# 7kyu

# https://www.codewars.com/kata/5b5604e26dc79e6832000101

# function invertHash(hash){
#   result = {}
#   for(let i in hash){
#     let value = hash[i];
#     result[value] = i;
#   }
#   return result
# }

# https://www.codewars.com/kata/558445a88826e1376b000011/train/python

def age(x, y):
    return y * x / (y - 1)

# https://www.codewars.com/kata/55a3cb91d1c9ecaa2900001b

def strong_enough(earthquake, age):
    shockwave_sums = []
    for shockwave in earthquake:
        total = 0
        for tremor in shockwave:
            total += tremor
        shockwave_sums.append(total)
    magnitude = 1
    for value in shockwave_sums:
        magnitude *= value
    strength = 1000 * (0.99 ** age)
    if strength >= magnitude:
        return "Safe!"
    else:
        return "Needs Reinforcement!"
    
# 8kyu
    
# https://www.codewars.com/kata/55acfc59c3c23d230f00006d

def get_ascii(ch):
    return ord(ch)
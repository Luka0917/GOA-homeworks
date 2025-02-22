# 8kyu

# https://www.codewars.com/kata/568dcc3c7f12767a62000038

def set_alarm(employed, vacation):
    return True if employed == True and vacation == False else False
    
# https://www.codewars.com/kata/58649884a1659ed6cb000072 

def update_light(current):
    return 'yellow' if current == 'green' else 'red' if current == 'yellow' else 'green'
    
# 6kyu

# https://www.codewars.com/kata/550498447451fbbd7600041c

def comp(array1, array2):
    if array1 is None or array2 is None:
        return False
    arr1 = sorted(array1)
    arr2 = sorted(array2)
    result = []
    for i in arr1:
        result.append(i ** 2)
    return result == arr2
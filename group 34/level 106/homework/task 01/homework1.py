# 5kyu

# https://www.codewars.com/kata/529b418d533b76924600085d

def to_underscore(strng: str) -> str:
    if isinstance(strng, int):
        return str(strng)
    result = []
    for char in strng:
        if char.isupper():
            if result:
                result.append('_')
            result.append(char.lower())
        else:
            result.append(char)
    return ''.join(result)
# https://www.codewars.com/kata/539de388a540db7fec000642/train/python

def check_coupon(entered_code, correct_code, current_date: str, expiration_date: str) -> bool:
    months = {
        "January": "01", "February": "02", "March": "03",
        "April": "04", "May": "05", "June": "06",
        "July": "07", "August": "08", "September": "09",
        "October": "10", "November": "11", "December": "12"
    }
    def convert_date(date):
        month, day, year = date.replace(",", "").split(" ")
        return year + months[month] + day.zfill(2)
    return (
        entered_code == correct_code
        and type(entered_code) == type(correct_code)
        and convert_date(current_date) <= convert_date(expiration_date)
    )

# https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/python

def remove_duplicate_words(s):
    result =[]
    words = s.split(" ")
    for word in words:
        if word not in result:
            result.append(word)
    return ' '.join(result)

# https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/python

def solution(n):
    values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ]
    symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ]
    result = ""
    for i in range(len(values)):
        while n >= values[i]:
            result += symbols[i]
            n -= values[i]
    return result

# https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/python

def sum_dig_pow(a, b):
    result = []
    for i in range(a, b + 1):
        total = 0
        position = 1
        for x in str(i):
            total += int(x) ** position
            position += 1
        if total == i:
            result.append(i)
    return result

# https://www.codewars.com/kata/51b6249c4612257ac0000005/train/python

def solution(roman: str) -> int:
    values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    result = 0
    for i in range(len(roman)):
        if i + 1 < len(roman) and values[roman[i]] < values[roman[i + 1]]:
            result -= values[roman[i]]
        else:
            result += values[roman[i]]
    return result
# 8kyu

# https://www.codewars.com/kata/55edaba99da3a9c84000003b

def divisible_by(numbers, divisor):
    result = []
    for num in numbers:
        if num % divisor == 0:
            result.append(num)
    return result

# https://www.codewars.com/kata/563b74ddd19a3ad462000054

def stringy(size):
    result = ""
    for i in range(size):
        if i % 2 == 0:
            result += "1"
        else:
            result += "0"
    return result

# 7kyu

# https://www.codewars.com/kata/525f039017c7cd0e1a000a26

# var palindromeChainLength = function(n) {
#   let steps = 0;
#   function isPalindrome(num) {
#     const str = num.toString();
#     return str === str.split('').reverse().join('');
#   }
#   while (!isPalindrome(n)) {
#     const reversed = parseInt(n.toString().split('').reverse().join(''), 10);
#     n += reversed;
#     steps++;
#   }
#   return steps;
# };

# 6kyu

# https://www.codewars.com/kata/515decfd9dcfc23bb6000006

def is_valid_IP(strng):
    splited_arr = strng.split(".")
    for i in splited_arr:
        if i.isdigit() == False or len(splited_arr) != 4:
            return False
        if i.startswith("0") and len(i) > 1 or int(i) > 255:
            return False
    return True
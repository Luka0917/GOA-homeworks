# 8kyu

# https://www.codewars.com/kata/57cff961eca260b71900008f

def is_vow(inp):
    return [chr(i) if i in (97, 101, 105, 111, 117) else i for i in inp]

# https://www.codewars.com/kata/570e8ec4127ad143660001fd

def billboard(name, price=30):
    result = 0
    for i in range(len(name)):
        result += price
    return result

# https://www.codewars.com/kata/58bf9bd943fadb2a980000a7

def who_is_paying(name):
    return [name] if len(name) <= 2 else [name, name[:2]]

# https://www.codewars.com/kata/55eea63119278d571d00006a

def next_id(arr):
    i = 0
    while i in arr:
        i += 1
    return i

# https://www.codewars.com/kata/5721a78c283129e416000999

# function pickIt(arr){
#   let odd = [], even = [];
#   for(let i = 0; i < arr.length; i++){
#     if(arr[i] % 2 !== 0){
#       odd.push(arr[i]);
#     }else{
#       even.push(arr[i]);
#     };
#   };
#   return [odd, even];
# };
# https://leetcode.com/problems/reshape-the-matrix/

class Solution(object):
    def matrixReshape(self, mat, r, c):
        """
        :type mat: List[List[int]]
        :type r: int
        :type c: int
        :rtype: List[List[int]]
        """
        arr = []
        for i in range(len(mat)):
            for x in range(len(mat[i])):
                arr.append(mat[i][x])
        result = []
        index = 0
        for w in range(r):
            res_row = []
            for j in range(c):
                res_row.append(arr[index])
                index += 1
            result.append(res_row)
        return result
    
# https://leetcode.com/problems/fizz-buzz/

class Solution(object):
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        result = []
        for i in range(1, n+1):
            if i % 3 == 0 and i % 5 == 0: result.append("FizzBuzz")
            elif i % 3 == 0: result.append("Fizz")
            elif i % 5 == 0: result.append("Buzz")
            else: result.append(str(i))
        return result
    
# https://leetcode.com/problems/length-of-last-word/

class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        s = s.strip()
        s = s.split(" ")
        return len(s[-1])
    
# https://leetcode.com/problems/plus-one/submissions/1832377174/

class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        number = ""
        for i in range(len(digits)):
            number += str(digits[i])
        number = str(int(number) + 1)
        result = []
        for x in range(len(number)):
            result.append(int(number[x]))
        return result
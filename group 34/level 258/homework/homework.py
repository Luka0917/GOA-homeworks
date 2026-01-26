# 231. Power of Two
# https://leetcode.com/problems/power-of-two/description

class Solution(object):
    def isPowerOfTwo(self, n):
        """
        :type n: int
        :rtype: bool
        """
        if n <= 0: return False
        while n % 2 == 0:
            n //= 2
        return n == 1
    
# 1920. Build Array from Permutation
# https://leetcode.com/problems/build-array-from-permutation/description

class Solution(object):
    def buildArray(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result = []
        for i in nums:
            result.append(nums[i])
        return result
    
# 2235. Add Two Integers
# https://leetcode.com/problems/add-two-integers/description

class Solution(object):
    def sum(self, num1, num2):
        """
        :type num1: int
        :type num2: int
        :rtype: int
        """
        return num1 + num2
    
# 2011. Final Value of Variable After Performing Operations
# https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description

class Solution(object):
    def finalValueAfterOperations(self, operations):
        """
        :type operations: List[str]
        :rtype: int
        """
        x = 0
        for i in operations:
            if '+' in i:
                x += 1
            else:
                x -= 1
        return x
    
# 1281. Subtract the Product and Sum of Digits of an Integer
# https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description

class Solution(object):
    def subtractProductAndSum(self, n):
        """
        :type n: int
        :rtype: int
        """
        product = 1
        total = 0
        for i in str(n):
            product *= int(i)
            total += int(i)
        return product - total
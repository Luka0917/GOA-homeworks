# 6. Zigzag Conversion
# https://leetcode.com/problems/zigzag-conversion/description/

class Solution(object):
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        if numRows == 1 or numRows >= len(s): return s
        rows = [""] * numRows
        curr_row = 0
        direction = 1
        for char in s:
            rows[curr_row] += char
            if curr_row == 0:
                direction = 1
            elif curr_row == numRows - 1:
                direction = -1
            curr_row += direction
        return "".join(rows)
    

# 31. Next Permutation
# https://leetcode.com/problems/next-permutation/description/

class Solution(object):
    def nextPermutation(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        i = n - 2
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1
        if i >= 0:
            j = n - 1
            while nums[j] <= nums[i]:
                j -= 1
            nums[i], nums[j] = nums[j], nums[i]
        left, right = i + 1, n - 1
        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1


# 7. Reverse Integer
# https://leetcode.com/problems/reverse-integer/description/

class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        INT_MIN = -2**31
        INT_MAX = 2**31 - 1
        sign = -1 if x < 0 else 1
        x = abs(x)
        reversed_num = 0
        while x != 0:
            digit = x % 10
            x //= 10
            if reversed_num > (INT_MAX - digit) // 10:
                return 0
            reversed_num = reversed_num * 10 + digit
        return sign * reversed_num
    

# 8. String to Integer (atoi)
# https://leetcode.com/problems/string-to-integer-atoi/description/

class Solution(object):
    def myAtoi(self, s):
        """
        :type s: str
        :rtype: int
        """
        INT_MIN = -2**31
        INT_MAX = 2**31 - 1
        i = 0
        n = len(s)
        sign = 1
        result = 0
        while i < n and s[i] == ' ':
            i += 1
        if i < n and (s[i] == '+' or s[i] == '-'):
            if s[i] == '-':
                sign = -1
            i += 1
        while i < n and s[i].isdigit():
            digit = ord(s[i]) - ord('0')
            if result > (INT_MAX - digit) // 10:
                return INT_MAX if sign == 1 else INT_MIN
            result = result * 10 + digit
            i += 1
        return sign * result
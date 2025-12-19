# 169. Majority Element
# https://leetcode.com/problems/majority-element/description/

class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        count = 0
        candidate = None
        for i in nums:
            if count == 0:
                candidate = i
            if i == candidate:
                count += 1
            else:
                count -= 1
        return candidate
    

# 242. Valid Anagram
# https://leetcode.com/problems/valid-anagram/description/

class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        return sorted(s) == sorted(t)
    

# 771. Jewels and Stones
# https://leetcode.com/problems/jewels-and-stones/description/

class Solution(object):
    def numJewelsInStones(self, jewels, stones):
        """
        :type jewels: str
        :type stones: str
        :rtype: int
        """
        count = 0
        for i in stones:
            if i in jewels:
                count += 1
        return count
    
# 1108. Defanging an IP Address
# https://leetcode.com/problems/defanging-an-ip-address/description/

class Solution(object):
    def defangIPaddr(self, address):
        """
        :type address: str
        :rtype: str
        """
        return address.replace(".", "[.]")
    

# 1470. Shuffle the Array
# https://leetcode.com/problems/shuffle-the-array/description/

class Solution(object):
    def shuffle(self, nums, n):
        """
        :type nums: List[int]
        :type n: int
        :rtype: List[int]
        """
        result = []
        for i in range(n):
            result.append(nums[i])
            result.append(nums[i + n])
        return result
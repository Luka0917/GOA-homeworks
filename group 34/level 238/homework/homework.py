# https://leetcode.com/problems/reverse-string/

class Solution(object):
    def reverseString(self, s):
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.
        """
        start = 0
        end = len(s) - 1
        while start < end:
            s[start], s[end] = s[end], s[start]
            start += 1
            end -= 1
        return s
    
# https://leetcode.com/problems/running-sum-of-1d-array/

class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result = []
        current_sum = 0
        for i in range(len(nums)):
            current_sum += nums[i]
            result.append(current_sum)
        return result
    
# https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

class Solution(object):
    def mostWordsFound(self, sentences):
        """
        :type sentences: List[str]
        :rtype: int
        """
        max_words = 0
        for i in range(len(sentences)):
            words_len = len(sentences[i].split())
            if words_len > max_words:
                max_words = words_len
        return max_words
    
# https://leetcode.com/problems/number-of-good-pairs/

class Solution(object):
    def numIdenticalPairs(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        count = 0
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j]:
                    count += 1
        return count
    
# https://leetcode.com/problems/richest-customer-wealth/

class Solution(object):
    def maximumWealth(self, accounts):
        """
        :type accounts: List[List[int]]
        :rtype: int
        """
        max_wealth = 0
        for i in range(len(accounts)):
            total = sum(accounts[i])
            if total > max_wealth:
                max_wealth = total
        return max_wealth
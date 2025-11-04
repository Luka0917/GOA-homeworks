# https://leetcode.com/problems/move-zeroes

class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None  Do not return anything, modify nums in-place instead.
        """
        last_non_zero = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[last_non_zero], nums[i] = nums[i], nums[last_non_zero]
                last_non_zero += 1

# https://leetcode.com/problems/contains-duplicate-ii

class Solution(object):
    def containsNearbyDuplicate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        last_index = {}
        for i, v in enumerate(nums):
            if v in last_index and i - last_index[v] <= k:
                return True
            last_index[v] = i
        return False
# https://leetcode.com/problems/group-anagrams/description/?envType=problem-list-v2&envId=hash-table

class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        groups = {}
        for i in range(len(strs)):
            key = ''.join(sorted(strs[i]))
            if key not in groups:
                groups[key] = []
            groups[key].append(strs[i])
        return groups.values()
    
# https://leetcode.com/problems/contains-duplicate/description/?envType=problem-list-v2&envId=hash-table

class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        numbers = set()
        for i in range(len(nums)):
            if nums[i] in numbers:
                return True
            numbers.add(nums[i])
        return False
    
# https://leetcode.com/problems/word-pattern/description/?envType=problem-list-v2&envId=hash-table

#! ???

# https://leetcode.com/problems/first-unique-character-in-a-string/description/?envType=problem-list-v2&envId=hash-table

#! ???

# https://leetcode.com/problems/find-the-difference/description/?envType=problem-list-v2&envId=hash-table

#! ???
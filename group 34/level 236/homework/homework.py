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

class Solution(object):
    def wordPattern(self, pattern, s):
        """
        :type pattern: str
        :type s: str
        :rtype: bool
        """
        words = s.split()

        if len(pattern) != len(words):
            return False

        char_to_word = {}
        word_to_char = {}

        for c, w in zip(pattern, words):
            if c in char_to_word:
                if char_to_word[c] != w:
                    return False
            else:
                char_to_word[c] = w
            if w in word_to_char:
                if word_to_char[w] != c:
                    return False
            else:
                word_to_char[w] = c
        return True

# https://leetcode.com/problems/first-unique-character-in-a-string/description/?envType=problem-list-v2&envId=hash-table

class Solution(object):
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        from collections import Counter
        
        count = Counter(s)
        for i, ch in enumerate(s):
            if count[ch] == 1:
                return i
        return -1

# https://leetcode.com/problems/find-the-difference/description/?envType=problem-list-v2&envId=hash-table

class Solution(object):
    def findTheDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        result = 0
        for ch in s + t:
            result ^= ord(ch)
        return chr(result)
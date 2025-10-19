def binary_search(arr, target):
    start = 0
    end = len(arr) - 1
    
    while start <= end:
        mid = (start + end) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            start = mid + 1
        else:
            end = mid - 1
    return -1

print(binary_search([1, 3, 5, 7, 9, 11], 7))



#^ Linear Search — ამოწმებს ყველა ელემენტს თანმიმდევრულად
#^ ეს ნიშნავს, რომ თუ სია დიდია, შეიძლება მოუწიოს ყველა ელემენტის გადამოწმება.
#^ მისი სირთულეა O(n), ანუ ძიების დრო იზრდება ელემენტების რაოდენობის პროპორციულად.

#& Binary Search — მუშაობს მხოლოდ დალაგებულ სიაზე
#& ის არ ამოწმებს ყველა ელემენტს.
#& ყოველ ნაბიჯზე სია იყოფა ორ ნაწილად,
#& და ძიება გრძელდება მხოლოდ იმ ნახევარში, სადაც ელემენტი შეიძლება იყოს.
#& ამიტომ მისი სირთულეა O(log n), რაც ბევრად უფრო სწრაფია დიდი მონაცემებისას.


# https://leetcode.com/problems/search-insert-position/?envType=problem-list-v2&envId=binary-search

class Solution(object):
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        start = 0
        end = len(nums) - 1
        while start <= end:
            mid = (start + end) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                start = mid + 1
            else:
                end = mid - 1
        return start
    

# https://leetcode.com/problems/sqrtx/description/?envType=problem-list-v2&envId=binary-search 

class Solution(object):
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """
        if x < 2: return x
        start = 0
        end = x // 2
        while start <= end:
            mid = (start + end) // 2
            if mid * mid == x:
                return mid
            elif mid * mid < x:
                start = mid + 1
            else:
                end = mid -1
        return end
    

# https://leetcode.com/problems/missing-number/description/?envType=problem-list-v2&envId=binary-search

class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        expected_sum = n * (n + 1) // 2
        actual_sum = sum(nums)
        return expected_sum - actual_sum
    

def reverse_binary_search(arr, target):
    start = 0
    end = len(arr) - 1
    
    while start <= end:
        mid = (start + end) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            start = mid + 1
        else:
            end = mid - 1
    return -1

print(reverse_binary_search([11, 9, 7, 5, 3, 1], 3))


import random

def guess_random_number(num):
    guess = int(input("Guess the number: "))
    while guess != num:
        if guess < num:
            print('Too low, give me higher number')
        else:
            print('Too high, give me lower number')
        guess = int(input("Guess the number: "))
    return f'That is correct! I chose the number: {num}'

print(guess_random_number(random.randint(0, 100)))


def country_binary_search(arr, target):
    start = 0
    end = len(arr) - 1

    while start <= end:
        mid = (start + end) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            start = mid + 1
        else:
            end = mid - 1
    return -1

print(country_binary_search(["Albania", "Belgium", "Canada", "Denmark", "France", "Germany", "Italy"], 'Canada'))
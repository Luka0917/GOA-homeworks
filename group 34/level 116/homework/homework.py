# 6kyu

# https://www.codewars.com/kata/52c31f8e6605bcc646000082

def two_sum(numbers, target):
    for i in range(len(numbers)):
        for x in range(len(numbers)):
            if i != x and numbers[i] + numbers[x] == target:
                return (i, x)
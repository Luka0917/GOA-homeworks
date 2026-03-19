-- 595. Big Countries
-- https://leetcode.com/problems/big-countries/description

-- Write your MySQL query statement below
SELECT name, population, area FROM World WHERE population >= 25000000 AND area >= 3000000


-- 176. Second Highest Salary
-- https://leetcode.com/problems/second-highest-salary/description

-- Write your MySQL query statement below
SELECT MAX(salary) AS SecondHighestSalary FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee)
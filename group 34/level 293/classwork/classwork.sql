-- 183. Customers Who Never Order
-- https://leetcode.com/problems/customers-who-never-order/description

SELECT name AS Customers FROM Customers WHERE id NOT IN (SELECT customerId FROM Orders)
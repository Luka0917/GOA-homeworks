SELECT * FROM employees WHERE department_id = (SELECT id FROM departments WHERE location = 'New York');

SELECT * FROM employees WHERE (deparment_id, salary) = (SELECT department_id, MAX(salary) FROM employees WHERE departament_id = 5);
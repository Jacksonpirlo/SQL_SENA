/*

SELECT CONCAT('Este es el directivo ', CONCAT(first_name, CONCAT('Mi salario es: ', salary))) FROM employees;

SELECT first_name, last_name, salary FROM employees ORDER BY salary;

SELECT CONCAT(LOWER(email), '@estampamos.com') FROM employees

SELECT employee_id, last_name, CONCAT(LOWER(email), '@estampamos.com') FROM employees WHERE last_name LIKE 'M%' ORDER BY last_name DESC


*/

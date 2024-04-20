# Assignment 1 - React + PHP task

This is a todo list made with React+redux and php APIs are in php folder with db_connection file.
Below will be steps :

## Query for creating Table in MySQL DB
```
CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  priority ENUM('low', 'medium', 'high') NOT NULL
);
```

# Assignment 2 

Below is the answer query to the question

```
SELECT 
    sales_everything.id,
    sales_everything.sale_id,
    GROUP_CONCAT(sales_everything.sale_purchase_id ORDER BY sales_everything.sale_purchase_id SEPARATOR ',') AS sale_purchase_id,
    franchise_location.franchise_name AS location_name,
    sales_everything.delivery_date,
    SUM(payment_everything.balance_paid) AS balance_paid,
    (SUM(payment_everything.balance_paid) * franchise_location.tax / 100) AS tax
FROM 
    sales_everything
JOIN 
    franchise_location ON sales_everything.location_id = franchise_location.location_id
JOIN 
    payment_everything ON sales_everything.sale_id = payment_everything.sale_id
GROUP BY 
    sales_everything.sale_id
HAVING 
    sales_everything.delivery_date = MAX(sales_everything.delivery_date)
    AND sales_everything.sale_discount_type NOT LIKE '%Benefit%'
    AND sales_everything.transaction_type IN ('New Portion Exhange', 'Sale')
    AND balance_paid = (SELECT SUM(balance_paid) FROM payment_everything WHERE sale_id = sales_everything.sale_id);
```



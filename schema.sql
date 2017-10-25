DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

drop table products

CREATE TABLE products (
  item_id INT NOT NULL PRIMARY KEY,
  product_name VARCHAR(100), 
  department_name VARCHAR(100),
  price DECIMAL(10,2), 
  stock_quantity INT(6)
);



INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "coffee maker", "kitchen", 60, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "juicer", "kitchen", 120, 75);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "couch", "furniture", 2500, 8);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "piano", "music", 5000, 4);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "knives", "kitchen", 80, 235);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "tea set", "kitchen", 65, 45);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "coffee table", "furniture", 800, 28);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "serving tray", "kitchen", 20, 150);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "shower curtain", "bed and bath", 45, 115);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "sheets", "bed and bath", 130, 90);
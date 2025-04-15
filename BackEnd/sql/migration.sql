CREATE TABLE products(
   product_id INT AUTO_INCREMENT,
   title VARCHAR(50) NOT NULL,
   price INT,
   rate VARCHAR(50),
   team VARCHAR(50),
   description VARCHAR(255),
   url_video VARCHAR(255),
   PRIMARY KEY(product_id)
);

CREATE TABLE images(
   image_id INT AUTO_INCREMENT,
   url_image VARCHAR(255),
   PRIMARY KEY(image_id)
);

CREATE TABLE types(
   type_id INT AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   PRIMARY KEY(type_id)
);

CREATE TABLE customers(
   customer_id INT AUTO_INCREMENT,
   email VARCHAR(50),
   password VARCHAR(255),
   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
   username VARCHAR(50),
   PRIMARY KEY(customer_id)
);

CREATE TABLE product_type(
   product_id INT,
   type_id INT,
   PRIMARY KEY(product_id, type_id),
   FOREIGN KEY(product_id) REFERENCES products(product_id),
   FOREIGN KEY(type_id) REFERENCES types(type_id)
);

CREATE TABLE commands(
   product_id INT,
   customer_id INT,
   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
   quantity INT DEFAULT 1,
   PRIMARY KEY(product_id, customer_id),
   FOREIGN KEY(product_id) REFERENCES products(product_id),
   FOREIGN KEY(customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE image_product(
   product_id INT,
   image_id INT,
   PRIMARY KEY(product_id, image_id),
   FOREIGN KEY(product_id) REFERENCES products(product_id),
   FOREIGN KEY(image_id) REFERENCES images(image_id)
);

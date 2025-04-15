INSERT INTO products (title, price, rate, team, description, url_video) VALUES
('Adventure Pack', 1499, '4.5', 'Team Alpha', 'A thrilling adventure map pack.', 'https://example.com/video1'),
('Pixel World', 999, '4.0', 'Pixel Studio', 'Explore a colorful pixel world.', 'https://example.com/video2'),
('Realism Texture', 599, '4.8', 'HDTextures', 'Ultra realistic textures.', 'https://example.com/video3');
INSERT INTO images (url_image) VALUES
('https://example.com/images/img1.jpg'),
('https://example.com/images/img2.jpg'),
('https://example.com/images/img3.jpg'),
('https://example.com/images/img4.jpg');
INSERT INTO types (name) VALUES
('Skin'),
('Texture'),
('World'),
('Add-on'),
('Mash-up');
INSERT INTO customers (email, password, username) VALUES
('alice@example.com', 'hashed_pwd_123', 'AliceGamer'),
('bob@example.com', 'hashed_pwd_456', 'BobBuilder'),
('charlie@example.com', 'hashed_pwd_789', 'CharlieCraft');
INSERT INTO product_type (product_id, type_id) VALUES
(1, 4), -- Adventure Pack = Add-on
(2, 3), -- Pixel World = World
(3, 2); -- Realism Texture = Texture
INSERT INTO commands (product_id, customer_id, quantity) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(1, 3, 1);
INSERT INTO image_product (product_id, image_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4);

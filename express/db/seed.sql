DROP TABLE IF EXISTS sweetness;

CREATE TABLE sweetness (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
	price DOUBLE PRECISION,
	image VARCHAR NOT NULL,
	description VARCHAR NOT NUll
);

INSERT INTO sweetness( name, price, image, description ) VALUES
	('Producto 1', 28.50, 'https://image.ibb.co/kMnhBk/da8d7a48c6c064ac8bc99a6f34760ff9_pink_chocolate_chocolate_strawberries.jpg', 'Descripcion del producto, que cosas trae y como esta echo'),
	('Producto 2', 10.00, 'https://image.ibb.co/kMnhBk/da8d7a48c6c064ac8bc99a6f34760ff9_pink_chocolate_chocolate_strawberries.jpg', 'Descripcion del producto, que cosas trae y como esta echo'),
	('Producto 3', 15.00, 'https://image.ibb.co/kMnhBk/da8d7a48c6c064ac8bc99a6f34760ff9_pink_chocolate_chocolate_strawberries.jpg', 'Descripcion del producto, que cosas trae y como esta echo'),
	('Producto 4', 22.50, 'https://image.ibb.co/kMnhBk/da8d7a48c6c064ac8bc99a6f34760ff9_pink_chocolate_chocolate_strawberries.jpg', 'Descripcion del producto, que cosas trae y como esta echo'),
	('Producto 5', 20.00, 'https://image.ibb.co/kMnhBk/da8d7a48c6c064ac8bc99a6f34760ff9_pink_chocolate_chocolate_strawberries.jpg', 'Descripcion del producto, que cosas trae y como esta echo'),
	('Producto 6', 17.00, 'https://image.ibb.co/kMnhBk/da8d7a48c6c064ac8bc99a6f34760ff9_pink_chocolate_chocolate_strawberries.jpg', 'Descripcion del producto, que cosas trae y como esta echo'),
	('Producto 7', 28.00, 'https://image.ibb.co/kMnhBk/da8d7a48c6c064ac8bc99a6f34760ff9_pink_chocolate_chocolate_strawberries.jpg', 'Descripcion del producto, que cosas trae y como esta echo'),
	('Producto 8', 13.00, 'https://image.ibb.co/kMnhBk/da8d7a48c6c064ac8bc99a6f34760ff9_pink_chocolate_chocolate_strawberries.jpg', 'Descripcion del producto, que cosas trae y como esta echo'),
	('Producto 9', 45.00, 'https://image.ibb.co/kMnhBk/da8d7a48c6c064ac8bc99a6f34760ff9_pink_chocolate_chocolate_strawberries.jpg', 'Descripcion del producto, que cosas trae y como esta echo'),
	('Producto 10', 29.50, 'https://image.ibb.co/kMnhBk/da8d7a48c6c064ac8bc99a6f34760ff9_pink_chocolate_chocolate_strawberries.jpg', 'Descripcion del producto, que cosas trae y como esta echo'),
	('Producto 11', 30.00, 'https://image.ibb.co/kMnhBk/da8d7a48c6c064ac8bc99a6f34760ff9_pink_chocolate_chocolate_strawberries.jpg', 'Descripcion del producto, que cosas trae y como esta echo'),
	('Producto 12', 11.00, 'https://image.ibb.co/kMnhBk/da8d7a48c6c064ac8bc99a6f34760ff9_pink_chocolate_chocolate_strawberries.jpg', 'Descripcion del producto, que cosas trae y como esta echo');

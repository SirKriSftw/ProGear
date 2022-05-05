DROP TABLE Categories, Orders, Cart, Products, Users

SELECT * FROM Users
SELECT * FROM Products
SELECT * FROM Cart
SELECT * FROM Orders
SELECT * FROM Categories

CREATE DATABASE ProGear
USE ProGear

CREATE TABLE Users(
	userID int PRIMARY KEY Identity,
	email varchar(30) UNIQUE NOT NULL,
	password varchar(30),
	firstName varchar(30),
	lastName varchar(30),

	constraint chk_password check (LEN(password) >= 8)
)

CREATE TABLE Categories (
	catID int PRIMARY KEY Identity,
	catName varchar(MAX),

	constraint chk_catName check (LEN(catName) >= 3)	
)

CREATE TABLE Products (
	productID int PRIMARY KEY Identity,
	catID int FOREIGN KEY REFERENCES Categories(catID) ON DELETE SET NULL,
	productName varchar(MAX) NOT NULL,
	productDetails varchar(MAX) NOT NULL,
	productStock int NOT NULL,
	productPrice float NOT NULL,
	
	constraint chk_stock check (productStock >= 0),
	constraint chk_price check (productPrice > 0)
)

CREATE TABLE Cart (
	cartID int PRIMARY KEY Identity,
	userID int FOREIGN KEY REFERENCES Users(userID) ON DELETE CASCADE,
	total float,
	paidFor bit,
	paidOn dateTime
)

CREATE TABLE Orders (
	orderID int PRIMARY KEY Identity,
	productID int FOREIGN KEY REFERENCES Products(productID) ON DELETE CASCADE,
	cartID int FOREIGN KEY REFERENCES Cart(cartID) ON DELETE CASCADE,
	qty int
)

INSERT INTO Users VALUES ('test@test.com', 'password', 'david', 'acuff')
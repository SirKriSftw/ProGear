DROP TABLE PaidOrders,Invoices, Orders, Cart, Products, Users

SELECT * FROM Users
SELECT * FROM Products
SELECT * FROM Cart
SELECT * FROM Orders
SELECT * FROM Invoices
SELECT * FROM PaidOrders

CREATE TABLE Users(
	userID int PRIMARY KEY Identity,
	email varchar(30) UNIQUE NOT NULL,
	password varchar(30),
	firstName varchar(30),
	lastName varchar(30),

	constraint chk_password check (LEN(password) >= 8),
	constraint chk_firstName check (LEN(firstName) >= 3),
	constraint chk_lastName check (LEN(lastName) >= 3),
)

CREATE TABLE Products (
	productID int PRIMARY KEY Identity,
	productName varchar(MAX) NOT NULL,
	productDetails varchar(MAX) NOT NULL,
	productStock int NOT NULL,
	productPrice float NOT NULL,
	productCat varchar(MAX),

	constraint chk_stock check (productStock >= 0),
	constraint chk_price check (productPrice > 0)

)

CREATE TABLE Cart (
	cartID int PRIMARY KEY Identity,
	userID int FOREIGN KEY REFERENCES Users(userID) ON DELETE CASCADE,
	total float
)

CREATE TABLE Orders (
	orderID int PRIMARY KEY Identity,
	productID int FOREIGN KEY REFERENCES Products(productID) ON DELETE CASCADE,
	cartID int FOREIGN KEY REFERENCES Cart(cartID) ON DELETE CASCADE,
	qty int
)

CREATE TABLE Invoices (
	invoiceID int PRIMARY KEY Identity,
	userID int FOREIGN KEY REFERENCES Users(userID) ON DELETE CASCADE,
	dateOfInvoice datetime,
	total int
)

CREATE TABLE PaidOrders (
	productID int FOREIGN KEY REFERENCES Products(productID),
	invoiceID int FOREIGN KEY REFERENCES Invoices(invoiceID),
	qty int
)
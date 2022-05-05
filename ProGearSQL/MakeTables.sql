DROP TABLE Categories, Orders, Cart, Products, Users

SELECT * FROM Users
SELECT * FROM Products
SELECT * FROM Cart
SELECT * FROM Orders
SELECT * FROM Categories

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

--Category Table
select * from Categories

insert into dbo.Categories values('Apparel');
insert into dbo.Categories values('Houseware');
insert into dbo.Categories values('Travel');
insert into dbo.Categories values('Misc');

--Products Table
select * from Products;

insert into dbo.Products values(1, 'T-Shirt', 'A comfy and stylish T-shirt!', 50, 8.25);
insert into dbo.Products values(1, 'Hat', 'Be cool and stay cool in our signiture brand hats!', 25, 9.75);
insert into dbo.Products values(1, 'Hoodie', 'Comfy, cool, and quite warm! Show Revature pride in style!', 100, 19.50);
insert into dbo.Products values(2, 'Mug', 'A mug to hold your daily brain-fuel of choice.', 75, 15.00);
insert into dbo.Products values(2, 'Coasters', 'A set of 8 custom cork coasters.', 45, 14.25);
insert into dbo.Products values(2, 'Thermos', 'An insulated thermos to keep the hot stuff hot and the cool stuff cool.', 60, 25.00);
insert into dbo.Products values(3, 'Briefcase', 'A handy and convenient case to carry all your important documents to and from the workplace!', 30, 50.00);
insert into dbo.Products values(3, 'Suitcase', 'For those who travel hither and yon, never forget your trusty suitcase.', 120, 115.00);
insert into dbo.Products values(3, 'Shopping Bag', 'Durable, reusable, and eco-friendly! For all your shopping needs', 400, 5.00);
insert into dbo.Products values(3, 'Calendars', 'Keep track of your important events all throughout the year', 200, 10.00);
insert into dbo.Products values(4, 'Pens', 'A 4-pack of medium point black ink pens for all your note-taking and contract needs.', 1000, 7.00); --Business deals and contracts have to be signed with something after all.
insert into dbo.Products values(4, 'Stickers', 'An assortment of stickers to customize or seal whatever you need!', 500, 9.75);
insert into dbo.Products values(4, 'Magnets', 'A pack of magnet to keep hold of all your documents on a whiteboard or a refrigerator.', 50, 14.75);



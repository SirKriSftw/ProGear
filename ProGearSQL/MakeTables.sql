DROP TABLE Categories, Orders, Cart, Products, Users

SELECT * FROM Users
SELECT * FROM Products
SELECT * FROM Categories
SELECT * FROM Cart
SELECT * FROM Orders

CREATE TABLE Users(
	userID varchar(100) PRIMARY KEY,
	email varchar(30) UNIQUE NOT NULL,
	firstName varchar(30),
	lastName varchar(30)
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
	userID varchar(100) FOREIGN KEY REFERENCES Users(userID) ON DELETE CASCADE,
	total float,
	paidFor bit,
	paidOn dateTime
)

CREATE TABLE Orders (
	orderID int PRIMARY KEY Identity,
	productID int FOREIGN KEY REFERENCES Products(productID) ON DELETE SET NULL,
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
insert into dbo.Products values(1, 'Novelty Socks', 'Festive socks for whatever occasion!', 30, 9.95);
insert into dbo.Products values(1, 'Gloves', 'Warm, unisex, non-slip winter gloves with touchscreen capability!', 25, 19.99);
insert into dbo.Products values(1, 'Sweater', 'Stylish crewneck sweater.', 45, 18);
insert into dbo.Products values(2, 'Food Container', 'A single 1.6 liter microwave and diswasher safe container.', 100, 7.99);
insert into dbo.Products values(2, 'Coffee Mug Warmer', 'Keeps your beverage of choice nice and warm.', 20, 19.99);
insert into dbo.Products values(2, 'Mesh Desk Organizer', 'Contains compartments for small office supplies and a drawer for journals.', 45, 24);
insert into dbo.Products values(2, 'Document Letter Tray Organizer', 'Great for holding A4 sized paper, folders, and other stationary.', 45, 30);

insert into dbo.Products values(3, 'Backpack', 'TSA friendly backpack for all your travelling adventures!', 60, 29.99);
insert into dbo.Products values(3, 'Waist pack', 'A convenient bag that is easy to carry.', 30, 19.25);
insert into dbo.Products values(3, 'Passport cover', 'Holds your passport, vaccine card, credit cards, and a pen.', 45, 12.99);

insert into dbo.Products values(4, 'Notepad', 'For rigorous notetaking or idle doodling.', 45, 30);
insert into dbo.Products values(4, 'Sticky Notes', 'A 6-pack of sticky notes for when you need quick reminders', 45, 30);
insert into dbo.Products values(4, 'Pencils', 'A box of 12 #2 pencils', 45, 30);
insert into dbo.Products values(4, 'Binders', 'A quality 3-ring 2" binder for your organizational needs', 45, 30);
insert into dbo.Products values(4, 'Page protectors', '100 non-glare sheet protectors.', 45, 30);
insert into dbo.Products values(4, 'Keychain USB Drive', '1 TB waterproof flash drive to fit on your keyring.', 45, 30);
insert into dbo.Products values(4, 'Paper Clips', '700 pcs box of paper clips', 45, 30);
insert into dbo.Products values(4, 'Poster', 'Wall art to enhance your space.', 45, 30);

insert into dbo.Users values('1', 'test@test.com', 'David', 'Acuff')
insert into dbo.Cart values('1', 0, 0, NULL)

insert into dbo.Orders values(2, 1, 1)
insert into dbo.Orders values(3, 1, 1)
insert into dbo.Orders values(4, 1, 1)
insert into dbo.Orders values(5, 1, 1)
insert into dbo.Orders values(6, 1, 1)
insert into dbo.Orders values(7, 1, 2)
insert into dbo.Orders values(8, 1, 2)
insert into dbo.Orders values(9, 1, 1)
insert into dbo.Orders values(10, 1, 2)
insert into dbo.Orders values(11, 1, 3)
insert into dbo.Orders values(12, 1, 1)
insert into dbo.Orders values(13, 1, 3)
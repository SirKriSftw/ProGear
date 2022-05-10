--Products Team
drop table Category, Products;
drop table Products;

use Project3;
/*
create table Category (
	catID int Primary Key Identity,
	catName varchar(MAX) NOT NULL
)

CREATE TABLE Products (
	productID int PRIMARY KEY Identity,
	productName varchar(MAX) NOT NULL,
	productDetails varchar(MAX) NOT NULL,
	productStock int NOT NULL,
	productPrice float NOT NULL,
	productCat int, --was varchar(MAX)

	constraint chk_stock check (productStock >= 0),
	constraint chk_price check (productPrice > 0),

	foreign key (productCat) references Category(catID),

)*/

select * from Categories;
select * from Products;
select catID from Categories;


--Category Table
select * from Categories;

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
insert into dbo.Products values(4, 'Calendars', 'Keep track of your important events all throughout the year', 200, 10.00);
insert into dbo.Products values(4, 'Pens', 'A 4-pack of medium point black ink pens for all your note-taking and contract needs.', 1000, 7.00); --Business deals and contracts have to be signed with something after all.
insert into dbo.Products values(4, 'Stickers', 'An assortment of stickers to customize or seal whatever you need!', 500, 9.75);
insert into dbo.Products values(4, 'Magnets', 'A pack of magnet to keep hold of all your documents on a whiteboard or a refrigerator.', 50, 14.75);

--Apparel - socks, gloves, and sweaters
insert into dbo.Products values(1, 'Novelty Socks', 'Festive socks for whatever occasion!', 30, 9.95);
insert into dbo.Products values(1, 'Gloves', 'Warm, unisex, non-slip winter gloves with touchscreen capability!', 25, 19.99);
insert into dbo.Products values(1, 'Sweater', 'Stylish crewneck sweater.', 45, 18.00);

--Houseware - Tuperware, coffee mug warmers, Mesh Desk Organizer, Document Letter Tray Organizer
insert into dbo.Products values(2, 'Food Container', 'A single 1.6 liter microwave and diswasher safe container.', 100, 7.99);
insert into dbo.Products values(2, 'Coffee Mug Warmer', 'Keeps your beverage of choice nice and warm.', 20, 19.99);
insert into dbo.Products values(2, 'Mesh Desk Organizer', 'Contains compartments for small office supplies and a drawer for journals.', 45, 24.00);
insert into dbo.Products values(2, 'Document Letter Tray Organizer', 'Great for holding A4 sized paper, folders, and other stationary.', 45, 30.00);

--Travel - Backpacks, Fanny pack, Passport cover
insert into dbo.Products values(3, 'Backpack', 'TSA friendly backpack for all your travelling adventures!', 60, 29.99);
insert into dbo.Products values(3, 'Waist pack', 'A convenient bag that is easy to carry.', 30, 19.25);
insert into dbo.Products values(3, 'Passport cover', 'Holds your passport, vaccine card, credit cards, and a pen.', 45, 12.99);

--Misc - notepads, post-its, pencils, binders, page protectors (laminate), keychain, paper clips
insert into dbo.Products values(4, 'Notepad', 'For rigorous notetaking or idle doodling.', 80, 14.25);
insert into dbo.Products values(4, 'Sticky Notes', 'A 6-pack of sticky notes for when you need quick reminders', 140, 8.00);
insert into dbo.Products values(4, 'Pencils', 'A box of 12 #2 pencils', 400, 5.15);
insert into dbo.Products values(4, 'Binders', 'A quality 3-ring 2" binder for your organizational needs', 90, 9.50);
insert into dbo.Products values(4, 'Page protectors', '100 non-glare sheet protectors.', 45, 9.45);
insert into dbo.Products values(4, 'Keychain USB Drive', '1 TB waterproof flash drive to fit on your keyring.', 65, 22.50);
insert into dbo.Products values(4, 'Paper Clips', '100 pcs box of 2 inch paper clips', 300, 6.99);
insert into dbo.Products values(4, 'Poster', 'Wall art to enhance your space.', 50, 13.95);

-- technology category pending...
-- drones maybe...
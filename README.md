# ProGear
 Revature Project 3
 
![logo](https://user-images.githubusercontent.com/60492952/167699664-a9e8e5da-2710-4e86-8a4b-dfd24101696e.png)

# Technologies Used

- C#
- .NET Core 6.0
- Entity Framework
- Swagger
- SQL Server
- Angular 13
- Auth0
- App is geared for CD / CI:
   - Sonar Cloud
   - Azure Web Service
   - Azure Database
   - GitHub
- Karma
- Jasmine
- Unit tests can be seen here https://docs.google.com/spreadsheets/d/19WcPfBe3IDRWngBNrsToCDDCAS_c2382A7mKrjgI6xw/edit?usp=sharing

# Features

- Register a new user with email and password using Auth0
- Login with user email and password using Auth0
- View all products in store
- Search all products by text input
- Search products in category by text input
- Browse products by product category
- Add a single product to user cart
- Add a set quantity of product to user cart
- Items in cart are persisted even after user signs out
- Remove individual items from cart
- Remove all items from cart
- Simulate purchase with credit card and 16 digit validation for the input
- Simulate purchase with card billing information
- Optionally add a different shipping address
- Can view cart on checkout page before submitting
- Checkout will prevent user from purchasing more of a specific product than is in stock
- After purchase, quantity of items in stock will be adjusted accordingly

# To-Do List:

- Add admin account functionality
- Add estimated shipping costs with UPS/FedEx API
- Add email confirmation of account creation
- Add a way to reset password through email
- Add a order history page

# Getting Started

1 - Clone the repository (git clone https://github.com/SirKriSftw/ProGear)

2 - Create an SQL Server on whatever platform you desire using the schema and trigger files in the ./ProGearSQL directory

3 - Change the connection string to your database in the ProGearContext.cs file located in the ./ProGear/Models/EF directory

4 - If your API is not running on port 43310, then update the service files in the ./ProGear/src/app/services directory to match you current port number, if applicable

5 - run an npm install in the ./ProGear directory

6 - If on Windows, run the START.bat file in the root directory.  If not, do steps 6a and 6b below:
6a - open the ./ProGearAPI directory and do a "dotnet run" in your command line
6b - open the ./ProGear directory and do a "ng serve -o" in your command line

7 - Enjoy the app!

# License

This project uses the following license: MIT

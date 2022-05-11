SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
alter trigger paidFor_trg on Cart
after update 
as 
declare @paidfor bit;
declare @cartID int;
set @paidfor = 1

select @cartID =list.cartID from inserted list;
print 'this is cart id';
print @cartID;

if @paidfor = (select paidFor from Cart where paidFor = 1 and cartID=@cartID )
begin 
print 'we are inside the paid for loop';
declare @oldqty int;
declare @newQTY int;
declare @QTYRemoved int ;

declare @Prod_ID int;
declare @cart_ID int;
declare @order_ID int;
declare @pass int;
declare @userid varchar(100);



set @pass =0;
declare @error int;
set @error = 0;




select @cart_ID =list.cartID from inserted list;
--print 'this is cart id';
print @cart_ID;

set @userid = (select users.userID from Users 
full outer join Cart 
on  Users.userID = cart.userID 
where cartID = @cart_ID
)
print 'user id'
print @userid;

declare MultiRow cursor for 
select Products.Productid from Products
inner join Orders on products.productID = Orders.productID
inner join Cart on Orders.cartID = Cart.cartID
where Cart.cartID = @cart_ID and paidFor = @paidfor;

open MultiRow
Fetch NEXT FROM MultiRow into @Prod_ID
while @@FETCH_STATUS = 0
begin


	select @QTYRemoved = qty from Orders where productID = @Prod_ID;
	--print 'qty removed';
	--print @QTYRemoved;


	set @oldqty = (select productStock from Products
	inner join Orders on products.productID = Orders.productID
	where products.productID = @Prod_ID and CartID = @cart_ID)
	--print 'this is old qty';
	--print @oldqty;


	set @newQTY = @oldqty - @QTYRemoved;
	--print 'newQTY';
	--print @newQTY;

	if (@newQTY < 0)
	begin

	--update Products 
	--set productStock = @newQTY
	--where productID =@Prod_ID
	--print 'product stock has been updated'
	--end
	--else 
	--begin
	--print 'not enough stock';
	 print 'fail';
	 set @pass = 0;
	 RAISERROR (15600,16,-1,'(@newQTY < 0)');  
	 set @error = 1
	 BREAK
	 end

	 else
	 begin
	 print 'pass';
	 set @pass = 1;
	 end
	 fetch next from MultiRow  into @Prod_ID
	 end


			 if (@pass =1 and @error=0) 
			 begin
				 update Cart
						set paidOn = GETDATE()
						where cartID =@cart_ID

					declare MultiRow2 cursor for 
					select Products.Productid from Products
					inner join Orders on products.productID = Orders.productID
					inner join Cart on Orders.cartID = Cart.cartID
					where Cart.cartID = @cart_ID and paidFor = @paidfor;

					open MultiRow2
					Fetch NEXT FROM MultiRow2 into @Prod_ID
					while @@FETCH_STATUS = 0
					begin 
						select @QTYRemoved = qty from Orders where productID = @Prod_ID;
						print 'qty removed';
						print @QTYRemoved;


						set @oldqty = (select productStock from Products
						inner join Orders on products.productID = Orders.productID
						where products.productID = @Prod_ID and CartID = @cart_ID)
						print 'this is old qty';
						print @oldqty;


						set @newQTY = @oldqty - @QTYRemoved;
						print 'newQTY';
						print @newQTY;
						declare @currentDate datetime = GETDATE();
						
						update Products 
						set productStock = @newQTY
						where productID =@Prod_ID
						print 'product stock has been updated';
						
						
						fetch next from MultiRow2  into @Prod_ID
						

					end
					insert Cart values (@userid , null,0,null)
				close MultiRow2
				DEALLOCATE MultiRow2
			end

			else 
			begin
			print 'error';
			end

		close MultiRow
DEALLOCATE MultiRow
	 end
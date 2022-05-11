SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger NewUserCart
on Users
after insert
as 
begin
declare @userid varchar(100);
select @userid =list.userID from inserted list;
insert Cart values (@userid , null , 0, null)
end
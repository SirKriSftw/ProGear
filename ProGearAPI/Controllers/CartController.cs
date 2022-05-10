using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using ProGearAPI.Models.EF;

namespace ProGearAPI.Controllers
{
    //Selects userId using the userEmail 
    [ApiController]
    [Route("Cart")]
    public class CartController : ControllerBase
    {
        ProGearContext dbContext = new ProGearContext();

        [HttpGet]
        [Route("get-user-ID/{userEmail}")]
        public IActionResult getUserIdUsingEmail(string userEmail)
        {
            try
            {
                var i = (from x in dbContext.Users
                         where x.Email == userEmail
                         select x.UserId).SingleOrDefault();

                if (i != null)
                {
                    return Ok(i);
                }
                else
                {
                    return BadRequest("Invalid email.");
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        //Allows quantity of an order to be changed
        [HttpPut]
        [Route("set-order-qty/{orderID}/{newQty}")]
        public IActionResult modifyOrderQuantity(int orderID, int newQty)
        {
            // TODO: if newQty < 1, delete order
            try
            {
                var order = (from x in dbContext.Orders
                             where x.OrderId == orderID
                             select x).SingleOrDefault();

                if (order != null)
                {
                    order.Qty = newQty;

                    dbContext.Update(order);
                    dbContext.SaveChanges();
                    return Ok("Order quantity updated.");
                }
                else
                {
                    return BadRequest("Invalid Order ID.");
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        //Removes single order from ordertable by using its id
        [HttpDelete]
        [Route("remove-order/{orderID}")]
        public IActionResult removeOrder(int orderID)
        {
            var order = (from x in dbContext.Orders
                         where x.OrderId == orderID
                         select x).SingleOrDefault();

            if (order != null)
            {
                dbContext.Orders.Remove(order);
                dbContext.SaveChanges();
                return Ok("Order deleted.");
            }
            else
            {
                return BadRequest("Invalid Order ID.");
            }
        }


        double v;
        double V;

        #region Get Cart
        [HttpGet]
        [Route("GetAllCarts")]
        public IActionResult GetCart()
        {

            var cart = (from i in dbContext.Carts
                        join x in dbContext.Users on i.UserId equals x.UserId
                        join z in dbContext.Orders on i.CartId equals z.CartId
                        join w in dbContext.Products on z.ProductId equals w.ProductId
                        orderby i.CartId ascending
                        select new
                        {
                            i.CartId,
                            i.UserId,
                            i.PaidFor,
                            i.PaidOn,
                            //i.User,
                            //i.Orders,
                            z.OrderId,
                            w.ProductId,
                            w.ProductName,
                            w.ProductDetails,
                            w.ProductPrice,
                            z.Qty,
                            V = z.Qty * w.ProductPrice,


                        }).DefaultIfEmpty();

            //foreach (var V in cart)
            //{
            //v = v + V;
            //}

            if (cart != null)
            {
                return Ok(cart);
            }
            else
            {
                return NotFound("No Cart");
            }
        }
        #endregion

        [HttpGet]
        [Route("GetUserCartId/{userID}")]
        public IActionResult GetUserCartId(string userID)
        {
            try {
                var myCartID = (from x in dbContext.Carts 
                    where x.UserId == userID && x.PaidFor != true
                    select x.CartId).DefaultIfEmpty().First();
                if (myCartID != null)
                {
                    return Ok(myCartID);
                }
                else
                {
                    return NotFound("No Cart");
                }
            }
            catch (Exception es)
            {
                throw new Exception(es.Message);

            }
        }

        //Gets all wanted information from a Cart using a specific user id
        #region Get Cart By User Id
        [HttpGet]
        [Route("GetCartById/{userID}")]
        public IActionResult GetCartById(string userID)
        {
            try
            {

                var myCartID = (from x in dbContext.Carts 
                    where x.UserId == userID && x.PaidFor != true
                    select x.CartId).DefaultIfEmpty().First();

                var cart = (from i in dbContext.Carts
                            join x in dbContext.Users on i.UserId equals x.UserId
                            join z in dbContext.Orders on i.CartId equals z.CartId
                            join w in dbContext.Products on z.ProductId equals w.ProductId
                            //orderby i.CartId ascending
                            where i.CartId == myCartID
                            select new
                            {
                                i.CartId,
                                i.UserId,
                                i.PaidFor,
                                i.PaidOn,
                                //i.User,
                                //i.Orders,
                                z.OrderId,
                                w.ProductId,
                                w.ProductName,
                                w.ProductDetails,
                                w.ProductPrice,
                                z.Qty,
                                SubTotal = z.Qty * w.ProductPrice
                            }
                             ).DefaultIfEmpty();

                var total = cart.Sum(V => V.SubTotal);
                //Console.WriteLine("Total" , total);

                var final = (from i in dbContext.Carts
                             join x in dbContext.Users on i.UserId equals x.UserId
                             join z in dbContext.Orders on i.CartId equals z.CartId
                             join w in dbContext.Products on z.ProductId equals w.ProductId

                             where i.CartId == myCartID
                             select new
                             {
                                 i.CartId,
                                 total,
                                 i.UserId,
                                 i.PaidFor,
                                 i.PaidOn,
                                 //i.User,
                                 //i.Orders,
                                 z.OrderId,
                                 w.ProductId,
                                 w.ProductName,
                                 w.ProductDetails,
                                 w.ProductPrice,
                                 z.Qty,
                                 SubTotal = z.Qty * w.ProductPrice

                             }
                            ).DefaultIfEmpty();


                if (cart != null)
                {
                    UpdateCart(total, myCartID);
                    return Ok(final);
                }
                else
                {
                    return NotFound("No Cart");
                }
            }
            catch (Exception es)
            {
                throw new Exception(es.Message);

            }
        }
        #endregion

        //Used to update the total of the cart by adding the subtotal of each order
        #region Update Cart
        [HttpPut]
        [Route("UpdateCart")]
        public IActionResult UpdateCart(double? total, int cartId)
        {
            var update = (from i in dbContext.Carts
                          where i.CartId == cartId
                          select i).SingleOrDefault();

            if (update != null)
            {
                update.Total = total;
                dbContext.SaveChanges();
                return Ok("Updated Total");
            }
            else
            {
                return Ok("Update Failed");
            }
        }

        //Get and update the value of PaidFor in current Cart
        [HttpPut]
        [Route("UpdatePaid/{cartId}")]
        public IActionResult UpdatePaid(int cartId)
        {
            var myCart = (from x in dbContext.Carts
                          where x.CartId == cartId
                          select x).DefaultIfEmpty().First();
            myCart.PaidFor = true;
            try
            {
                dbContext.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        #endregion

        //Create a New Cart for a user typically done on account creation and after a cart is considered checked out
        #region Create New Cart
        [HttpPost]
        [Route("CreateNewCart")]
        public IActionResult CreateCart(string userId)
        {
            var newCart = new Cart();

            newCart.UserId = userId;
            newCart.Total = 0;
            newCart.PaidFor = false;
            newCart.PaidOn = null;



            if (newCart != null)
            {
                dbContext.Carts.Add(newCart);
                dbContext.SaveChanges();

                return Created("", newCart);
            }
            else
            {
                return Ok("Error");
            }
        }
        #endregion



        //Adds an order from the cart using the cartId, productId, and qty
        [HttpPost]
        [Route("AddAnOrder")]
        public IActionResult AddOrder(int productId, int cartId, int qty)
        {

            Order newOrder = new Order();

            //Checks Quantity of specific item 
            var check = (from i in dbContext.Orders
                         where i.ProductId == productId && i.CartId == cartId
                         select new
                         {
                             i.Qty
                         }).FirstOrDefault();

            if (check != null)
            {
                //Find quanity of already existing product in order
                int? oldQty = check.Qty;

                //Variable to see where product exists to remove it
                var remove = (from i in dbContext.Orders
                              where i.ProductId == productId && i.CartId == cartId
                              select i).FirstOrDefault();

                //If product already exists go into this if statement
                if (remove != null)
                {
                    //Remove old order
                    dbContext.Orders.Remove(remove);
                    dbContext.SaveChanges();

                    //Create new order of same product item and increase quantity
                    newOrder.ProductId = productId;
                    newOrder.CartId = cartId;
                    newOrder.Qty = qty + oldQty;

                    if (newOrder != null)
                    {
                        dbContext.Orders.Add(newOrder);
                        dbContext.SaveChanges();


                        return Created("", newOrder);
                    }
                    else
                    {
                        return Ok("Error");
                    }
                }
                else
                {
                    return BadRequest("Something Went Wrong");
                }


            }
            //else we just add a new order using parameters 
            else
            {
                newOrder.ProductId = productId;
                newOrder.CartId = cartId;
                newOrder.Qty = qty;
            }

            if (newOrder != null)
            {
                dbContext.Orders.Add(newOrder);
                dbContext.SaveChanges();


                return Created("", newOrder);
            }
            else
            {
                return Ok("Error");
            }

        }

        //Checks if product exists in an order using productId 
        [HttpGet]
        [Route("CheckOrder")]
        public IActionResult CheckOrder(int productId)
        {
            var check = (from i in dbContext.Orders
                         where i.ProductId == productId
                         select new
                         {
                             i.Qty
                         }).DefaultIfEmpty();


            if (check != null)
            {
                return Ok(check);
            }
            else
            {
                return Ok(false);
            }
        }

        //Get an order details by using an orderId 
        [HttpGet]
        [Route("OrdersByOrderId/{orderId}")]
        public IActionResult ViewOrders(int orderId)
        {
            var cart = (from i in dbContext.Orders
                        join x in dbContext.Products on i.ProductId equals x.ProductId
                        where i.OrderId == orderId
                        select new
                        {
                            i.OrderId,
                            i.ProductId,
                            i.CartId,
                            i.Qty,
                            x.ProductName,
                            x.ProductPrice,
                            x.ProductDetails

                        }
                          ).DefaultIfEmpty();

            if (cart != null)
            {
                return Ok(cart);
            }
            else
            {
                return NotFound("No Cart");
            }
        }

        //View all orders by cart Id 
        [HttpGet]
        [Route("OrdersByCartId/{cartId}")]
        public IActionResult ViewOrdersByCartId(int cartId)
        {
            
            var cart = (from i in dbContext.Orders
                        join x in dbContext.Products on i.ProductId equals x.ProductId
                        where i.CartId == cartId
                        select new
                        {
                            i.OrderId,
                            i.ProductId,
                            i.CartId,
                            i.Qty,
                            x.ProductName,
                            x.ProductPrice,
                            x.ProductDetails

                        }
                          ).DefaultIfEmpty();

            if (cart != null)
            {
                return Ok(cart);
            }
            else
            {
                return NotFound("No Cart");
            }
        }

        //Completely Empties Cart 
        [HttpDelete]
        [Route("emptycart/{cartId}")]
        public IActionResult deleteCart(int cartId)
        {
            var cart = (from x in dbContext.Orders
                        where x.CartId == cartId
                        select x).DefaultIfEmpty();
            if (cart != null)
            {
                cart.ToList().ForEach(x => dbContext.Orders.Remove(x));
                dbContext.SaveChanges();
                return Ok("Your Cart Is Now Empty");

            }
            else
            {
                return BadRequest("Your Cart Is Already Empty");
            }
        }


        //Gets all Current Users 
        [HttpGet]
        [Route("GetAllUsers")]
        public IActionResult GetUser()
        {
            var cart = from i in dbContext.Users
                       select i;

            return Ok(cart);
        }

        //Get A Users Old Carts
        [HttpGet]
        [Route("GetOldCarts/{userId}")]
        public IActionResult GetOldCarts(string userId)
        {
            var old = (from i in dbContext.Carts 
                      join z in dbContext.Orders on i.CartId equals z.CartId
                       join x in dbContext.Products on z.ProductId equals x.ProductId     
                      where i.UserId == userId && i.PaidFor == true
                      select new
                      {
                            i.PaidFor,
                            i.PaidOn,
                            z.OrderId,
                            z.ProductId,
                            i.CartId,
                            z.Qty,
                            x.ProductName,
                            x.ProductPrice,
                            x.ProductDetails

                      }).DefaultIfEmpty();
 
            if (old != null)
            {
                return Ok(old);
            }
            else
            {
                return NotFound("No Previous Carts");
            }
        }








    }
}

using Microsoft.AspNetCore.Mvc;
using ProGearAPI.Models.EF;
using Microsoft.AspNetCore.Http;
using System.Linq;
using System.Collections.Generic;


namespace ProGearAPI.Controllers
{
    public class CartController : Controller
    {
        ProGearContext context = new ProGearContext();

        [HttpGet]
        [Route("Cart")]
        public IActionResult GetCart()
        {
            var cart = (from i in context.Carts
                       join x in context.Users on i.UserId equals x.UserId
                       join y in context.Orders on i.CartId equals y.CartId
                       join z in context.Products on y.ProductId equals z.ProductId
                       select new
                        {
                           i.CartId,
                           i.UserId,
                           i.Total,
                           i.PaidFor,
                           i.PaidOn,
                           //i.Orders,
                           x.Email,
                           x.FirstName,
                           x.LastName,
                           y.ProductId,
                           z.ProductName,
                           z.ProductDetails,
                           z.ProductPrice,
                           y.Qty
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


        [HttpGet]
        [Route("CartV.2")]
        public IActionResult GetCart2()
        {
            var cart = (from i in context.Carts
                        join x in context.Users on i.UserId equals x.UserId
             
                        select new
                        {
                            i.CartId,
                            i.UserId,
                            i.Total,
                            i.PaidFor,
                            i.PaidOn,
                            i.User,
                            i.Orders
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
            [HttpPost]
        [Route("AddToCart")]
        public IActionResult AddToCart(int UserId, double total, ICollection<Order> order)
        {
            Cart newCart = new Cart();

            newCart.UserId = UserId;
            newCart.Total = total;
            newCart.Orders = order;
            newCart.PaidFor = false ;
            newCart.PaidOn = System.DateTime.Now;

            if (newCart != null)
            {
                context.Carts.Add(newCart);
                context.SaveChanges();


                return Created("", newCart);
            }
            else
            {
                return Ok("Error");
            }

        }

    }
}

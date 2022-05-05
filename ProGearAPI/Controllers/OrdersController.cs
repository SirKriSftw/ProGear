using Microsoft.AspNetCore.Mvc;
using ProGearAPI.Models.EF;
using Microsoft.AspNetCore.Http;
using System.Linq;
using System.Collections.Generic;
using System;

namespace ProGearAPI.Controllers
{
    public class OrdersController : Controller
    {
        ProGearContext context = new ProGearContext();

        [HttpPost]
        [Route("AddAnOrder")]
        public IActionResult AddOrder(int productId, int cartId, int qty)
        {

            Order newOrder = new Order();

            newOrder.ProductId = productId;
            newOrder.CartId = cartId;
            newOrder.Qty = qty;

            if (newOrder != null)
            {
                context.Orders.Add(newOrder);
                context.SaveChanges();


                return Created("", newOrder);
            }
            else
            {
                return Ok("Error");
            }

        }


        [HttpGet]
        [Route("Orders/{orderId}")]
        public IActionResult ViewOrders(int orderId)
        {
            var cart = (from i in context.Orders
                        join x in context.Products on i.ProductId equals x.ProductId
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

        [HttpGet]
        [Route("OrdersBy/{cartId}")]
        public IActionResult ViewOrdersByCartId(int cartId)
        {
            var cart = (from i in context.Orders
                        join x in context.Products on i.ProductId equals x.ProductId
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

    }
}

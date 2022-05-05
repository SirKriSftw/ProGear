using Microsoft.AspNetCore.Mvc;
using ProGearAPI.Models.EF;
using Microsoft.AspNetCore.Http;
using System.Linq;
using System.Collections.Generic;
using System;

namespace ProGearAPI.Controllers
{
    public class CartController : Controller
    {
        ProGearContext context = new ProGearContext();
        double v;
        double V;

        [HttpGet]
        [Route("Cart")]
        public IActionResult GetCart()
        {
            
            var cart = (from i in context.Carts
                        join x in context.Users on i.UserId equals x.UserId
                        join z in context.Orders on i.CartId equals z.CartId
                        join w in context.Products on z.ProductId equals w.ProductId
                        orderby i.CartId ascending
                        select new 
                        {
                            i.CartId,
                            i.UserId,
                            i.PaidFor,
                            i.PaidOn,
                            z.OrderId,
                            w.ProductId,
                            w.ProductName,
                            w.ProductDetails,
                            w.ProductPrice,
                            z.Qty,
                            V = z.Qty * w.ProductPrice,
                             

                        }).DefaultIfEmpty();

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

        #region Get Cart By Id
        [HttpGet]
        [Route("Cart/{cartId}")]
        public IActionResult GetCartById(int cartId)
        {
            try
            {


                var cart = (from i in context.Carts
                            join x in context.Users on i.UserId equals x.UserId
                            join z in context.Orders on i.CartId equals z.CartId
                            join w in context.Products on z.ProductId equals w.ProductId
                            where i.CartId == cartId
                            select new
                            {
                                i.CartId,
                                i.UserId,
                                i.PaidFor,
                                i.PaidOn,
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

                var final = (from i in context.Carts
                            join x in context.Users on i.UserId equals x.UserId
                            join z in context.Orders on i.CartId equals z.CartId
                            join w in context.Products on z.ProductId equals w.ProductId
                            
                            where i.CartId == cartId
                            select new
                            {
                                i.CartId,
                                total,
                                i.UserId,
                                i.PaidFor,
                                i.PaidOn,
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
                    UpdateCart(total, cartId); 
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

        #region Update Cart
        [HttpPut]
        [Route("UpdateCart")]
        public IActionResult UpdateCart(double? total, int cartId)
        {
            var update = (from i in context.Carts
                          where i.CartId == cartId
                          select i).SingleOrDefault();

            if (update != null)
            {
                update.Total = total;
                context.SaveChanges();
                return Ok("Updated Total");
            }
            else
            {
                return Ok("Update Failed");
            }
        }
        #endregion

        #region Create New Cart
        [HttpPost]
        [Route("NewCart")]
        public IActionResult CreateCart(int userId)
        {
            var newCart = new Cart();

            newCart.UserId = userId;
            newCart.Total = 0;
            newCart.PaidFor = false;
            newCart.PaidOn = null;



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
        #endregion
    }
}


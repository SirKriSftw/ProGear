using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProGearAPI.Models.EF;

namespace ProGearAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KaelanController : ControllerBase
    {
        ProGearContext dbContext = new ProGearContext();

    [HttpDelete]
    [Route("emptycart")]
        public IActionResult deleteCart(int cartId)
        {
            var cart = (from orders in dbContext.Carts
                        where orders.CartId == cartId
                        select orders).SingleOrDefault();
            if (cart != null)
            {
                dbContext.Carts.Remove(cart);
                dbContext.SaveChanges();
                return Ok("Your Cart Is Now Empty");

            }
            else
            {
                return BadRequest("Your Cart Is Empty");
            }
        }
    }

}
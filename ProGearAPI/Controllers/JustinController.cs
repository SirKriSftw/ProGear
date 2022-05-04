using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using ProGearAPI.Models.EF;

namespace Justin.Controllers
{
    [ApiController]
    [Route("Cart")]
    public class JustinController : ControllerBase
    {
        ProGearContext dbContext = new ProGearContext();

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
                else{
                    return BadRequest("Invalid Order ID.");
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

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

    }
}

using Microsoft.AspNetCore.Mvc;
using ProGearAPI.Models.EF;
using Microsoft.AspNetCore.Http;
using System.Linq;

namespace ProGearAPI.Controllers
{
    public class UserController : Controller
    {
        ProGearContext context = new ProGearContext();

        [HttpGet]
        [Route("Users")]
        public IActionResult GetUser()
        {
            var cart = from i in context.Users
                       select i;

            return Ok(cart);
        }
    }
}

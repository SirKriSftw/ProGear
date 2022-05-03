using Microsoft.AspNetCore.Mvc;
using System;
using ProGearAPI.Models.EF;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProGearAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        User user = new User();

        [HttpGet]
        [Route("Login")]
        public IActionResult GetLogin(string email, string password)
        {
            string u = user.Login(email, password);

            if (u == null)
            {
                return BadRequest("Invalid login credentials");
            }
            return Ok(u);
        }
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProGearAPI.Models.EF;
using System.Linq;
namespace ProGearAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductListController : ControllerBase
    {
        ProGearContext dbProGear = new ProGearContext();

        [HttpGet]
        [Route("List_of_Products")]
        public IActionResult GetProductlist()
        {
            var productlist = from p in dbProGear.Products
                              select p;
            return Ok(productlist);
        }
       
        [HttpGet]
        [Route("getCat/{Id:int}")]
        public IActionResult GetCatList(int Id)
        {
            var Catlist = from a in dbProGear.Products
                          where a.CatId == Id
                          select a;
            return Ok(Catlist);
        }

    }
}

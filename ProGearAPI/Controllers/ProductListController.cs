using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProGearAPI.Models.EF;
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
                              where p.productCat == 1//2,3,4
                            select p;
            return Ok(productlist);
        }

        //{
        //    // Query for all blogs with names starting with B
        //    var productlist = from p in dbProGear.Blogs
        //                where b.Name.StartsWith("B")
        //                select b;

        //    // Query for the Blog named ADO.NET Blog
        //    var blog = context.Blogs
        //                    .Where(b => b.Name == "ADO.NET Blog")
        //                    .FirstOrDefault();
        //}

        [HttpGet]
        [Route("List_of_Apparel")]
        public IActionResult GetApparellist()
        {
            var apparellist = from a in dbProGear.Products
                              where a.productCat == 1
                              select a;
            return Ok(apparellist);
        }

        [HttpGet]
        [Route("List_of_Houseware")]
        public IActionResult GetHousewarelist()
        {
            var housewarelist = from h in dbProGear.Products
                                where h.productCat == 2
                                select h;
            return Ok(housewarelist);
        }

        [HttpGet]
        [Route("List_of_Travel")]
        public IActionResult GetTravellist()
        {
            var travellist = from t in dbProGear.Products
                             where t.productCat == 3
                             select t;
            return Ok(travellist);
        }

        [HttpGet]
        [Route("List_of_Misc")]
        public IActionResult GetMisclist()
        {
            var misclist = from m in dbProGear.Products
                           where m.productCat == 4
                           select m;
            return Ok(misclist);
        }

    }
}

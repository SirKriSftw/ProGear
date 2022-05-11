using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
using ProGearAPI.Models.EF;
using System.Collections.Generic;
using System.Linq;
namespace ProGearAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        public ProGearContext dbProGear = new ProGearContext();

        [HttpGet]
        [Route("List_of_Products")]
        public IActionResult GetProductlist()
        {
            List<Product> productlist = (from p in dbProGear.Products
                                         select p).ToList();
            return Ok(productlist);
        }
       
        [HttpGet]
        [Route("getCat/{Id:int}")]
        public IActionResult GetCatList(int Id)
        {
            List<Product> catList = (from a in dbProGear.Products
                          where a.CatId == Id
                                     select a).ToList();
            return Ok(catList);
        }

        [HttpGet]
        [Route("search/{query}")]
        public IActionResult Search(string query)
        {
            List<Product> searchResult = (from s in dbProGear.Products
                               where s.ProductName.Contains(query) 
                                          select s).ToList();
            return Ok(searchResult);
        }

    }
}

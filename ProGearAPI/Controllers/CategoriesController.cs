using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProGearAPI.Models.EF;
using System;

namespace ProGearAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CategoriesController : ControllerBase
	{
		Category cat = new Category();

		[HttpGet]
		[Route("getAll")]
		public IActionResult getAllCategories()
		{
			try
			{
				return Ok(cat.getAllCategories());
			}
			catch (Exception ex) 
			{
				return BadRequest(ex.Message);
			}
		}
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

#nullable disable

namespace ProGearAPI.Models.EF
{
    public partial class Category
    {
        public Category()
        {
            Products = new HashSet<Product>();
        }

        public int CatId { get; set; }
        public string CatName { get; set; }

        [JsonIgnore]
        public virtual ICollection<Product> Products { get; set; }

        ProGearContext db = new ProGearContext();

        public DbSet<Category> getAllCategories()
        {
            var allCat = db.Categories;
            if (allCat.Count() <= 0)
            {
                throw new Exception("No categories in system");
            }
            else
            {
                return allCat;
            }
        }
    }
}

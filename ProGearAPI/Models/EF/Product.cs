using System;
using System.Collections.Generic;

#nullable disable

namespace ProGearAPI.Models.EF
{
    public partial class Product
    {
        public Product()
        {
            Orders = new HashSet<Order>();
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductDetails { get; set; }
        public int ProductStock { get; set; }
        public double ProductPrice { get; set; }
        public string ProductCat { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}

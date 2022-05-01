using System;
using System.Collections.Generic;

#nullable disable

namespace ProGearAPI.Models.EF
{
    public partial class Cart
    {
        public Cart()
        {
            Orders = new HashSet<Order>();
        }

        public int CartId { get; set; }
        public int? UserId { get; set; }
        public double? Total { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}

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
        public string UserId { get; set; }
        public double? Total { get; set; }
        public bool? PaidFor { get; set; }
        public DateTime? PaidOn { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}

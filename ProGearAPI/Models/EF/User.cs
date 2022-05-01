using System;
using System.Collections.Generic;

#nullable disable

namespace ProGearAPI.Models.EF
{
    public partial class User
    {
        public User()
        {
            Carts = new HashSet<Cart>();
            Invoices = new HashSet<Invoice>();
        }

        public int UserId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Invoice> Invoices { get; set; }
    }
}

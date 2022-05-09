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
        }

        public string UserId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public virtual ICollection<Cart> Carts { get; set; }
    }
}

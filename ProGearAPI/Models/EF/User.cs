using System;
using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;

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
        public string FirstName { get; set; }
        public string LastName { get; set; }
        ProGearContext db = new ProGearContext();


        [JsonIgnore]
        public virtual ICollection<Cart> Carts { get; set; }

        // check if a user is registered in the db already
        public bool Check(string userId)
        {
            var count = db.Users.Where(user => user.UserId == userId).ToList();

            if (count.Count() > 0)
            {
                return true;
            }
            return false;
        }
        // register a new user
        public void NewRegister(User user)
        {
            try
            {
                db.Users.Add(user);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            } 
        }
    }
}

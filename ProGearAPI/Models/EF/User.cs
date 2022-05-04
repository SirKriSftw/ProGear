using System;
using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

#nullable disable

namespace ProGearAPI.Models.EF
{
    public partial class User
    {
        public User()
        {
            Carts = new HashSet<Cart>();
        }

        ProGearContext db = new ProGearContext();
        public int UserId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        [JsonIgnore]
        public virtual ICollection<Cart> Carts { get; set; }

        public User authenticate(User authUser)
        {
            User loggedUser = new User();

            var vUser = db.Users.Where(u => u.Email == authUser.Email && u.Password == authUser.Password).SingleOrDefault();

            if (vUser != null)
            {
                loggedUser.UserId = vUser.UserId;
                loggedUser.Email = vUser.Email;
                loggedUser.Password = "";
                loggedUser.FirstName = vUser.FirstName;
                loggedUser.LastName = vUser.LastName;

                return loggedUser;
            }
            else
            {
                throw new Exception("Authentication failed");
            }
        }
        public string createUser(User newUser)

        {
            
            if (newUser != null)
            {
                var vUser = db.Users;
                foreach (var user in vUser)
                {
                    if ((newUser.Email == user.Email))
                       
                    {
                        throw new Exception("USER ALREADY EXIST IN SYSTEM");
                    }
                }
                if (newUser.Password.Length < 8)
                {
                    throw new Exception("Password is too short");
                }

                vUser.Add(newUser);
                db.SaveChanges();
                return "New User Created";

            }
            else
                throw new Exception("INVALID INPUT");

        }

    }
}


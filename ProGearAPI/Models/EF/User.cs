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

        ProGearContext db = new ProGearContext();
        public string UserId { get; set; }
        public string Email { get; set; }
       // public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }


        [JsonIgnore]
        public virtual ICollection<Cart> Carts { get; set; }

        public User authenticate(User authUser)
        {
            User loggedUser = new User();

            var vUser = db.Users.Where(u => u.Email == authUser.Email ).SingleOrDefault();

            if (vUser != null)
            {
                loggedUser.UserId = vUser.UserId;
                loggedUser.Email = vUser.Email;
             
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
            

                vUser.Add(newUser);
                db.SaveChanges();
                return "New User Created";

            }
            else
                throw new Exception("INVALID INPUT");

        }


        public string Login(string email, string password)
        {
            if (check(email) == true)
            {
                var usr = (from u in db.Users
                           where u.Email == email
                       
                           select u.FirstName);

                if (usr != null)
                {
                    return usr.SingleOrDefault();
                }
                else
                {
                    return null;
                }
            }
            else
            {
                return null;
            }
        }

        public bool check(string input)
        {
            Regex regex = new Regex(@"^[\w!#$%&'+-/=?^_`{|}~]+(.[\w!#$%&'+-/=?^_`{|}~]+)*" + "@" + @"((([-\w]+.)+[a-zA-Z]{2,4})|(([0-9]{1,3}.){3}[0-9]{1,3}))$");
            Match match = regex.Match(input);
            return (match.Success) ? true : false;
        }

        public bool Check(string userId)
        {
            var count = db.Users.Where(user => user.UserId == userId).ToList();

            if (count.Count()>0)
            {
                return true;
            }
            return false;
        }
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

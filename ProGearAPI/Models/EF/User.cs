using System;
using System.Collections.Generic;
using System.Linq;
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

        public int UserId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public virtual ICollection<Cart> Carts { get; set; }

        ProGearContext dbContext = new ProGearContext();

        public string Login(string email, string password)
        {
            if (check(email) == true)
            {
                var usr = (from u in dbContext.Users
                           where u.Email == email
                           && u.Password == password
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
    }
}

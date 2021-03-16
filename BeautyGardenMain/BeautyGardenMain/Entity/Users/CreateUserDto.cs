using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeautyGardenMain.Entity.Users
{
    public class CreateUserDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
    }
}

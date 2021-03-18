using BeautyGardenMain.Data.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeautyGardenMain.Data.Posts
{
    public class Post
    {
        public int Id { get; set; }
        public virtual User User { get; set; }
        public int UserId { get; set; }
    }
}

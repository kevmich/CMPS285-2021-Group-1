using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BeautyGardenMain.Migrations.Entity.Blog
{
    public class BlogPost
    {
        [Key]
        public int BlogID { get; set; }

        public string BlogTitle { get; set; }

        public string BlogDate { get; set; }

        public string BlogBody { get; set; }

        public string ImageName { get; set; }

     }
}

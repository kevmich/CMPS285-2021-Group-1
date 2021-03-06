﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BeautyGardenMain.Migrations.Entity.Blog
{
    public class BlogPostDto
    {
        public int BlogID { get; set; }

        public string BlogTitle { get; set; }

        public string BlogDate { get; set; }

        public string BlogBody { get; set; }

        public string ImageName { get; set; }

        [NotMapped]
        public string ImageSrc { get; set; }

        [NotMapped]
        public IFormFile ImageFile { get; set; }
    }

}

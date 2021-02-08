using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BeautyGardenMain.Models;

namespace BeautyGardenMain.Data
{
    public class BeautyGardenMainContext : DbContext
    {
        public BeautyGardenMainContext (DbContextOptions<BeautyGardenMainContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<BeautyGardenMain.Models.UserContact> Contacts { get; set; }
    }
}

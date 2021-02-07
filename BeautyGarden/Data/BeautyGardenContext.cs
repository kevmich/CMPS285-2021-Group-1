using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BeautyGarden.Models;

namespace BeautyGarden.Data
{
    public class BeautyGardenContext : DbContext
    {
        public BeautyGardenContext (DbContextOptions<BeautyGardenContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<BeautyGarden.Models.Contact> Contact { get; set; }
    }
}

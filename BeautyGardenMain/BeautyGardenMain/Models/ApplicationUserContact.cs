using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BeautyGardenMain.Models
{
    public class ApplicationUserContact:DbContext
    {
        public ApplicationUserContact(DbContextOptions<ApplicationUserContact> options) : base(options)
        {

        }

        public DbSet<UserContact> NewContact { get; set; }
    }
}

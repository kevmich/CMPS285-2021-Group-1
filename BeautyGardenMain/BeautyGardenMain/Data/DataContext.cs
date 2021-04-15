using BeautyGardenMain.Data.Posts;
using BeautyGardenMain.Data.Users;
using BeautyGardenMain.Entity.UserContacts;
using BeautyGardenMain.Migrations.Entity.Blog;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeautyGardenMain.Data
{
    public class DataContext : IdentityDbContext<User, Role, int, IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
    {

      
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<Post> Post { get; set; }
        public DbSet<UserContact> UserContact { get; set; }

        public DbSet<BlogPost> BlogPost { get; set; }
       
        //DbSet go here--------

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            var userRoleBuilder = builder.Entity<UserRole>();

            userRoleBuilder.HasKey(x => new { x.UserId, x.RoleId });

            userRoleBuilder.HasOne(x => x.Role)
                .WithMany(x => x.Users)
                .HasForeignKey(x => x.RoleId);
            //one Role has many users
            userRoleBuilder.HasOne(x => x.User)
                .WithMany(x => x.Roles)
                .HasForeignKey(x => x.UserId);
            //one User has many roles
        }//end OnModelCreating
    }//end Datacoontext
}//end namespace
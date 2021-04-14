 using BeautyGardenMain.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeautyGardenMain.Data.Users;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;

namespace BeautyGardenMain
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            

            services.AddControllers();

            services.AddDbContext<DataContext>(options =>
                 options.UseSqlServer(Configuration.GetConnectionString("DataContext")));

            services.AddIdentity<User, Role>()
               .AddEntityFrameworkStores<DataContext>();

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "beauty/build";
            });

            services.AddSwaggerGen();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "My API", Version = "V1" });
            });

        }//end ConfigureServices

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            MigrateDb(app);
            AddRoles(app).GetAwaiter().GetResult();
            AddUsers(app).GetAwaiter().GetResult();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");

            });

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseRouting();

            

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "beauty";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }//end Configure
        private static async Task AddRoles(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var roleManager = serviceScope.ServiceProvider.GetService<RoleManager<Role>>();
                if (roleManager.Roles.Any())
                {
                    return;
                }

                await roleManager.CreateAsync(new Role { Name = Roles.Admin });
            }
        }//end AddRoles

        private static async Task AddUsers(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var userManager = serviceScope.ServiceProvider.GetService<UserManager<User>>();
                if (userManager.Users.Any())
                {
                    return;
                }

                await CreateUser(userManager, "admin", Roles.Admin);
                //await CreateUser(userManager, "employee", Roles.Employee);
            }
        }//end AddUsers

        private static async Task CreateUser(UserManager<User> userManager, string username, string role)
        {
            const string passwordForEveryone = "Password123!";
            var user = new User { UserName = username };
            await userManager.CreateAsync(user, passwordForEveryone);
            await userManager.AddToRoleAsync(user, role);
        }//end CreateUser

        private static void MigrateDb(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<DataContext>();       //Builds database to execute migrations
                //context.Database.Migrate();
            }
        }//end MigrateDb



    }//end Startup
}//end namespace

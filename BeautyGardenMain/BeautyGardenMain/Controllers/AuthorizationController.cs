using BeautyGardenMain.Data;
using BeautyGardenMain.Data.Users;
using BeautyGardenMain.Entity;
using BeautyGardenMain.Entity.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace BeautyGardenMain.Controllers
{
    [Route("/api/auth")]
    [ApiController]
    public class AuthorizationController : ControllerBase
    {
        private readonly DataContext dataContext;
        private readonly UserManager<User> userManager;
        private readonly RoleManager<Role> roleManager;
        private readonly SignInManager<User> signInManager;


        public AuthorizationController(DataContext dataContext, UserManager<User> userManager, RoleManager<Role> roleManager, SignInManager<User> signInManager)
        {
            this.dataContext = dataContext;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.signInManager = signInManager;
        }//end constructor 

        [HttpPost("login")]
        [Authorize(Roles = Roles.Admin)]

        public async Task<ActionResult> LoginAsync(LoginDto dto)
        {
            var user = await userManager.FindByNameAsync(dto.Username);
            if (user == null)
            {
                return BadRequest();
            }

            var result = await signInManager.CheckPasswordSignInAsync(user, dto.Password, true);
            if(!result.Succeeded)
            {
                return BadRequest();
            }

            await signInManager.SignInAsync(user, false, "Password");

            var roles = await userManager.GetRolesAsync(user);

            return Ok(new UserRoleDto
            {
                Id = user.Id,
                Username = user.UserName,
                UserRoles = roles
            });
        }

        [HttpPost("CreateUser")]
        public async Task<ActionResult> Create(CreateUserDto dto)
        {
            var user = new User { UserName = dto.Username };
            await userManager.CreateAsync(user, dto.Password);
            await userManager.AddToRoleAsync(user, dto.Role);
            return Ok();
        }
    }//end class
}//end namespace

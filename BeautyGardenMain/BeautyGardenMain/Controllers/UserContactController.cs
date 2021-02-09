using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeautyGardenMain.Data;
using BeautyGardenMain.Entity.UserContacts;

namespace BeautyGardenMain.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserContactController : ControllerBase
    {
        private readonly DataContext dataContext;

        public UserContactController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpPost]
        public ActionResult<UserContactDto> Created(UserContactDto dto)
        {
            var data = dataContext.Set<UserContact>().Add(new UserContact
            {
                FullName = dto.FullName,
                PhoneNumber = dto.PhoneNumber,
                Email = dto.Email,
                Comment = dto.Comment
            });
            dataContext.SaveChanges();
            return Created(string.Empty, dto);

        }

    }
}

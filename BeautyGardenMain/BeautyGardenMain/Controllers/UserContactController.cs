using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeautyGardenMain.Data;
using BeautyGardenMain.Entity.UserContacts;
using MimeKit;
using MailKit.Net.Smtp;
using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;
using Microsoft.Data.SqlClient;
using System.Linq.Expressions;

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

       [HttpGet]
        public static Expression<Func<UserContact, UserContactDto>> MapEntitytoDto()
        {
            return i => new UserContactDto
            {
                FullName = i.FullName,
                PhoneNumber = i.PhoneNumber,
                Email = i.Email,
                Comment = i.Comment
            };
           
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

        [HttpGet] 
        public IEnumerable<UserContactDto> GetAll()
            {
                return dataContext.Set<UserContact>().Select(MapEntitytoDto()).ToList();
            }
        [HttpDelete]
        public ActionResult Delete(int id)
        {
            var data = dataContext.Set<UserContact>().FirstOrDefault(x => x.Id == id);
            if (data == null)
            {
                return BadRequest();
            }
            dataContext.Set<UserContact>().Remove(data);
            dataContext.SaveChanges();
            return Ok();
        }
    }
}

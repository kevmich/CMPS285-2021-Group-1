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
using Microsoft.Extensions.Configuration;
using System.Net;
using System.Net.Mail;
using SmtpClient = System.Net.Mail.SmtpClient;

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
            return dto => new UserContactDto
            {
                Id = dto.Id,
                FullName = dto.FullName,
                PhoneNumber = dto.PhoneNumber,
                Email = dto.Email,
                Comment = dto.Comment
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
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json");
            var config = builder.Build();

            var smtpClient = new SmtpClient(config["Smtp:Host"])
            {
                Port = int.Parse(config["Smtp:Port"]),
                Credentials = new NetworkCredential(config["Smtp:Username"], config["Smtp:Password"]),
                EnableSsl = true,
            };
            var mailMessage = new MailMessage
            {
                From = new MailAddress("beatuygs@gmail.com"),
                Subject = "New Contact Submitted",
                Body = @$"<html>
                           <body>
                            <section><b>Name:</b> {dto.FullName}</section>
                             <section><b>Phone Number:</b> {dto.PhoneNumber}</section>
                             <section><b>Email:</b> {dto.Email}</section>
                             <section><b>Comment:</b> {dto.Comment}</section>
                           </body>
                           </html>",
                IsBodyHtml = true,
            };
            mailMessage.To.Add("beatuygs@gmail.com");
            smtpClient.Send(mailMessage);
            dataContext.SaveChanges();
            return Created(string.Empty, dto);

        }

        [HttpGet("{id}")]
        public IEnumerable<UserContactDto> GetById(int id)
        {
            return dataContext.Set<UserContact>().Where(x => x.Id == id).Select(MapEntitytoDto()).ToList();
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

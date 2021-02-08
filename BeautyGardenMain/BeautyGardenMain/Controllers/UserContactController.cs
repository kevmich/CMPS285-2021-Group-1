using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BeautyGardenMain.Models;

namespace BeautyGardenMain.Controllers
{
    public class UserContactController : Controller
    {
        public readonly ApplicationUserContact _auc;

        public UserContactController(ApplicationUserContact auc)
        {
            _auc = auc;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(UserContact uc)
        {
            _auc.Add(uc);
            _auc.SaveChanges();
            ViewBag.message = "Thank You";
            return View();
        }
    }
}

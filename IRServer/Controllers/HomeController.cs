using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using IRServer.App_Start;
using IRServer.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;

namespace IRServer.Controllers
{
    [RequireHttps]
    public class HomeController : Controller
    {
        public IrobusModel ctx = new IrobusModel();

        // GET: Home
        public ActionResult Index()
        {
           string result = "Вы не авторизованы";
            var s = CurrentUser;
            if (User.Identity.IsAuthenticated)
            {
                result = "Ваш логин: " + User.Identity.Name;
            }
            ViewBag.User = result;
            ViewBag.Title = "Home Page";
            return View();
        }

        private ApplicationUserManager _userManager;
        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }

        private ApplicationUser currentUser = null;
        public ApplicationUser CurrentUser
        {
            get
            {
                if (currentUser == null)
                {
                    string userName = User.Identity.Name;
                    if (userName != null)
                    {
                        currentUser = UserManager.FindByNameAsync(userName).Result;
                    }
                }
                return currentUser;
            }
        }
    }
}
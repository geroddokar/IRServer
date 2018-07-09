using IRServer.App_Start;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IRServer.Controllers
{
    [Authorize]
    public class RequestController : Controller
    {
        public RequestController(ApplicationUserManager userManager)
        {
            UserManager = userManager;
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

        // GET: Request
        public ActionResult Index()
        {

            
            return View();
        }
    }
}
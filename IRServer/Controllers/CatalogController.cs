using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using IrobusHelpLib;
using IRServer.Models;
using Microsoft.AspNet.Identity;

namespace IRServer.Controllers
{
    public class CatalogController : Controller
    {
        public IrobusModel ctx = new IrobusModel();
        // GET: Catalog
        public ActionResult Index(int id)
        {
            var userName = User.Identity.GetUserName();
            var model = new Category();
            if (id != 0)
            {
                var user = ctx.Users.FirstOrDefault(u => u.UserName == userName);
                if (user != null)
                {
                    ViewBag.ListSite =
                        ctx.Categorys.Where(c => !string.IsNullOrEmpty(c.Url) && string.IsNullOrEmpty(c.UserId));
                    model = ctx.Categorys.FirstOrDefault(t => t.ID == id && t.UserId == user.Id);
                    return View(model);
                }
                else
                {
                    return View(model);
                }
            }
            else
            {
                var user = ctx.Users.FirstOrDefault(u => u.UserName == userName);
                if (user != null)
                {
                    var listSite =
                        ctx.Categorys.Where(c => !string.IsNullOrEmpty(c.Url) && string.IsNullOrEmpty(c.UserId));

                    ViewBag.ListSite = new List<DropListCategory>();
                    model.UserId = user.Id;
                    return View(model);
                }
                else
                {
                    return View(model);
                }
            }
        }
    }
}
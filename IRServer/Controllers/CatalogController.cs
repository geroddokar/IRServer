using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using IrobusHelpLib;
using IRServer.Models;
using Microsoft.AspNet.Identity;

namespace IRServer.Controllers
{
    public class CatalogController : Controller
    {
        public IrobusModel ctx = new IrobusModel();
        // GET: Catalog
        public ActionResult Index(int id = 0)
        {
            var userName = User.Identity.GetUserName();
            var model = new Category();
            var listSite =
                ctx.Categorys.Where(c => !string.IsNullOrEmpty(c.Url) && string.IsNullOrEmpty(c.UserId)).ToList();
            var list = new List<DropListCategory>();
            foreach (var cat in listSite)
            {
                var par = ctx.Categorys.FirstOrDefault(t => t.ID == cat.ParentId);
                if (par != null)
                    list.Add(new DropListCategory() { ID = cat.ID, Name = cat.Name, ParentName = par.Name });
            }
            ViewBag.ListSite = new SelectList(list, "ID", "Name", "ParentName", 1);
            if (id != 0)
            {
                var user = ctx.Users.FirstOrDefault(u => u.UserName == userName);
                if (user != null)
                {

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
                    model.UserId = user.Id;
                    return View(model);
                }
                else
                {
                    return View(model);
                }
            }
        }
        [HttpPost]
        [Authorize]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> EditTask(Category cat)
        {
            if (!ModelState.IsValid)
            {
                return RedirectToAction("Index", new RouteValueDictionary(new Dictionary<string, object>() { { "id", 0 } }));
            }
            var userName = User.Identity.GetUserName();
            var user = ctx.Users.FirstOrDefault(u => u.UserName == userName);
            if (user != null)
            {
                if (cat != null)
                {
                    if (ctx.Categorys.Any(c => c.ID == cat.ID))
                    {
                        var oldcat = ctx.Categorys.FirstOrDefault(c => c.ID == cat.ID);
                        if (oldcat != null)
                        {
                            oldcat.Name = cat.Name;
                            oldcat.ParentId = cat.ParentId;
                            oldcat.Url = cat.Url;
                            oldcat.Icon = "";
                        }
                    }
                    else
                    {
                        cat.UserId = user.Id;
                        ctx.Categorys.Add(cat);
                    }

                    ctx.SaveChanges();


                    return RedirectToAction("Index", new RouteValueDictionary(new Dictionary<string, object>() { { "id", 0 } }));
                }
                else
                {
                    return RedirectToAction("Index", new RouteValueDictionary(new Dictionary<string, object>() { { "id", 0 } }));
                }
            }
            else
            {
                return RedirectToAction("Index", new RouteValueDictionary(new Dictionary<string, object>() { { "id", 0 } }));
            }

        }



        [Authorize]
        public ActionResult Delete(int id)
        {

            var userName = User.Identity.GetUserName();
            var user = ctx.Users.FirstOrDefault(u => u.UserName == userName);
            if (user != null)
            {
                if (ctx.Categorys.Any(c => c.ID == id && c.UserId == user.Id))
                {
                    var oldcat = ctx.Categorys.FirstOrDefault(c => c.ID == id);
                    if (oldcat != null)
                    {
                        ctx.Categorys.Remove(oldcat);
                        ctx.SaveChanges();
                    }
                }




            }
            return RedirectToAction("Index", new RouteValueDictionary(new Dictionary<string, object>() { { "id", 0 } }));

        }



    }
}
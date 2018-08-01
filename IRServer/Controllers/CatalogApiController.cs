using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using IrobusHelpLib;
using IRServer.Models;
using Newtonsoft.Json;

namespace IRServer.Controllers
{
    public class CatalogApiController : ApiController
    {
        public IrobusModel ctx = new IrobusModel();

        [System.Web.Http.HttpGet]
        // GET: api/CatalogApi/Get
        public IEnumerable<Category> Get(string userName)
        {
            if (userName == null)
            {
                return ctx.Categorys.Where(s => string.IsNullOrEmpty(s.UserId)).OrderBy(t => t.Name);
            }
            var user = ctx.Users.FirstOrDefault(u => u.UserName == userName);
            return user != null ? ctx.Categorys.Where(s => s.UserId == user.Id || string.IsNullOrEmpty(s.UserId)).OrderBy(t => t.Name) 
                : ctx.Categorys.Where(s => string.IsNullOrEmpty(s.UserId)).OrderBy(t => t.Name);
        }



        [System.Web.Http.HttpGet]
        // GET: api/CatalogApi/Get/5
        public string Get(int id)
        {
            return "value";
        }

        [System.Web.Http.HttpPost]
        public IHttpActionResult Post([FromBody]  Category cat)
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
                    }
                }
                else
                {
                    ctx.Categorys.Add(cat);
                }
                
                ctx.SaveChanges();

                return Json(cat);
            }
            else
            {
                return Json("value = null");
            }

        }
    }
}

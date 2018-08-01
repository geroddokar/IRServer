using IRServer.App_Start;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using IrobusHelpLib;
using IRServer.Models;

namespace IRServer.Controllers
{
    [Authorize]
    public class RequestController : Controller
    {
        public RequestController()
        {

        }
        public RequestController(ApplicationUserManager userManager)
        {
            UserManager = userManager;
        }

        public IrobusModel ctx = new IrobusModel();

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

        public ActionResult Details(int id)
        {
            var req = ctx.RequestObjs.FirstOrDefault(t => t.ID == id);
            switch (req.ResultTable)
            {
                case 1:
                    ViewBag.Title = req.TypeAvto.ToString();
                    break;
            }
            return View(req);

        }

        public ActionResult Create()

        {
            var tables = ctx.ResultTables.ToList();
            ViewBag.ResultTableList = ToSelectListResultTable(tables);
            return View();

        }

        [HttpPost]
        public ActionResult Create([Bind(Exclude = "ID")] RequestObj obj)
        {

            try
            {
                if (!ModelState.IsValid)
                {
                    var tables = ctx.ResultTables.ToList();
                    ViewBag.ResultTableList = ToSelectListResultTable(tables);
                    return View(obj);
                }
                ctx.RequestObjs.Add(obj);
                ctx.SaveChanges();
                return RedirectToAction("Details", new { id = obj.ID });

            }

            catch

            {

                return View();

            }

        }

        [NonAction]
        public SelectList ToSelectListResultTable(List<ResultTable> tables)
        {
            List<SelectListItem> list = new List<SelectListItem>();

            foreach (ResultTable table in tables)
            {
                list.Add(new SelectListItem()
                {
                    Text = table.Name,
                    Value = table.ID.ToString()
                });
            }

            return new SelectList(list, "Value", "Text");
        }
    }
}
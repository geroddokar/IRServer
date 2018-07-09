using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic;
using System.Linq.Expressions;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using DataTables.Mvc;
using IrobusHelpLib;
using IRServer.Models;
using LinqKit;
using Microsoft.AspNet.Identity;


namespace IRServer.Controllers
{
    [System.Web.Http.Authorize]
    public class ResultTableController : Controller
    {
        // GET: ResultTable
        public ActionResult Index()
        {
            return View();
        }

        private int PageSize = 20;
        // GET: ResultTable
        public ViewResult GetResult(int tableId = 1, int page = 1)
        {
            try
            {
                var user = User.Identity.GetUserName();
                switch (tableId)
                {
                    case 1:

                        var avto = ctx.Avtomobiles.OrderBy(p => p.ID)
                            .Skip((page - 1) * PageSize)
                            .Take(PageSize);
                        ResultAvtoListViewModel model = new ResultAvtoListViewModel
                        {
                            Results = avto,
                            PagingInfo = new PagingInfo
                            {
                                CurrentPage = page,
                                ItemsPerPage = PageSize,
                                TotalItems = ctx.Avtomobiles.Count(r => r.User == user)
                            }
                        };

                        return View(model);
                        break;
                    case 2:
                        break;
                    case 3:
                        break;

                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
            return View();
        }

        public ViewResult Avtomobile(ResultAvtoListViewModel filter)
        {
            if (filter.Filters == null)
                filter = new ResultAvtoListViewModel() { Filters = new AvtomobileFilters(){CurrentPage = 1}};
            if (filter.Filters.CurrentPage == 0)
                filter.Filters.CurrentPage = 1;
            filter.Results = new List<Avtomobile>();
            filter.PagingInfo = new PagingInfo() { CurrentPage = filter.Filters.CurrentPage, ItemsPerPage = PageSize, TotalItems = 0 };
            try
            {
                var user = User.Identity.GetUserName();
                if (string.IsNullOrEmpty(user))
                {
                    return View(filter);
                }


                var avtoTable = (from table in ctx.Avtomobiles where table.User == user select table);

                if (!string.IsNullOrEmpty(filter.Filters.Marka))
                {
                    avtoTable = avtoTable.Where(t => t.Marka.Contains(filter.Filters.Marka));
                }
                if (filter.Filters.Photo)
                {
                    avtoTable = avtoTable.Where(t => !string.IsNullOrEmpty(t.Photo.Trim()));
                }
                if (!string.IsNullOrEmpty(filter.Filters.Kpp))
                {
                    avtoTable = avtoTable.Where(t => t.KPP.Contains(filter.Filters.Kpp));
                }
                if (!string.IsNullOrEmpty(filter.Filters.Dvigatel))
                {
                    avtoTable = avtoTable.Where(t => t.Dvigatel.Contains(filter.Filters.Dvigatel));
                }
                if (!string.IsNullOrEmpty(filter.Filters.Color))
                {
                    avtoTable = avtoTable.Where(t => t.Color.Contains(filter.Filters.Color));
                }
                if (!string.IsNullOrEmpty(filter.Filters.Kuzov))
                {
                    avtoTable = avtoTable.Where(t => t.Kuzov.Contains(filter.Filters.Kuzov));
                }
                if (!string.IsNullOrEmpty(filter.Filters.Privod))
                {
                    avtoTable = avtoTable.Where(t => t.Privod.Contains(filter.Filters.Privod));
                }
                if (filter.Filters.PriceTo > 0)
                {
                    avtoTable = avtoTable.Where(t => t.Price <= filter.Filters.PriceTo);
                }
                if (filter.Filters.YearTo > 0)
                {
                    avtoTable = avtoTable.Where(t => t.Year <= filter.Filters.YearTo);
                }
                if (filter.Filters.ProbegTo > 0)
                {
                    avtoTable = avtoTable.Where(t => t.Probeg <= filter.Filters.ProbegTo);
                }
                if (filter.Filters.ObemTo > 0)
                {
                    avtoTable = avtoTable.Where(t => t.Obem <= filter.Filters.ObemTo);
                }
                if (filter.Filters.PowerTo > 0)
                {
                    avtoTable = avtoTable.Where(t => t.Power <= filter.Filters.PowerTo);
                }
                avtoTable = avtoTable.Where(t => t.Price >= filter.Filters.PriceFrom);
                avtoTable = avtoTable.Where(t => t.Year >= filter.Filters.YearFrom);
                avtoTable = avtoTable.Where(t => t.Probeg >= filter.Filters.ProbegFrom);
                avtoTable = avtoTable.Where(t => t.Obem >= filter.Filters.ObemFrom);
                avtoTable = avtoTable.Where(t => t.Power >= filter.Filters.PowerFrom);


                var avto = avtoTable.ToList();

                filter.Results = avto.Skip((filter.Filters.CurrentPage - 1) * PageSize).Take(PageSize);
                filter.PagingInfo = new PagingInfo
                    {
                        CurrentPage = filter.Filters.CurrentPage,
                        ItemsPerPage = PageSize,
                        TotalItems = avto.Count()
                    };
            }
            catch (Exception e)
            {
                
            }
            return View(filter);
        }


        public ViewResult Rabota(ResultRabotaListViewModel filter)
        {
            if (filter.Filters == null)
                filter = new ResultRabotaListViewModel() { Filters = new RabotaFilters() { CurrentPage = 1 } };
            if (filter.Filters.CurrentPage == 0)
                filter.Filters.CurrentPage = 1;
            filter.Results = new List<Rabota>();
            filter.PagingInfo = new PagingInfo() { CurrentPage = filter.Filters.CurrentPage, ItemsPerPage = PageSize, TotalItems = 0 };
            try
            {
                var user = User.Identity.GetUserName();
                if (string.IsNullOrEmpty(user))
                {
                    return View(filter);
                }


                var avtoTable = (from table in ctx.Rabotas where table.User == user select table);

                if (!string.IsNullOrEmpty(filter.Filters.Vakansia))
                {
                    avtoTable = avtoTable.Where(t => t.Vakansia.Contains(filter.Filters.Vakansia));
                }
                if (!string.IsNullOrEmpty(filter.Filters.Discription))
                {
                    avtoTable = avtoTable.Where(t => t.Discription.Contains(filter.Filters.Discription));
                }
                if (!string.IsNullOrEmpty(filter.Filters.Trebovanie))
                {
                    avtoTable = avtoTable.Where(t => t.Trebovanie.Contains(filter.Filters.Trebovanie));
                }
                if (!string.IsNullOrEmpty(filter.Filters.Usloviya))
                {
                    avtoTable = avtoTable.Where(t => t.Usloviya.Contains(filter.Filters.Usloviya));
                }
                if (!string.IsNullOrEmpty(filter.Filters.TipZanyatosri))
                {
                    avtoTable = avtoTable.Where(t => t.TipZanyatosri.Contains(filter.Filters.TipZanyatosri));
                }
                if (!string.IsNullOrEmpty(filter.Filters.Adress))
                {
                    avtoTable = avtoTable.Where(t => t.Adress.Contains(filter.Filters.Adress));
                }
                if (!string.IsNullOrEmpty(filter.Filters.OpitRaboti))
                {
                    avtoTable = avtoTable.Where(t => t.OpitRaboti.Contains(filter.Filters.OpitRaboti));
                }
                if (!string.IsNullOrEmpty(filter.Filters.Gorod))
                {
                    avtoTable = avtoTable.Where(t => t.Gorod.Contains(filter.Filters.Gorod));
                }
                if (filter.Filters.Contacts)
                {
                    avtoTable = avtoTable.Where(t => !string.IsNullOrEmpty(t.Contacts));
                }
                if (!string.IsNullOrEmpty(filter.Filters.Obrozovanie))
                {
                    avtoTable = avtoTable.Where(t => t.Obrozovanie.Contains(filter.Filters.Obrozovanie));
                }
                if (!string.IsNullOrEmpty(filter.Filters.Rabotodatel))
                {
                    avtoTable = avtoTable.Where(t => t.Rabotodatel.Contains(filter.Filters.Rabotodatel));
                }
                if (!string.IsNullOrEmpty(filter.Filters.Site))
                {
                    avtoTable = avtoTable.Where(t => t.Site.Contains(filter.Filters.Site));
                }
                if (filter.Filters.DateOfChangeFrom != null)
                {
                    avtoTable = avtoTable.Where(t => t.DateCreate >= filter.Filters.DateOfChangeFrom);
                }
                if (filter.Filters.DateOfChangeTo!= null)
                {
                    avtoTable = avtoTable.Where(t => t.DateCreate <= filter.Filters.DateOfChangeTo);
                }
                var avto = avtoTable.ToList();

                filter.Results = avto.Skip((filter.Filters.CurrentPage - 1) * PageSize).Take(PageSize);
                filter.PagingInfo = new PagingInfo
                {
                    CurrentPage = filter.Filters.CurrentPage,
                    ItemsPerPage = PageSize,
                    TotalItems = avto.Count()
                };
            }
            catch (Exception e)
            {

            }
            return View(filter);
        }


        public IrobusModel ctx = new IrobusModel();
        [System.Web.Http.Authorize]
        public ActionResult ResultAvto()
        {

            return View();
        }
        public ActionResult ResultRabota()
        {

            return View();
        }
        public ActionResult ResultNevg()
        {

            return View();
        }

        public ActionResult Errors()
        {
            return View();

        }


        public HttpResponseMessage DeleteResult(int id)
        {
            try
            {
                HttpResponseMessage response = new HttpResponseMessage();
                response.Headers.Add("DeleteMessage", "Succsessfuly Deleted!!!");
                switch (id)
                {
                    case 1:
                        ctx.Database.ExecuteSqlCommand("DELETE FROM mycontext.avtomobiles where id>0");
                        return response;

                    //return Json("OK", JsonRequestBehavior.AllowGet);
                    case 2:
                        ctx.Database.ExecuteSqlCommand("DELETE FROM mycontext.rabotas where id>0");
                        return response;
                    //return Json("OK", JsonRequestBehavior.AllowGet);
                    case 3:
                        ctx.Database.ExecuteSqlCommand("DELETE FROM mycontext.nedvigimosts where id>0");
                        return response;
                    // return Json("OK", JsonRequestBehavior.AllowGet);
                    case 999999:
                        ctx.Database.ExecuteSqlCommand("DELETE FROM mycontext.errortables where id>0");
                        return response;
                    // return Json("OK", JsonRequestBehavior.AllowGet);
                    default:

                        response.Headers.Add("DeleteMessage", "Not found table id = {id}!!!");
                        return response;
                        //return Json($"Not found table id = {id}", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception e)
            {
                HttpResponseMessage response = new HttpResponseMessage();
                response.Headers.Add("DeleteMessage", e.Message);
                return response;
                // return Json(e, JsonRequestBehavior.AllowGet);
            }


        }


        public ActionResult GetAvto([ModelBinder(typeof(DataTablesBinder))] IDataTablesRequest requestModel)
        {
            try
            {
                IQueryable<Avtomobile> query = ctx.Avtomobiles;
                var totalCount = query.Count();

                #region Filtering 

                // Apply filters for searching 
                if (requestModel.Search.Value != string.Empty)
                {
                    var value = requestModel.Search.Value.Trim();
                    query = query.Where(p => p.Marka.Contains(value) ||
                                             p.Komfort.Contains(value) ||
                                             p.Adress.Contains(value) ||
                                             p.Bezopasnost.Contains(value)
                                             || p.Color.Contains(value)
                                             || p.Contacts.Contains(value)
                                             || p.CountVlad.ToString().Contains(value)
                                             || p.DateCreate.ToString().Contains(value)
                                             || p.DateOfChange.ToString().Contains(value)
                                             || p.Discription.Contains(value)
                                             || p.Dvigatel.Contains(value)
                                             || p.KPP.Contains(value)
                                             || p.ID.ToString().Contains(value)
                                             || p.Kuzov.Contains(value)
                                             || p.Media.Contains(value)
                                             || p.Nalichie.Contains(value)
                                             || p.Obem.ToString().Contains(value)
                                             || p.Year.ToString().Contains(value)
                                             || p.VIN.Contains(value)
                                             || p.UrlString.Contains(value)
                                             || p.PhotoUrlString.Contains(value)
                                             || p.Sostoyanie.Contains(value)
                                             || p.Script.Contains(value)
                                             || p.Salon.Contains(value)
                                             || p.Rule.Contains(value)
                                             || p.Rastamogen.Contains(value)
                                             || p.Probeg.ToString().Contains(value)
                                             || p.Price.ToString().Contains(value)
                                             || p.Power.ToString().Contains(value)
                                             || p.Check.ToString().Contains(value)
                                             || p.Photo.ToString().Contains(value)
                    );
                }

                var filteredCount = query.Count();

                #endregion Filtering 

                #region Sorting 

                // Sorting 
                var sortedColumns = requestModel.Columns.GetSortedColumns();
                var orderByString = String.Empty;

                foreach (var column in sortedColumns)
                {
                    orderByString += orderByString != String.Empty ? "," : "";
                    orderByString += (column.Data) + (column.SortDirection == Column.OrderDirection.Ascendant ? " asc" : " desc");
                }
                query = query.OrderBy(orderByString == string.Empty ? "ID asc" : orderByString);

                #endregion Sorting 


                // Paging 
                if (requestModel.Length != -1)
                    query = query.Skip(requestModel.Start).Take(requestModel.Length);


                var data = query.Select(asset => new
                {
                    User = asset.User,
                    TaskName = asset.TaskName,
                    DT_RowId = asset.ID,
                    Site = asset.Site,
                    MD5 = asset.MD5,
                    Marka = asset.Marka,
                    Komfort = asset.Komfort,
                    Adress = asset.Adress,
                    Bezopasnost = asset.Bezopasnost,
                    Color = asset.Color,
                    Contacts = asset.Contacts,
                    CountVlad = asset.CountVlad,
                    DateCreate = asset.DateCreate,
                    Discription = asset.Discription,
                    Dvigatel = asset.Dvigatel,
                    KPP = asset.KPP,
                    Id = asset.ID,
                    Kuzov = asset.Kuzov,
                    Media = asset.Media,
                    Nalichie = asset.Nalichie,
                    Obem = asset.Obem,
                    Year = asset.Year,
                    VIN = asset.VIN,
                    UrlString = asset.UrlString,
                    PhotoUrlString = asset.PhotoUrlString,
                    Sostoyanie = asset.Sostoyanie,
                    Script = asset.Script,
                    Salon = asset.Salon,
                    Rule = asset.Rule,
                    Rastamogen = asset.Rastamogen,
                    Probeg = asset.Probeg,
                    Price = asset.Price,
                    Power = asset.Power,
                    Check = asset.Check,
                    Photo = asset.Photo,
                    Privod = asset.Privod,
                }).ToList();

                return Json(new DataTablesResponse(requestModel.Draw, data, filteredCount, totalCount), JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(e.InnerException);
            }
        }

        public ActionResult GetRabota([ModelBinder(typeof(DataTablesBinder))] IDataTablesRequest requestModel)
        {
            IQueryable<Rabota> query = ctx.Rabotas;
            var totalCount = query.Count();

            #region Filtering 

            // Apply filters for searching 
            if (requestModel.Search.Value != string.Empty)
            {
                var value = requestModel.Search.Value.Trim();
                query = query.Where(p => p.Vakansia.Contains(value) ||
                                         p.Adress.Contains(value) ||
                                         p.Contacts.Contains(value) ||
                                         p.DateCreate.ToString().Contains(value)
                                         || p.Discription.Contains(value)
                                         || p.Gorod.Contains(value)
                                         || p.Obrozovanie.ToString().Contains(value)
                                         || p.OpitRaboti.ToString().Contains(value)
                                         || p.Rabotodatel.ToString().Contains(value)
                                         || p.Script.Contains(value)
                                         || p.TipZanyatosri.Contains(value)
                                         || p.Trebovanie.Contains(value)
                                         || p.UrlString.ToString().Contains(value)
                                         || p.ZpDo.Equals(value)
                                         || p.ZpOt.Equals(value)
                                         || p.Usloviya.Contains(value)
                );
            }

            var filteredCount = query.Count();

            #endregion Filtering 

            #region Sorting 

            // Sorting 
            var sortedColumns = requestModel.Columns.GetSortedColumns();
            var orderByString = String.Empty;

            foreach (var column in sortedColumns)
            {
                orderByString += orderByString != String.Empty ? "," : "";
                orderByString += (column.Data) + (column.SortDirection == Column.OrderDirection.Ascendant ? " asc" : " desc");
            }
            query = query.OrderBy(orderByString == string.Empty ? "ID asc" : orderByString);

            #endregion Sorting 


            // Paging 
            if (requestModel.Length != -1)
                query = query.Skip(requestModel.Start).Take(requestModel.Length);


            var data = query.Select(asset => new
            {
                User = asset.User,
                TaskName = asset.TaskName,
                DT_RowId = asset.ID,
                Site = asset.Site,
                MD5 = asset.MD5,
                Vakansia = asset.Vakansia,
                ZpOt = asset.ZpOt,
                ZpDo = asset.ZpDo,
                UrlString = asset.UrlString,
                Contacts = asset.Contacts,
                Trebovanie = asset.Trebovanie,
                DateCreate = asset.DateCreate,
                Usloviya = asset.Usloviya,
                Discription = asset.Discription,
                TipZanyatosri = asset.TipZanyatosri,
                Adress = asset.Adress,
                Id = asset.ID,
                OpitRaboti = asset.OpitRaboti,
                Gorod = asset.Gorod,
                Obrozovanie = asset.Obrozovanie,
                Rabotodatel = asset.Rabotodatel,
                Script = asset.Script,
            }).ToList();

            return Json(new DataTablesResponse(requestModel.Draw, data, filteredCount, totalCount), JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetNedvigimost([ModelBinder(typeof(DataTablesBinder))] IDataTablesRequest requestModel)
        {
            IQueryable<Nedvigimost> query = ctx.Nedvigimosts;
            var totalCount = query.Count();

            #region Filtering 

            // Apply filters for searching 
            if (requestModel.Search.Value != string.Empty)
            {
                var value = requestModel.Search.Value.Trim();
                query = query.Where(p => p.Photo.Contains(value) ||
                                         p.Etag.Equals(value) ||
                                         p.Price.Equals(value) ||
                                         p.PriceM.Equals(value)
                                         || p.UrlString.Contains(value)
                                         || p.TypeSale.Contains(value)
                                         || p.TypeHouse.ToString().Contains(value)
                                         || p.Phone.ToString().Contains(value)
                                         || p.SdachaGk.ToString().Contains(value)
                                         || p.Sanuzel.Contains(value)
                                         || p.Remont.Contains(value)
                                         || p.AreaKyhnya.Equals(value)
                                         || p.ID.ToString().Contains(value)
                                         || p.AreaRoom.Equals(value)
                                         || p.AreaAll.Equals(value)
                                         || p.Discription.Contains(value)
                                         || p.Lift.ToString().Contains(value)
                                         || p.CountRoom.ToString().Contains(value)
                                         || p.AreaLife.Equals(value)
                                         || p.DateOfChange.ToString().Contains(value)
                                         || p.VidIzOkna.Contains(value)
                                         || p.Balkon.Contains(value)
                                         || p.Adress.Contains(value)
                );
            }

            var filteredCount = query.Count();

            #endregion Filtering 

            #region Sorting 

            // Sorting 
            var sortedColumns = requestModel.Columns.GetSortedColumns();
            var orderByString = String.Empty;

            foreach (var column in sortedColumns)
            {
                orderByString += orderByString != String.Empty ? "," : "";
                orderByString += (column.Data) + (column.SortDirection == Column.OrderDirection.Ascendant ? " asc" : " desc");
            }
            query = query.OrderBy(orderByString == string.Empty ? "ID asc" : orderByString);

            #endregion Sorting 


            // Paging 
            if (requestModel.Length != -1)
                query = query.Skip(requestModel.Start).Take(requestModel.Length);


            var data = query.Select(asset => new
            {
                User = asset.User,
                TaskName = asset.TaskName,
                DT_RowId = asset.ID,
                Site = asset.Site,
                MD5 = asset.MD5,
                Photo = asset.Photo,
                Etag = asset.Etag,
                CountFloor = asset.CountFloor,
                Metro = asset.Metro,
                Price = asset.Price,
                PriceM = asset.PriceM,
                UrlString = asset.UrlString,
                TypeSale = asset.TypeSale,
                TypeHouse = asset.TypeHouse,
                Phone = asset.Phone,
                SdachaGK = asset.SdachaGk,
                Sanuzel = asset.Sanuzel,
                Remont = asset.Remont,
                AreaKyhnya = asset.AreaKyhnya,
                Id = asset.ID,
                AreaRoom = asset.AreaRoom,
                AreaAll = asset.AreaAll,
                Discription = asset.Discription,
                Lift = asset.Lift,
                CountRoom = asset.CountRoom,
                AreaLife = asset.AreaLife,
                DateCreate = asset.DateCreate,
                VidIzOkna = asset.VidIzOkna,
                Balkon = asset.Balkon,
                Adress = asset.Adress,
                Contact = asset.Phone,
                Script = asset.Script
            }).ToList();

            return Json(new DataTablesResponse(requestModel.Draw, data, filteredCount, totalCount), JsonRequestBehavior.AllowGet);

        }


        public ActionResult GetErrors([ModelBinder(typeof(DataTablesBinder))] IDataTablesRequest requestModel)
        {
            IQueryable<ErrorTable> query = ctx.ErrorTables;
            var totalCount = query.Count();

            #region Filtering 

            var filteredCount = query.Count();

            #endregion Filtering 

            #region Sorting 

            // Sorting 
            var sortedColumns = requestModel.Columns.GetSortedColumns();
            var orderByString = String.Empty;

            foreach (var column in sortedColumns)
            {
                orderByString += orderByString != String.Empty ? "," : "";
                orderByString += (column.Data) + (column.SortDirection == Column.OrderDirection.Ascendant ? " asc" : " desc");
            }
            query = query.OrderBy(orderByString == string.Empty ? "ID asc" : orderByString);

            #endregion Sorting 


            // Paging 
            query = query.Skip(requestModel.Start).Take(requestModel.Length);


            var data = query.Select(asset => new
            {
                DT_RowId = asset.ID,
                Url = asset.Url,
                Script = asset.Script,
                Field = asset.Field,
                ValueScript = asset.ValueScript,
                ValueResTable = asset.ValueResTable,
                DateException = asset.DateException,
                DateEdit = asset.DateEdit,
                Developer = asset.Developer,
                Corrected = asset.Corrected,
                Counter = asset.Counter,
                TypeError = asset.TypeError,
                Id = asset.ID
            }).ToList();

            return Json(new DataTablesResponse(requestModel.Draw, data, filteredCount, totalCount), JsonRequestBehavior.AllowGet);

        }
    }


}
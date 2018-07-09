using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Linq.Dynamic;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;
using DataTables.AspNet.Core;
using DataTables.AspNet.Mvc5;
using IrobusHelpLib;
using IRServer.App_Start;
using IRServer.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Newtonsoft.Json;

namespace IRServer.Controllers
{
    [System.Web.Http.Authorize]
    public class AvtosController : ApiController
    {

        private const string LocalLoginProvider = "Local";
        private ApplicationUserManager _userManager;

        public AvtosController()
        {
        }

        public AvtosController(ApplicationUserManager userManager,
            ISecureDataFormat<AuthenticationTicket> accessTokenFormat)
        {
            UserManager = userManager;
            AccessTokenFormat = accessTokenFormat;
        }

        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? Request.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }

        public ISecureDataFormat<AuthenticationTicket> AccessTokenFormat { get; private set; }


        public IrobusModel ctx = new IrobusModel();

        [HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        public IEnumerable<Avtomobile> GetAllAvtomobiles()
        {

            return ctx.Avtomobiles.OrderByDescending(t => t.ID).Take(30).ToList();
        }
        [HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        public IHttpActionResult GetAvtomobile(int id)
        {

            var product = ctx.Avtomobiles.FirstOrDefault((p) => p.ID == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
        [HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        [System.Web.Http.Route("api/Avtos/RabotaAdd")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult RabotaAdd([FromBody] AnswerRabota value)
        {
            try
            {
                var userName = User.Identity.GetUserName();
                if (string.IsNullOrEmpty(userName))
                {
                    var request = new RequestResultAdd()
                    {
                        CountError = 1,
                        CountNewResult = 0,
                        CountResult = 0,
                        UrlResult = null,
                        Message = "ERROR: userName = null"
                    };
                    return Json(request);
                }
                if (value != null)
                {
                    var scrtipt = ctx.Scripts.FirstOrDefault(s => s.Name == value.ScriptName);
                    if (scrtipt == null)
                        return Json("Not found script by name");
                    var resList = scrtipt.ResultFields.Split(',').ToList();
                    if (resList.Count == 0)
                        return Json("Not found ResultFields");
                    var resField = ctx.ResultFields.Where(r => r.TableId == 1 && resList.Any(s => s == r.Name)).ToList();
                    var countRes = value.Table.Count();
                    foreach (var rabota in value.Table)
                    {
                        if (rabota.UrlString != null)
                        {
                            var str = EncodeString($"{rabota.UrlString}");
                            rabota.MD5 = str;
                            if (!value.isDubl)
                                if (ctx.Rabotas.Any(t => t.MD5 == str))
                                {
                                    countRes = countRes - 1;
                                    continue;
                                }

                        }
                        rabota.User = userName;
                        rabota.Script = value.ScriptName;
                        if (!string.IsNullOrEmpty(value.Url))
                        {
                            var url = new Uri(value.Url);
                            rabota.Site = url.Host;
                        }
                        foreach (var field in resField)
                        {
                            FindError(field, rabota, value.ScriptName, value.Url);
                        }
                        ctx.Rabotas.Add(rabota);
                        ctx.SaveChanges();
                    }
                    AddError(value.Errors, value.ScriptName, value.Url, resField);
                    var request = new RequestResultAdd()
                    {
                        CountError = ctx.ErrorTables.Count(er => er.Script == value.ScriptName),
                        CountNewResult = countRes,
                        CountResult = value.Table.Count(),
                        UrlResult = "http://localhost:55818/ResultTable/ResultAvto/2"
                    };
                    ctx.SaveChanges();
                    return Json(request);
                }
                return Json("value = null");
            }
            catch (Exception e)
            {
                return BadRequest("Error");
            }


        }

        private void FindError(ResultField field, object nedvigimost, string ScriptName, string Url)
        {
            var val = nedvigimost.GetPropValue(field.EngName);
            ErrorTable error = new ErrorTable() { TypeError = 3, Script = ScriptName, Url = Url, Field = field.Name, ValueScript = "", DateException = DateTime.Now, Counter = 1 };
            error.TypeError = -1;
            switch (field.Type)
            {
                case "Целое число":
                    if (val == null)
                    {

                        error.TypeError = field.Important? 1: 3;
                    }
                    else
                    {
                        var valInt = (int)val;
                        if (valInt == -10000001)
                        {
                            error.TypeError = field.Important ? 6 : 2;
                        }
                    }
                    break;
                case "Число с плавающей точкой":
                    if (val == null)
                    {
                        error.TypeError = field.Important ? 1 : 3;

                    }
                    else
                    {
                        var valDouble = (double)nedvigimost.GetPropValue(field.EngName);

                        if (Math.Abs(valDouble - (-10000001.0)) == 0)
                        {
                            error.TypeError = field.Important ? 6 : 2;
                        }
                    }

                    break;
                case "Строка":
                    if (val == null)
                        val = "";
                    var reg = new Regex("[a-zA-Z0-9_а-яА-Я]+");
                    if (reg.Matches(val.ToString()).Count > 1)
                    {
                        error = (new ErrorTable()
                        {
                            TypeError = 4,
                            Script = ScriptName,
                            Url = Url,
                            Field = field.Name,
                            ValueScript = "",
                            DateException = DateTime.Now, Counter = 1
                        });
                    }
                    break;
                case "Дата время":
                    if (val == null)
                    {
                        error.TypeError = field.Important ? 1 : 3;

                    }
                    var date = DateTime.MinValue;
                    DateTime.TryParse(nedvigimost.GetPropValue(field.EngName)?.ToString(), out date);
                    if (date == DateTime.MinValue)
                    {
                        error.TypeError = field.Important ? 6 : 2;
                    }
                    break;
                case "URL":
                    break;

            }
            if (error.TypeError != -1)
            {
                var err = ctx.ErrorTables.FirstOrDefault(
                    s => s.Script == error.Script && s.Field == error.Field &&
                         !s.Corrected && s.TypeError == error.TypeError);
                if (err != null)
                {
                    err.Counter = err.Counter + 1;
                }
                else
                {
                    ctx.ErrorTables.Add(error);

                }


            }
        }
        [HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        [System.Web.Http.Route("api/Avtos/NedvAdd")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult NedvAdd([FromBody] AnswerNedvig value)
        {
            try
            {
                var userName = User.Identity.GetUserName();
                if (string.IsNullOrEmpty(userName))
                {
                    var request = new RequestResultAdd()
                    {
                        CountError = 1,
                        CountNewResult = 0,
                        CountResult = 0,
                        UrlResult = null,
                        Message = "ERROR: userName = null"
                    };
                    return Json(request);
                }
                if (value != null)
                {
                    var scrtipt = ctx.Scripts.FirstOrDefault(s => s.Name == value.ScriptName);
                    if (scrtipt == null)
                        return Json("Not found script by name");
                    var resList = scrtipt.ResultFields.Split(',').ToList();
                    if (resList.Count == 0)
                        return Json("Not found ResultFields");
                    var resField = ctx.ResultFields.Where(r => r.TableId == 1 && resList.Any(s => s == r.Name)).ToList();
                    var countRes = value.Table.Count();
                    foreach (var nedvigimost in value.Table)
                    {
                        if (nedvigimost.UrlString != null)
                        {
                            var str = EncodeString($"{nedvigimost.UrlString}");
                            nedvigimost.MD5 = str;
                            if (!value.isDubl)
                                if (ctx.Nedvigimosts.Any(t => t.MD5 == str))
                                {
                                    countRes = countRes - 1;
                                    continue;
                                }

                        }
                        if (!string.IsNullOrEmpty(value.Url))
                        {
                            var url = new Uri(value.Url);
                            nedvigimost.Site = url.Host;
                        }
                        nedvigimost.User = userName;
                        nedvigimost.Script = value.ScriptName;
                        foreach (var field in resField)
                        {
                            FindError(field, nedvigimost, value.ScriptName, value.Url);
                        }
                        ctx.Nedvigimosts.Add(nedvigimost);
                        ctx.SaveChanges();
                    }
                    AddError(value.Errors, value.ScriptName, value.Url, resField);
                    var request = new RequestResultAdd()
                    {
                        CountError = ctx.ErrorTables.Count(er => er.Script == value.ScriptName),
                        CountNewResult = countRes,
                        CountResult = value.Table.Count(),
                        UrlResult = "http://localhost:55818/ResultTable/ResultAvto/3"
                    };
                    ctx.SaveChanges();
                    return Json(request);
                }
                return Json("value = null");
            }
            catch (Exception e)
            {
                return BadRequest("Error");
            }


        }
        [HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        [System.Web.Http.Route("api/Avtos/AddAvtomobile")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult AddAvtomobile([FromBody] AnswerAvto value)
        {
            try
            {
                var userName = User.Identity.GetUserName();
                if (string.IsNullOrEmpty(userName))
                {
                    var request = new RequestResultAdd()
                    {
                        CountError = 1,
                        CountNewResult = 0,
                        CountResult = 0,
                        UrlResult = null,
                        Message = "ERROR: userName = null"
                    };
                    return Json(request);
                }
                if (value != null)
                {
                    var scrtipt = ctx.Scripts.FirstOrDefault(s => s.Name == value.ScriptName);
                    if (scrtipt == null)
                        return Json("Not found script by name");
                    var resList = scrtipt.ResultFields.Split(',').ToList();
                    if (resList.Count == 0)
                        return Json("Not found ResultFields");
                    var resField = ctx.ResultFields.Where(r => r.TableId == 1 && resList.Any(s => s == r.Name)).ToList();
                    var countRes = value.Table.Count();
                    foreach (var avto in value.Table)
                    {
                        if (avto.UrlString != null)
                        {
                            var str = EncodeString($"{avto.UrlString}");
                            avto.MD5 = str;
                            if (!value.isDubl)
                                if (ctx.Avtomobiles.Any(t => t.MD5 == str))
                                {
                                    countRes = countRes - 1;
                                    continue;
                                }


                        }
                        if (!string.IsNullOrEmpty(value.Url))
                        {
                            var url = new Uri(value.Url);
                            avto.Site = url.Host;
                        }
                        avto.User = userName;
                        avto.Script = value.ScriptName;
                        foreach (var field in resField)
                        {
                            FindError(field, avto, value.ScriptName, value.Url);
                        }

                        ctx.Avtomobiles.Add(avto);
                        ctx.SaveChanges();
                    }


                    AddError(value.Errors, value.ScriptName, value.Url, resField);
                    var request = new RequestResultAdd()
                    {
                        CountError = ctx.ErrorTables.Count(er => er.Script == value.ScriptName),
                        CountNewResult = countRes,
                        CountResult = value.Table.Count(),
                        UrlResult = "http://localhost:55818/ResultTable/ResultAvto/1"
                    };
                    ctx.SaveChanges();
                    return Json(request);
                }
                return Json("value = null");

            }
            catch (Exception e)
            {
                return BadRequest("Error");
            }


        }

        private void AddError(Error[] Errors, string ScriptName, string Url, List<ResultField> resField)
        {
            foreach (var error in Errors)
            {
                var err =
                    ctx.ErrorTables.FirstOrDefault(
                        er => er.Script == ScriptName && er.Field == error.Field && er.Corrected != true);
                if (err != null)
                {
                    err.Counter = err.Counter + 1;
                }
                else
                {
                    var field = resField.FirstOrDefault(f => f.EngName == error.Field);
                    var errorobj = new ErrorTable()
                    {
                        TypeError = -1,
                        Script = ScriptName,
                        Url = Url,
                        Field = error.Field,
                        ValueScript = error.Value,
                        DateException = DateTime.Now,
                        Counter = 1
                    };
                    errorobj.TypeError = field != null && field.Important ? 0 : 5;
                    if (errorobj.TypeError != -1)
                        ctx.ErrorTables.Add(errorobj);
                }

            }
        }

 
        private string EncodeString(string str)
        {
            Byte[] originalBytes;
            Byte[] encodedBytes;
            MD5 md5;

            md5 = new MD5CryptoServiceProvider();
            originalBytes = ASCIIEncoding.Default.GetBytes(str);
            encodedBytes = md5.ComputeHash(originalBytes);

            return System.Text.RegularExpressions.Regex.Replace(BitConverter.ToString(encodedBytes), "-", "").ToLower();
        }

    }
}

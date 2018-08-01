using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web.Http;
using IrobusHelpLib;
using IRServer.Models;

namespace IRServer.Controllers
{
    public class ScriptController : ApiController
    {
        public IrobusModel ctx = new IrobusModel();

        [System.Web.Http.HttpGet]
        // GET: api/Script/Get
        public IEnumerable<Script> Get()
        {
            return ctx.Scripts.OrderBy(t => t.CategoryID);
        }

        [System.Web.Http.HttpGet]
        // GET: api/Script/Get/id
        public Script Get(int id)
        {
            return ctx.Scripts.FirstOrDefault(t => t.ID == id);
        }
        [System.Web.Http.HttpGet]
        // GET: api/Script/GetFromTableId/id
        public IEnumerable<Script> GetFromTableId(int id)
        {
            return ctx.Scripts.Where(t => t.TableId == id);
        }

        public HttpResponseMessage Post([FromBody]ScriptUrl scriptUrl)
        {
            try
            {
                var scripts = new List<Script>();
                foreach (var script in ctx.Scripts)
                {
                    if (script.RegexUrl != null)
                    {
                        try
                        {
                            var rg = new Regex(script.RegexUrl);
                            if (!rg.IsMatch(scriptUrl.Url))
                                continue;
                            else
                            {
                                scripts.Add(script);

                            }
                        }
                        catch (Exception e)
                        {

                            continue;
                        }

                    }
                }
                if (scripts.Count == 0)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, "Not found");
                }
                var firstOrDefault = scripts.FirstOrDefault();
                return firstOrDefault!= null ? Request.CreateResponse(HttpStatusCode.OK, firstOrDefault.JsPathFileLocal) : Request.CreateResponse(HttpStatusCode.OK, "Not found");
                
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, e.InnerException);
            }
           
        }

        [System.Web.Http.Route("api/script/AddScript")]
        [System.Web.Http.HttpPost]
        public HttpResponseMessage AddScript(Script script)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest);
                }
                ctx.Scripts.Add(script);
                ctx.SaveChangesAsync();
                return Request.CreateResponse(HttpStatusCode.Created);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        [System.Web.Http.Route("api/script/UpdateScript")]
        [System.Web.Http.HttpPost]
        public HttpResponseMessage UpdateScript(Script script)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest);
                }
                var curscr = ctx.Scripts.FirstOrDefault(r => r.ID == script.ID);
                if (curscr != null)
                {
                    curscr.Name = script.Name;
                    curscr.DateOfChange = script.DateOfChange;
                    curscr.Url = script.Url;
                    curscr.PathFileServer = script.PathFileServer;
                    curscr.PathFileLocal = script.PathFileLocal;
                    curscr.JsPathFileLocal = script.JsPathFileLocal;
                    curscr.JsPathFileServer = script.JsPathFileServer;
                    curscr.TypePage = script.TypePage;
                    curscr.Type = script.Type;
                    curscr.TableId = script.TableId;
                    ctx.SaveChangesAsync();
                    return Request.CreateResponse(HttpStatusCode.OK);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }


        [System.Web.Http.Route("api/script/AddUrlRegex")]
        [System.Web.Http.HttpPost]
        public HttpResponseMessage AddUrlRegex(RegexUrlToScript regexUrl)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest);
                }
                ctx.RegexUrlToScripts.Add(regexUrl);
                ctx.SaveChangesAsync();
                return Request.CreateResponse(HttpStatusCode.Created);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        [System.Web.Http.Route("api/script/UpdateUrlRegex")]
        [System.Web.Http.HttpPost]
        public HttpResponseMessage UpdateUrlRegex(RegexUrlToScript regexUrl)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest);
                }
                var curReg = ctx.RegexUrlToScripts.FirstOrDefault(r => r.ID == regexUrl.ID);
                if (curReg != null)
                {
                    curReg.Name = regexUrl.Name;
                    curReg.RegexText = regexUrl.RegexText;
                    curReg.Url = regexUrl.Url;
                    curReg.ScriptID = regexUrl.ScriptID;
                    ctx.SaveChangesAsync();
                    return Request.CreateResponse(HttpStatusCode.OK);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }
               
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        [System.Web.Http.Route("api/script/DeleteUrlRegex")]
        [System.Web.Http.HttpDelete]
        public IHttpActionResult DeleteUrlRegex(RegexUrlToScript regexUrl)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Json(HttpStatusCode.InternalServerError);
                }
                ctx.RegexUrlToScripts.Remove(regexUrl);
                ctx.SaveChangesAsync();
                return Json(HttpStatusCode.Created);
            }
            catch (Exception ex)
            {
                return Json(ex.InnerException);
            }
        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/script/GetCountError/{name}")]
        public int GetCountError(string name)
        {

            try
            {
                var count = 0;
                count = ctx.ErrorTables.Count(r => r.Script == name);
                return count;
            }
            catch (Exception e)
            {
                return -1;
            }
        }
    }
}

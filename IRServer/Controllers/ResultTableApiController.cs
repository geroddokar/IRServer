using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using IrobusHelpLib;
using IRServer.Models;
using Microsoft.AspNet.Identity;

namespace IRServer.Controllers
{
    [RoutePrefix("api/ResultTableApi")]
    public class ResultTableApiController : ApiController
    {
        public IrobusModel ctx = new IrobusModel();

        [System.Web.Http.HttpGet]
        [Route("GetById/{id}")]
        public ResultTable GetById(int id)
        {
            return ctx.ResultTables.FirstOrDefault(t => t.ID == id);
        }

        [System.Web.Http.HttpGet]
        public IEnumerable<ResultTable> GetAllTable()
        {
            return ctx.ResultTables.OrderBy(t => t.ID);
        }

        [System.Web.Http.HttpGet]
        [Route("GetAllTemplate/{name}")]
        public IEnumerable<Template> GetAllTemplate(string name)
        {
            var templ = ctx.TypeTemplates.FirstOrDefault(t => t.Name.Contains(name));
            return ctx.Templates.Where(t => t.TypeId == templ.ID);
        }

        [System.Web.Http.HttpGet]
        public IEnumerable<TypeTemplate> GetAllTypeTemplate()
        {
            return ctx.TypeTemplates.OrderBy(t => t.ID);
        }
        [System.Web.Http.HttpGet]
        [Route("GetResFieldEngRus/{id}")]
        public IEnumerable<ResultField> GetResFieldEngRus(int id)
        {
            return ctx.ResultFields.Where(t => t.TableId == id);
        }
        [System.Web.Http.HttpGet]
        [Route("GetResultFieldsByName/{name}")]
        public string GetResultFieldsByName(string name)
        {
            var field = ctx.ResultFields.FirstOrDefault(t => t.Name == name);

            return field.EngName;
        }

        [System.Web.Http.HttpGet]
        [Route("GetResultFieldsByTableId/{id}")]
        public IEnumerable<ResultField> GetResultFieldsByTableId(int id)
        {
            return ctx.ResultFields.Where(t => t.TableId == id);
        }

        [HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        [System.Web.Http.HttpGet]
        [Route("GetCountResult/{id}/{taskname}/{scriptName}")]
        public int GetCountResult(int id, string taskname, string scriptName)
        {

            try
            {
                var userName = User.Identity.GetUserName();
                if (string.IsNullOrEmpty(userName))
                    return -1;
                var count = 0;
                switch (id)
                {
                    case 1:
                        count = !string.IsNullOrEmpty(scriptName) ? ctx.Avtomobiles.Count(r => r.User == userName && r.TaskName == taskname && r.Script == scriptName) 
                            : ctx.Avtomobiles.Count(r => r.User == userName && r.TaskName == taskname);
                        break;
                    case 2:
                        count = !string.IsNullOrEmpty(scriptName) ? ctx.Rabotas.Count(r => r.User == userName && r.TaskName == taskname && r.Script == scriptName)
                            : ctx.Rabotas.Count(r => r.User == userName && r.TaskName == taskname);
                       
                        break;
                    case 3:
                        count = !string.IsNullOrEmpty(scriptName) ? ctx.Nedvigimosts.Count(r => r.User == userName && r.TaskName == taskname && r.Script == scriptName)
                            : ctx.Nedvigimosts.Count(r => r.User == userName && r.TaskName == taskname);
                        break;
                }
                return count;
            }
            catch (Exception e)
            {
                return -1;
            }
        }

        [HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        [System.Web.Http.HttpGet]
        [Route("GetCountResult/{id}/{taskname}")]
        public int GetCountResult(int id, string taskname)
        {

            try
            {
                var userName = User.Identity.GetUserName();
                if (string.IsNullOrEmpty(userName))
                    return -1;
                var count = 0;
                switch (id)
                {
                    case 1:
                        count =  ctx.Avtomobiles.Count(r => r.User == userName && r.TaskName == taskname);
                        break;
                    case 2:
                        count = ctx.Rabotas.Count(r => r.User == userName && r.TaskName == taskname);

                        break;
                    case 3:
                        count = ctx.Nedvigimosts.Count(r => r.User == userName && r.TaskName == taskname);
                        break;
                }
                return count;
            }
            catch (Exception e)
            {
                return -1;
            }
        }



    }
}

using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Web;
using System.Web.Http;

namespace IRServer.Controllers
{
    public class ScriptFileController : ApiController
    {
        // GET: api/ScriptFile
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [System.Web.Http.HttpGet]
        // GET: api/ScriptFile/5
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public string UploadFile()
        {
            try
            {
                var file = HttpContext.Current.Request.Files.Count > 0 ?
                    HttpContext.Current.Request.Files[0] : null;

                if (file != null && file.ContentLength > 0)
                {
                    string utf8b = "=?utf-8?B?";

                    var parts = file.FileName.Split(new[] { "?=" }, 0);
                    foreach (var part in parts)
                    {
                        string str2 = part.Trim();
                        if (str2.StartsWith(utf8b, StringComparison.OrdinalIgnoreCase))
                        {
                            str2 = str2.Substring(utf8b.Length);
                            byte[] bytes = Convert.FromBase64String(str2);
                            string name = Encoding.UTF8.GetString(bytes);
                            var path = Path.Combine(
                                HttpContext.Current.Server.MapPath("~/App_Data"),
                                name
                            );
                            file.SaveAs(path);
                            return file != null ? "/App_Data/" + name : null;
                        }
                        else if (str2 == string.Empty)
                        {
                            return "str2 = Empty";
                        }
                        else
                        {
                            var name = str2;
                            var path = Path.Combine(
                                HttpContext.Current.Server.MapPath("~/App_Data"),
                                name
                            );
                            file.SaveAs(path);
                            return file != null ? "/App_Data/" + name : null;
                        }
                    }

                }

                return null;
            }
            catch(Exception ex)
            {
                return ex.Message + "\r\n" + ex.StackTrace;
            }

           
        }
        [HttpPost]
        public string UploadJsFile()
        {
            var file = HttpContext.Current.Request.Files.Count > 0 ?
                HttpContext.Current.Request.Files[0] : null;

            if (file != null && file.ContentLength > 0)
            {
                string utf8b = "=?utf-8?B?";

                var parts = file.FileName.Split(new[] { "?=" }, 0);
                foreach (var part in parts)
                {
                    string str2 = part.Trim();
                    if (str2.StartsWith(utf8b, StringComparison.OrdinalIgnoreCase))
                    {
                        str2 = str2.Substring(utf8b.Length);
                        byte[] bytes = Convert.FromBase64String(str2);
                        string name = Encoding.UTF8.GetString(bytes);
                        var path = Path.Combine(
                            HttpContext.Current.Server.MapPath("~/FilesJs"),
                            name
                        );
                        file.SaveAs(path);
                        return file != null ? "/FilesJs/" + name : null;
                    }
                    else if (str2 == string.Empty)
                    {
                        // Nothing to do here
                    }
                    else
                    {

                    }
                }

            }

            return null;
        }

        // PUT: api/ScriptFile/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ScriptFile/5
        public void Delete(int id)
        {
        }
    }
}

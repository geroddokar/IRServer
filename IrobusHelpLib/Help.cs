using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IrobusHelpLib
{
    public class AnswerAvto : BaseAnswer
    {
        public Avtomobile[] Table { get; set; }
    }
    public class AnswerRabota : BaseAnswer
    {

        public Rabota[] Table { get; set; }
    }
    public class AnswerNedvig : BaseAnswer
    {

        public Nedvigimost[] Table { get; set; }
    }
    public class BaseAnswer
    {
        public Error[] Errors { get; set; }
        public bool isDubl { get; set; }
        public string ScriptName { get; set; }
        public string Url { get; set; }
    }
    public class Error
    {
        public string Field { get; set; }
        public string Value { get; set; }

        public override string ToString()
        {
            return $"[{Field}] = {Value}";
        }
    }

    public class RequestResultAdd
    {
        public string UrlResult { get; set; }
        public int CountResult { get; set; }
        public int CountNewResult { get; set; }
        public int CountError { get; set; }
        public string Message { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IrobusHelpLib
{
    public class RequestObj
    {
        public int TypeRequest { get; set; }
        public DateTime DateCreate { get; set; }
        public string Photo { get; set; }
        public string Description { get; set; }
        public int AllMessage { get; set; }
        public int NewMessage { get; set; }
        public string FilterText { get; set; }
        [NotMapped]
        public BaseFilterModel Type { get; set; }
    }
}
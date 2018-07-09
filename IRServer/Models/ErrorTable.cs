using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using IrobusHelpLib;

namespace IRServer.Models
{
    public class ErrorTable:BaseTable
    {
        public string Url { get; set; }
        public string Script { get; set; }
        public string Field { get; set; }
        public string ValueScript { get; set; }
        public string ValueResTable { get; set; }
        public DateTime DateException { get; set; }
        public DateTime DateEdit { get; set; }
        public string Developer { get; set; }
        public bool Corrected { get; set; }
        public int Counter { get; set; }
        public int TypeError { get; set; }

    }
}
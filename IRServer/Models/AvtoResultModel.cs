using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using IrobusHelpLib;

namespace IRServer.Models
{
    public class AvtoResultModel
    {
        public List<ResultField> ResultFieds { get; set; }
        public List<Avtomobile> Avtomobiles { get; set; }
    }
}
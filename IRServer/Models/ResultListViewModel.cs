using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using IrobusHelpLib;

namespace IRServer.Models
{
    public class ResultAvtoListViewModel
    {
        public IEnumerable<Avtomobile> Results { get; set; }
        public PagingInfo PagingInfo { get; set; }
        public AvtomobileFilters Filters { get; set; }
    }

    public class ResultRabotaListViewModel
    {
        public IEnumerable<Rabota> Results { get; set; }
        public PagingInfo PagingInfo { get; set; }
        public RabotaFilters Filters { get; set; }
    }


    public class ResultNedvListViewModel
    {
        public IEnumerable<Nedvigimost> Results { get; set; }
        public PagingInfo PagingInfo { get; set; }
        public NedvigimostFilters Filters { get; set; }
    }
}
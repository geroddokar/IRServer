using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IrobusHelpLib
{
    public class Nedvigimost:BaseResultTable
    {
        public int? Etag {get; set;}
        public int? Price {get; set;}
        public double? PriceM {get; set;}
        public string TypeSale {get; set;}
        public string TypeHouse {get; set;}
        public string SdachaGk {get; set;}
        public string Sanuzel {get; set;}
        public string Remont {get; set;}
        public double? AreaKyhnya {get; set;}
        public double? AreaRoom {get; set;}
        public double? AreaAll {get; set;}
        public string Discription {get; set;}
        public string Lift {get; set;}
        public int? CountRoom {get; set;}
        public double? AreaLife {get; set;}
        public string VidIzOkna {get; set;}
        public string Balkon {get; set;}
        public int? CountFloor { get; set; }
    }
}
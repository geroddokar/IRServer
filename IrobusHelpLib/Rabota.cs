using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IrobusHelpLib
{
    public class Rabota : BaseResultTable
    {
        public string Vakansia {get; set;}
        public int? ZpOt {get; set;}
        public int? ZpDo {get; set;}
        public string Discription {get; set;}
        public string Trebovanie {get; set;}
        public string Usloviya {get; set;}
        public string TipZanyatosri {get; set;}
        public string OpitRaboti {get; set;}
        public string Obrozovanie {get; set;}
        public string Rabotodatel {get; set;}
    }
}
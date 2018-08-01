using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IrobusHelpLib
{
    public class Category: BaseTable
    {
        public string Icon { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public int ParentId { get; set; }
        public string UserId { get; set; }
    }


    public class DropListCategory
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string ParentName { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IrobusHelpLib
{
    public class ResultTable : BaseTable
    {
        public int Category { get; set; }
        [StringLength(1000)]
        public string Name { get; set; }
        [MaxLength]
        public string Template { get; set; }
        [MaxLength]
        public string Formula { get; set; }
        [StringLength(256)]
        public string TypeTable { get; set; }
        [MaxLength]
        public string ListId { get; set; }

        public override string ToString()
        {
            return this.Name;
        }
    }
}

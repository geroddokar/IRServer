
using System.ComponentModel.DataAnnotations;


namespace IrobusHelpLib
{
    public class RegexUrlToScript : BaseTable
    {
        [StringLength(4000)]
        public string Name { get; set; }
        [StringLength(4000)]
        public string Url { get; set; }
        [StringLength(4000)]
        public string RegexText { get; set; }

        public int ScriptID { get; set; }
    }
}
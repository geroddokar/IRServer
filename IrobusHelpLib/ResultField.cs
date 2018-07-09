using System.ComponentModel.DataAnnotations;


namespace IrobusHelpLib
{
    public class ResultField: BaseTable
    {
        [StringLength(256)]
        public string Name { get; set; }
        [StringLength(1000)]
        public string EngName { get; set; }
        [StringLength(50)]
        public string Type { get; set; }
        public int TableId { get; set; }
        public int RowDisplayIndex { get; set; }
        public bool IsEdit { get; set; }
        public bool Important { get; set; }

        public override string ToString()
        {
            return Name;
        }
    }
}
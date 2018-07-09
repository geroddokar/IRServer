namespace IrobusHelpLib
{
   
    public class Template : BaseTable
    {
        
        public int TypeId { get; set; }
        
        public string Name { get; set; }
        
        public string TemplateRule { get; set; }

        public override string ToString()
        {
            return Name;
        }
    }
}

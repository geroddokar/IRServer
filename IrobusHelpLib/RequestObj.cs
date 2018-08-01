using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace IrobusHelpLib
{
    public class RequestObj
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string UserName { get; set; }
        public int TypeRequest { get; set; }
        public int ResultTable { get; set; }
        public DateTime DateCreate { get; set; }
        public string Photo { get; set; }
        public string Description { get; set; }
        public int AllMessage { get; set; }
        public int NewMessage { get; set; }
        public string FilterText { get; set; }

        [NotMapped]
        public AvtomobileFilters TypeAvto
        {
            get
            {
                if (string.IsNullOrEmpty(FilterText))
                    return new AvtomobileFilters();
                else
                {
                    return JsonConvert.DeserializeObject<AvtomobileFilters>(FilterText);
                }
            }
            set
            {
                if (value != null)
                    FilterText = JsonConvert.SerializeObject(value);
            }
        }
        [NotMapped]
        public NedvigimostFilters TypeNedv
        {
            get
            {
                if (string.IsNullOrEmpty(FilterText))
                    return new NedvigimostFilters();
                else
                {
                    return JsonConvert.DeserializeObject<NedvigimostFilters>(FilterText);
                }
            }
            set
            {
                if (value != null)
                    FilterText = JsonConvert.SerializeObject(value);
            }
        }
        [NotMapped]
        public RabotaFilters TypeRabota
        {
            get
            {
                if (string.IsNullOrEmpty(FilterText))
                    return new RabotaFilters();
                else
                {
                    return JsonConvert.DeserializeObject<RabotaFilters>(FilterText);
                }
            }
            set
            {
                if (value != null)
                    FilterText = JsonConvert.SerializeObject(value);
            }
        }
    }

    public class CreateRequestModel
    {

    }
}
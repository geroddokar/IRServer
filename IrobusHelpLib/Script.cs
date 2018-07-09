using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using IrobusHelpLib;

namespace IrobusHelpLib
{
    public class Script : BaseTable
    {
        [StringLength(4000)]
        public string Name { get; set; }
        [StringLength(4000)]
        public string Url { get; set; }
        public int TableId { get; set; }
       
        public string PathFileLocal { get; set; }

        public string JsPathFileLocal { get; set; }
        public string PathFileServer { get; set; }

        public string JsPathFileServer { get; set; }
        [StringLength(4000)]
        public string DateOfChange { get; set; }

        public string RegexUrl { get; set; }

        public int CategoryID { get; set; }

        [StringLength(4000)]
        public string ResultFields { get; set; }

        public string TypeScript
        {
            get { return Type.ToString(); }
            private set
            {
                if (value != null)
                    Type = value.ParseEnum<TypeScriptEnum>();
            }
        }
        public string TypePageScript
        {
            get { return TypePage.ToString(); }
            private set
            {
                if (value != null) TypePage = value.ParseEnum<TypePageScriptEnum>();
            }
        }


        [NotMapped]
        public TypeScriptEnum Type { get; set; }
        [NotMapped]
        public TypePageScriptEnum TypePage { get; set; }
    }

    [Serializable]
    public enum TypePageScriptEnum
    {
        [Display(Name = "Краткая")]
        OsnPage,
        [Display(Name = "Полная")]
        Podrpage
    }

    [Serializable]
    public enum TypeScriptEnum
    {
        [Display(Name = "Чтение данных со страницы")]
        ReadData,
        //[Display(Name = "Заполнение форм ")]
        //WriteData
    }

    public static class StringExtensions
    {
        public static T ParseEnum<T>(this string value)
        {
            return (T)Enum.Parse(typeof(T), value, true);
        }
    }
}
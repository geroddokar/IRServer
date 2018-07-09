using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;
using System.Linq;
using System.Reflection;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace IrobusHelpLib
{
    public class BaseResultTable:BaseTable
    {

        [MaxLength]
        public string Photo { get; set; }

        public string Phone { get; set; }
        public string Contacts { get; set; }
        public string Adress { get; set; }
        public string Gorod { get; set; }
        public string Metro { get; set; }
        [JsonConverter(typeof(CustomDateTimeConverter))]
        public DateTime? DateOfChange { get; set; }
        public bool? Check { get; set; }
        public string Script { get; set; }

        public string Site { get; set; }

        public string User { get; set; }
        public string TaskName { get; set; }

        [MaxLength]
        public string UrlString { get; set; }

        [JsonConverter(typeof(CustomDateTimeConverter))]
        public DateTime? DateCreate { get; set; }

        public string MD5 { get; set; }

        public string UserID { get; set; }

    }

    public class CustomDateTimeConverter : DateTimeConverterBase//IsoDateTimeConverter
    {

        /// <summary>
        /// DateTime format
        /// </summary>
        private const string Format = "MM/dd/yyyy hh:mm:ss.fff";

        /// <summary>
        /// Writes value to JSON
        /// </summary>
        /// <param name="writer">JSON writer</param>
        /// <param name="value">Value to be written</param>
        /// <param name="serializer">JSON serializer</param>
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            writer.WriteValue(((DateTime)value).ToString(Format));
        }

        /// <summary>
        /// Reads value from JSON
        /// </summary>
        /// <param name="reader">JSON reader</param>
        /// <param name="objectType">Target type</param>
        /// <param name="existingValue">Existing value</param>
        /// <param name="serializer">JSON serialized</param>
        /// <returns>Deserialized DateTime</returns>
        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            if (reader.Value == null)
            {
                return null;
            }
            var format = new string[]{ "dd.MM.yyyy hh:mm:ss" , "dd.MM.yyyy", "dd MMMM yyyy", "dd MMMM", "dd.MM.yyyy hh:mm:ss.fff", "MM.dd.yyyy hh:mm:ss.fff" };
            var s = reader.Value.ToString().Trim();
            DateTime result;
            if (DateTime.TryParse(s, CultureInfo.InvariantCulture, DateTimeStyles.None, out result))
            {
                return result;
            }
            if (DateTime.TryParseExact(s, format, CultureInfo.CurrentCulture, DateTimeStyles.None, out result))
            {
                return result;
            }

            return DateTime.MinValue;
        }
    }

    public static class GetPropertyValue
    {
        public static T GetPropValue<T>(this Object obj, String name)
        {
            Object retval = GetPropValue(obj, name);
            if (retval == null) { return default(T); }

            // throws InvalidCastException if types are incompatible
            return (T)retval;
        }
        public static Object GetPropValue(this Object obj, String name)
        {
            foreach (String part in name.Split('.'))
            {
                if (obj == null) { return null; }

                Type type = obj.GetType();
                PropertyInfo info = type.GetProperty(part);
                if (info == null) { return null; }

                obj = info.GetValue(obj, null);
            }
            return obj;
        }

    }
   
}
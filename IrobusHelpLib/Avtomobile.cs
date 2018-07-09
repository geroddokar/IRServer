using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IrobusHelpLib
{
    public class Avtomobile: BaseResultTable
    {



        public string VIN { get; set; }

        public string Marka { get; set; }
        public int? Price { get; set; }


        public string PhotoUrlString { get; set; }

        public int? Probeg { get; set; }

        public int? Year { get; set; }


        public string Kuzov { get; set; }


        public string KPP { get; set; }


        public string Dvigatel { get; set; }


        public double? Obem { get; set; }

        public string Color { get; set; }

        public string Privod { get; set; }

        public int? Power { get; set; }


        public string Rastamogen { get; set; }


        public int? CountVlad { get; set; }

        [MaxLength]
        public string Discription { get; set; }

        [MaxLength]
        public string Bezopasnost { get; set; }

        [MaxLength]
        public string Komfort { get; set; }

        [MaxLength]
        public string Media { get; set; }

        public string Salon { get; set; }




        public string Sostoyanie { get; set; }

        public string Rule { get; set; }

        public string Nalichie { get; set; }


    }

    public class AvtomobileString : BaseTable
    {
        [Column("Дата Записи")]
        [Display(Name = "Дата Записи")]
        public string DateOfChange { get; set; }

        [Column("Отметить")]
        [Display(Name = "Отметить")]
        public string Check { get; set; }

        [Column("Скрипт")]
        [Display(Name = "Скрипт")]
        public string Script { get; set; }

        [Column("Юрл объявления")]
        [Display(Name = "Юрл объявления")]
        [MaxLength]
        public string UrlString { get; set; }

        [Display(Name = "Дата объявления")]
        [Column("Дата объявления")]
        public string DateCreate { get; set; }

        public string MD5 { get; set; }

        public string UserID { get; set; }


        [Display(AutoGenerateField = true, Name = "Фото")]
        [Column("Фото")]
        [MaxLength]
        public string Photo { get; set; }

        public string VIN { get; set; }

        [Column("Марка")]
        [Display(Name = "Марка")]
        public string Marka { get; set; }

        [Column("Цена")]
        [Display(Name = "Цена")]
        public string Price { get; set; }

        [Display(Name = "Юрл Фото")]
        [Column("Юрл Фото")]

        public string PhotoUrlString { get; set; }

        [Display(Name = "Пробег")]
        [Column("Пробег")]
        public string Probeg { get; set; }

        [Display(Name = "Год")]
        [Column("Год")]
        public string Year { get; set; }

        [Column("Кузов")]
        [Display(Name = "Кузов")]
        public string Kuzov { get; set; }

        [Column("КПП")]
        [Display(Name = "КПП")]
        public string KPP { get; set; }

        [Display(Name = "Двигатель")]
        [Column("Двигатель")]
        public string Dvigatel { get; set; }

        [Display(Name = "Объем")]
        [Column("Объем")]
        public string Obem { get; set; }

        [Display(Name = "Цвет")]
        [Column("Цвет")]
        public string Color { get; set; }

        [Display(Name = "Привод")]
        [Column("Привод")]
        public string Privod { get; set; }

        [Display(Name = "Мощность")]
        [Column("Мощность")]
        public string Power { get; set; }

        [Display(Name = "Растаможен")]
        [Column("Растаможен")]
        public string Rastamogen { get; set; }

        [Display(Name = "Владельцев")]
        [Column("Владельцев")]
        public string CountVlad { get; set; }

        [Display(Name = "Описание")]
        [Column("Описание")]
        [MaxLength]
        public string Discription { get; set; }

        [Display(Name = "Безопасность")]
        [Column("Безопасность")]
        [MaxLength]
        public string Bezopasnost { get; set; }

        [Display(Name = "Комфорт")]
        [Column("Комфорт")]
        [MaxLength]
        public string Komfort { get; set; }

        [Display(Name = "Мультимедия")]
        [Column("Мультимедия")]
        [MaxLength]
        public string Media { get; set; }

        [Display(Name = "Салон")]
        [Column("Салон")]
        public string Salon { get; set; }

        [Display(Name = "Контакты")]
        [Column("Контакты")]
        public string Contacts { get; set; }

        [Display(Name = "Адрес")]
        [Column("Адрес")]
        public string Adress { get; set; }

        [Display(Name = "Состояние")]
        [Column("Состояние")]
        public string Sostoyanie { get; set; }

        [Display(Name = "Руль")]
        [Column("Руль")]
        public string Rule { get; set; }

        [Display(Name = "Наличие")]
        [Column("Наличие")]
        public string Nalichie { get; set; }

        public static List<Avtomobile> ToTypeAvto(List<AvtomobileString> list)
        {

            return new List<Avtomobile>();
        }
    }


}
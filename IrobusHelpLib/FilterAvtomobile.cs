using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IrobusHelpLib
{

    public class BaseFilterModel
    {
        public int CurrentPage { get; set; }
    }

    public class AvtomobileFilters: BaseFilterModel
    {
        public bool Photo { get; set; }
        public string Marka { get; set; }
        public string Kpp { get; set; }
        public string Dvigatel { get; set; }
        public string Kuzov { get; set; }
        public string Privod { get; set; }
        public string Color { get; set; }
        public int PriceFrom { get; set; }
        public int PriceTo { get; set; }
        public int PowerFrom { get; set; }
        public int PowerTo { get; set; }
        public int YearFrom { get; set; }
        public int ProbegFrom { get; set; }
        public int YearTo { get; set; }
        public int ProbegTo { get; set; }  
        public double ObemFrom { get; set; }
        public double ObemTo { get; set; }
       
        public override string ToString()
        {
            var txt = "";
            if(Photo)
            {
                txt += "Фото: Есть,";
            }
            else
            {
                txt += "Фото: Нет,";
            }
            if (!string.IsNullOrEmpty(Marka))
            {
                txt += $"Марка: {Marka},";
            }
            if (!string.IsNullOrEmpty(Kpp))
            {
                txt += $"КПП: {Kpp},";
            }
            if (!string.IsNullOrEmpty(Dvigatel))
            {
                txt += $"{Dvigatel},";
            }
            if (!string.IsNullOrEmpty(Kuzov))
            {
                txt += $"{Kuzov},";
            }
            if (!string.IsNullOrEmpty(Privod))
            {
                txt += $"{Privod},";
            }
            if (!string.IsNullOrEmpty(Color))
            {
                txt += $"{Color},";
            }
            
            return $"Куплю: {txt}";
        }

    }
        

    public class RabotaFilters : BaseFilterModel
    {
        public string Vakansia { get; set; }
        public int? ZpOt { get; set; }
        public int? ZpDo { get; set; }
        public string Discription { get; set; }
        public string Trebovanie { get; set; }
        public string Usloviya { get; set; }
        public string TipZanyatosri { get; set; }
        public string Adress { get; set; }
        public string OpitRaboti { get; set; }
        public string Gorod { get; set; }
        public bool Contacts { get; set; }
        public string Obrozovanie { get; set; }
        public string Rabotodatel { get; set; }
        public DateTime? DateOfChangeFrom { get; set; }
        public DateTime? DateOfChangeTo { get; set; }
        public string Site { get; set; }
       
    }

    public class NedvigimostFilters : BaseFilterModel
    {
        public bool Photo { get; set; }
        public int? EtagFrom { get; set; }
        public int? EtagTo { get; set; }
        public int? PriceFrom { get; set; }
        public int? PriceTo { get; set; }
        public double? PriceMFrom { get; set; }
        public double? PriceMTo { get; set; }
        public string TypeSale { get; set; }
        public string TypeHouse { get; set; }
        public string Phone { get; set; }
        public string SdachaGk { get; set; }
        public string Sanuzel { get; set; }
        public string Remont { get; set; }
        public double? AreaKyhnyaFrom { get; set; }
        public double? AreaKyhnyaTo { get; set; }
        public double? AreaRoomFrom { get; set; }
        public double? AreaRoomTo { get; set; }
        public double? AreaAllFrom { get; set; }
        public double? AreaAllTo { get; set; }
        public string Discription { get; set; }
        public string Lift { get; set; }
        public int? CountRoomFrom { get; set; }
        public int? CountRoomTo { get; set; }
        public double? AreaLifeFrom { get; set; }
        public double? AreaLifeTo { get; set; }
        public string VidIzOkna { get; set; }
        public string Balkon { get; set; }
        public string Adress { get; set; }
        public int? CountFloorFrom { get; set; }
        public int? CountFloorTo { get; set; }
        public string Metro { get; set; }
        public DateTime DateOfChangeFrom { get; set; }
        public DateTime DateOfChangeTo { get; set; }
        public string Site { get; set; }
        

    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IrobusHelpLib
{

    public class BaseFilterModel
    {
        public DateTime? DateOfCreateFrom { get; set; }
        public DateTime? DateOfCreateTo { get; set; }
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
            txt += Photo ? "Фото: Есть," : "Фото: Нет,";
            if (!string.IsNullOrEmpty(Marka))
            {
                txt += $"Марка: {Marka},";
            }

            if (PriceFrom > 0)
            {
                txt += $"от {PriceFrom} рубл., ";
            }
            if (PriceTo > 0)
            {
                txt += $"до {PriceFrom} рубл., ";
            }

            if (YearFrom > 0)
            {
                txt += $"от {YearFrom} г., ";
            }
            if (YearTo > 0)
            {
                txt += $"до {YearTo} г., ";
            }

            if (PowerFrom > 0)
            {
                txt += $"от {PowerFrom} л.с., ";
            }
            if (PowerTo > 0)
            {
                txt += $"до {PowerTo} л.с., ";
            }

            if (ProbegFrom > 0)
            {
                txt += $"от {ProbegFrom} км., ";
            }
            if (ProbegTo > 0)
            {
                txt += $"до {ProbegTo} км., ";
            }

            if (ObemFrom > 0)
            {
                txt += $"до {ObemFrom} л., ";
            }

            if (ObemTo > 0)
            {
                txt += $"до {ObemTo} л., ";
            }

            if (!string.IsNullOrEmpty(Kpp))
            {
                txt += $"КПП: {Kpp}, ";
            }
            if (!string.IsNullOrEmpty(Dvigatel))
            {
                txt += $"{Dvigatel}, ";
            }
            if (!string.IsNullOrEmpty(Kuzov))
            {
                txt += $"{Kuzov}, ";
            }
            if (!string.IsNullOrEmpty(Privod))
            {
                txt += $"{Privod}, ";
            }
            if (!string.IsNullOrEmpty(Color))
            {
                txt += $"{Color}, ";
            }
            int place = txt.LastIndexOf(", ", StringComparison.Ordinal);
            if(place>0)
                txt = txt.Remove(place, 2).Insert(place, "");
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
        public string Site { get; set; }
    }
}
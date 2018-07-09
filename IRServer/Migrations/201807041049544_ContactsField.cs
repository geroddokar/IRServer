namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ContactsField : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Avtomobiles", name: "Фото", newName: "Photo");
            RenameColumn(table: "dbo.Avtomobiles", name: "Марка", newName: "Marka");
            RenameColumn(table: "dbo.Avtomobiles", name: "Цена", newName: "Price");
            RenameColumn(table: "dbo.Avtomobiles", name: "Юрл Фото", newName: "PhotoUrlString");
            RenameColumn(table: "dbo.Avtomobiles", name: "Пробег", newName: "Probeg");
            RenameColumn(table: "dbo.Avtomobiles", name: "Год", newName: "Year");
            RenameColumn(table: "dbo.Avtomobiles", name: "Кузов", newName: "Kuzov");
            RenameColumn(table: "dbo.Avtomobiles", name: "КПП", newName: "KPP");
            RenameColumn(table: "dbo.Avtomobiles", name: "Двигатель", newName: "Dvigatel");
            RenameColumn(table: "dbo.Avtomobiles", name: "Объем", newName: "Obem");
            RenameColumn(table: "dbo.Avtomobiles", name: "Цвет", newName: "Color");
            RenameColumn(table: "dbo.Avtomobiles", name: "Привод", newName: "Privod");
            RenameColumn(table: "dbo.Avtomobiles", name: "Мощность", newName: "Power");
            RenameColumn(table: "dbo.Avtomobiles", name: "Растаможен", newName: "Rastamogen");
            RenameColumn(table: "dbo.Avtomobiles", name: "Владельцев", newName: "CountVlad");
            RenameColumn(table: "dbo.Avtomobiles", name: "Описание", newName: "Discription");
            RenameColumn(table: "dbo.Avtomobiles", name: "Безопасность", newName: "Bezopasnost");
            RenameColumn(table: "dbo.Avtomobiles", name: "Комфорт", newName: "Komfort");
            RenameColumn(table: "dbo.Avtomobiles", name: "Мультимедия", newName: "Media");
            RenameColumn(table: "dbo.Avtomobiles", name: "Салон", newName: "Salon");
            RenameColumn(table: "dbo.Avtomobiles", name: "Контакты", newName: "Contacts");
            RenameColumn(table: "dbo.Avtomobiles", name: "Адрес", newName: "Adress");
            RenameColumn(table: "dbo.Avtomobiles", name: "Состояние", newName: "Sostoyanie");
            RenameColumn(table: "dbo.Avtomobiles", name: "Руль", newName: "Rule");
            RenameColumn(table: "dbo.Avtomobiles", name: "Наличие", newName: "Nalichie");
            RenameColumn(table: "dbo.Avtomobiles", name: "Дата Записи", newName: "DateOfChange");
            RenameColumn(table: "dbo.Avtomobiles", name: "Отметить", newName: "Check");
            RenameColumn(table: "dbo.Avtomobiles", name: "Скрипт", newName: "Script");
            RenameColumn(table: "dbo.Avtomobiles", name: "Юрл объявления", newName: "UrlString");
            RenameColumn(table: "dbo.Avtomobiles", name: "Дата объявления", newName: "DateCreate");
            RenameColumn(table: "dbo.Nedvigimosts", name: "Дата Записи", newName: "DateOfChange");
            RenameColumn(table: "dbo.Nedvigimosts", name: "Отметить", newName: "Check");
            RenameColumn(table: "dbo.Nedvigimosts", name: "Скрипт", newName: "Script");
            RenameColumn(table: "dbo.Nedvigimosts", name: "Юрл объявления", newName: "UrlString");
            RenameColumn(table: "dbo.Nedvigimosts", name: "Дата объявления", newName: "DateCreate");
            RenameColumn(table: "dbo.Rabotas", name: "Дата Записи", newName: "DateOfChange");
            RenameColumn(table: "dbo.Rabotas", name: "Отметить", newName: "Check");
            RenameColumn(table: "dbo.Rabotas", name: "Скрипт", newName: "Script");
            RenameColumn(table: "dbo.Rabotas", name: "Юрл объявления", newName: "UrlString");
            RenameColumn(table: "dbo.Rabotas", name: "Дата объявления", newName: "DateCreate");
            AddColumn("dbo.Avtomobiles", "Phone", c => c.String(unicode: false));
            AddColumn("dbo.Avtomobiles", "Gorod", c => c.String(unicode: false));
            AddColumn("dbo.Avtomobiles", "Metro", c => c.String(unicode: false));
            AddColumn("dbo.Nedvigimosts", "Contacts", c => c.String(unicode: false));
            AddColumn("dbo.Nedvigimosts", "Gorod", c => c.String(unicode: false));
            AddColumn("dbo.Rabotas", "Photo", c => c.String(unicode: false));
            AddColumn("dbo.Rabotas", "Phone", c => c.String(unicode: false));
            AddColumn("dbo.Rabotas", "Metro", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Rabotas", "Metro");
            DropColumn("dbo.Rabotas", "Phone");
            DropColumn("dbo.Rabotas", "Photo");
            DropColumn("dbo.Nedvigimosts", "Gorod");
            DropColumn("dbo.Nedvigimosts", "Contacts");
            DropColumn("dbo.Avtomobiles", "Metro");
            DropColumn("dbo.Avtomobiles", "Gorod");
            DropColumn("dbo.Avtomobiles", "Phone");
            RenameColumn(table: "dbo.Rabotas", name: "DateCreate", newName: "Дата объявления");
            RenameColumn(table: "dbo.Rabotas", name: "UrlString", newName: "Юрл объявления");
            RenameColumn(table: "dbo.Rabotas", name: "Script", newName: "Скрипт");
            RenameColumn(table: "dbo.Rabotas", name: "Check", newName: "Отметить");
            RenameColumn(table: "dbo.Rabotas", name: "DateOfChange", newName: "Дата Записи");
            RenameColumn(table: "dbo.Nedvigimosts", name: "DateCreate", newName: "Дата объявления");
            RenameColumn(table: "dbo.Nedvigimosts", name: "UrlString", newName: "Юрл объявления");
            RenameColumn(table: "dbo.Nedvigimosts", name: "Script", newName: "Скрипт");
            RenameColumn(table: "dbo.Nedvigimosts", name: "Check", newName: "Отметить");
            RenameColumn(table: "dbo.Nedvigimosts", name: "DateOfChange", newName: "Дата Записи");
            RenameColumn(table: "dbo.Avtomobiles", name: "DateCreate", newName: "Дата объявления");
            RenameColumn(table: "dbo.Avtomobiles", name: "UrlString", newName: "Юрл объявления");
            RenameColumn(table: "dbo.Avtomobiles", name: "Script", newName: "Скрипт");
            RenameColumn(table: "dbo.Avtomobiles", name: "Check", newName: "Отметить");
            RenameColumn(table: "dbo.Avtomobiles", name: "DateOfChange", newName: "Дата Записи");
            RenameColumn(table: "dbo.Avtomobiles", name: "Nalichie", newName: "Наличие");
            RenameColumn(table: "dbo.Avtomobiles", name: "Rule", newName: "Руль");
            RenameColumn(table: "dbo.Avtomobiles", name: "Sostoyanie", newName: "Состояние");
            RenameColumn(table: "dbo.Avtomobiles", name: "Adress", newName: "Адрес");
            RenameColumn(table: "dbo.Avtomobiles", name: "Contacts", newName: "Контакты");
            RenameColumn(table: "dbo.Avtomobiles", name: "Salon", newName: "Салон");
            RenameColumn(table: "dbo.Avtomobiles", name: "Media", newName: "Мультимедия");
            RenameColumn(table: "dbo.Avtomobiles", name: "Komfort", newName: "Комфорт");
            RenameColumn(table: "dbo.Avtomobiles", name: "Bezopasnost", newName: "Безопасность");
            RenameColumn(table: "dbo.Avtomobiles", name: "Discription", newName: "Описание");
            RenameColumn(table: "dbo.Avtomobiles", name: "CountVlad", newName: "Владельцев");
            RenameColumn(table: "dbo.Avtomobiles", name: "Rastamogen", newName: "Растаможен");
            RenameColumn(table: "dbo.Avtomobiles", name: "Power", newName: "Мощность");
            RenameColumn(table: "dbo.Avtomobiles", name: "Privod", newName: "Привод");
            RenameColumn(table: "dbo.Avtomobiles", name: "Color", newName: "Цвет");
            RenameColumn(table: "dbo.Avtomobiles", name: "Obem", newName: "Объем");
            RenameColumn(table: "dbo.Avtomobiles", name: "Dvigatel", newName: "Двигатель");
            RenameColumn(table: "dbo.Avtomobiles", name: "KPP", newName: "КПП");
            RenameColumn(table: "dbo.Avtomobiles", name: "Kuzov", newName: "Кузов");
            RenameColumn(table: "dbo.Avtomobiles", name: "Year", newName: "Год");
            RenameColumn(table: "dbo.Avtomobiles", name: "Probeg", newName: "Пробег");
            RenameColumn(table: "dbo.Avtomobiles", name: "PhotoUrlString", newName: "Юрл Фото");
            RenameColumn(table: "dbo.Avtomobiles", name: "Price", newName: "Цена");
            RenameColumn(table: "dbo.Avtomobiles", name: "Marka", newName: "Марка");
            RenameColumn(table: "dbo.Avtomobiles", name: "Photo", newName: "Фото");
        }
    }
}

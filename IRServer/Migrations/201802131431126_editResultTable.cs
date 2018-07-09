namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class editResultTable : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Nedvigimosts", name: "UrlString", newName: "Юрл объявления");
            RenameColumn(table: "dbo.Nedvigimosts", name: "DateOfChange", newName: "Дата Записи");
            RenameColumn(table: "dbo.Nedvigimosts", name: "DateCreate", newName: "Дата объявления");
            RenameColumn(table: "dbo.Nedvigimosts", name: "Script", newName: "Скрипт");
            RenameColumn(table: "dbo.Rabotas", name: "UrlString", newName: "Юрл объявления");
            RenameColumn(table: "dbo.Rabotas", name: "DateCreate", newName: "Дата объявления");
            RenameColumn(table: "dbo.Rabotas", name: "Script", newName: "Скрипт");
            AddColumn("dbo.Nedvigimosts", "Отметить", c => c.Boolean());
            AddColumn("dbo.Rabotas", "Дата Записи", c => c.DateTime(precision: 0));
            AddColumn("dbo.Rabotas", "Отметить", c => c.Boolean());
            AlterColumn("dbo.Nedvigimosts", "Дата Записи", c => c.DateTime(precision: 0));
            AlterColumn("dbo.Nedvigimosts", "Дата объявления", c => c.DateTime(precision: 0));
            AlterColumn("dbo.Rabotas", "Дата объявления", c => c.DateTime(precision: 0));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Rabotas", "Дата объявления", c => c.String(unicode: false));
            AlterColumn("dbo.Nedvigimosts", "Дата объявления", c => c.String(unicode: false));
            AlterColumn("dbo.Nedvigimosts", "Дата Записи", c => c.String(unicode: false));
            DropColumn("dbo.Rabotas", "Отметить");
            DropColumn("dbo.Rabotas", "Дата Записи");
            DropColumn("dbo.Nedvigimosts", "Отметить");
            RenameColumn(table: "dbo.Rabotas", name: "Скрипт", newName: "Script");
            RenameColumn(table: "dbo.Rabotas", name: "Дата объявления", newName: "DateCreate");
            RenameColumn(table: "dbo.Rabotas", name: "Юрл объявления", newName: "UrlString");
            RenameColumn(table: "dbo.Nedvigimosts", name: "Скрипт", newName: "Script");
            RenameColumn(table: "dbo.Nedvigimosts", name: "Дата объявления", newName: "DateCreate");
            RenameColumn(table: "dbo.Nedvigimosts", name: "Дата Записи", newName: "DateOfChange");
            RenameColumn(table: "dbo.Nedvigimosts", name: "Юрл объявления", newName: "UrlString");
        }
    }
}

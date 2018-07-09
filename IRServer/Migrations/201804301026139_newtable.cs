namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class newtable : DbMigration
    {
        public override void Up()
        {
            //CreateTable(
            //    "dbo.Categories",
            //    c => new
            //        {
            //            ID = c.Int(nullable: false, identity: true),
            //            Icon = c.String(unicode: false),
            //            Name = c.String(unicode: false),
            //            Url = c.String(unicode: false),
            //        })
            //    .PrimaryKey(t => t.ID);
            
            //CreateTable(
            //    "dbo.ResultTables",
            //    c => new
            //        {
            //            ID = c.Int(nullable: false, identity: true),
            //            Category = c.Int(nullable: false),
            //            Name = c.String(maxLength: 1000, storeType: "nvarchar"),
            //            Template = c.String(unicode: false),
            //            Formula = c.String(unicode: false),
            //            TypeTable = c.String(maxLength: 256, storeType: "nvarchar"),
            //            ListId = c.String(unicode: false),
            //        })
            //    .PrimaryKey(t => t.ID);
            
            //CreateTable(
            //    "dbo.Templates",
            //    c => new
            //        {
            //            ID = c.Int(nullable: false, identity: true),
            //            TypeId = c.Int(nullable: false),
            //            Name = c.String(unicode: false),
            //            TemplateRule = c.String(unicode: false),
            //        })
            //    .PrimaryKey(t => t.ID);
            
            //CreateTable(
            //    "dbo.TypeTemplates",
            //    c => new
            //        {
            //            ID = c.Int(nullable: false, identity: true),
            //            Name = c.String(unicode: false),
            //        })
            //    .PrimaryKey(t => t.ID);

            AddColumn("dbo.Scripts", "JsPathFile", c => c.String(unicode: false));
            AddColumn("dbo.Scripts", "RegexUrl", c => c.String(unicode: false));
            AddColumn("dbo.Scripts", "CategoryID", c => c.Int(nullable: false));
            DropColumn("dbo.Scripts", "Photo");
            DropTable("dbo.Users");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserName = c.String(unicode: false),
                        Password = c.String(unicode: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Scripts", "Photo", c => c.String(unicode: false));
            DropColumn("dbo.Scripts", "CategoryID");
            DropColumn("dbo.Scripts", "RegexUrl");
            DropColumn("dbo.Scripts", "JsPathFile");
            DropTable("dbo.TypeTemplates");
            DropTable("dbo.Templates");
            DropTable("dbo.ResultTables");
            DropTable("dbo.Categories");
        }
    }
}

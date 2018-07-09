namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class twoTable1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.RegexUrlToScripts",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(maxLength: 4000, storeType: "nvarchar"),
                        Url = c.String(maxLength: 4000, storeType: "nvarchar"),
                        RegexText = c.String(maxLength: 4000, storeType: "nvarchar"),
                        ScriptID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Scripts",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(maxLength: 4000, storeType: "nvarchar"),
                        Url = c.String(maxLength: 4000, storeType: "nvarchar"),
                        TableId = c.Int(nullable: false),
                        PathFile = c.String(maxLength: 4000, storeType: "nvarchar"),
                        DateOfChange = c.String(maxLength: 4000, storeType: "nvarchar"),
                        Photo = c.String(unicode: false),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Scripts");
            DropTable("dbo.RegexUrlToScripts");
        }
    }
}

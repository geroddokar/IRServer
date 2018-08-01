namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RequestObj : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.RequestObjs",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        TypeRequest = c.Int(nullable: false),
                        ResultTable = c.Int(nullable: false),
                        DateCreate = c.DateTime(nullable: false, precision: 0),
                        Photo = c.String(unicode: false),
                        Description = c.String(unicode: false),
                        AllMessage = c.Int(nullable: false),
                        NewMessage = c.Int(nullable: false),
                        FilterText = c.String(unicode: false),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.RequestObjs");
        }
    }
}

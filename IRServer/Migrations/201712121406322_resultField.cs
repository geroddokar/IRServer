namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class resultField : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ResultFields",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(maxLength: 256, storeType: "nvarchar"),
                        Type = c.String(maxLength: 50, storeType: "nvarchar"),
                        TableId = c.Int(nullable: false),
                        RowDisplayIndex = c.Int(nullable: false),
                        IsEdit = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ResultFields");
        }
    }
}

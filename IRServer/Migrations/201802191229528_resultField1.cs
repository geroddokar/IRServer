namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class resultField1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ResultFields", "EngName", c => c.String(maxLength: 1000, storeType: "nvarchar"));
            AddColumn("dbo.ResultFields", "Important", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ResultFields", "Important");
            DropColumn("dbo.ResultFields", "EngName");
        }
    }
}

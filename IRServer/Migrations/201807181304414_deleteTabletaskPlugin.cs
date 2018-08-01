namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class deleteTabletaskPlugin : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Categories", "Discriminator");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Categories", "Discriminator", c => c.String(nullable: false, maxLength: 128, storeType: "nvarchar"));
        }
    }
}

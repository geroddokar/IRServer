namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TasksPlugin : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Categories", "UserId", c => c.Int());
            AddColumn("dbo.Categories", "Discriminator", c => c.String(nullable: false, maxLength: 128, storeType: "nvarchar"));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Categories", "Discriminator");
            DropColumn("dbo.Categories", "UserId");
        }
    }
}

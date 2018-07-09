namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class xz : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ErrorTables", "TypeError", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ErrorTables", "TypeError");
        }
    }
}

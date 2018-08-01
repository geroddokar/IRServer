namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeTypeFieldTaskPlugin : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Categories", "UserId", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Categories", "UserId", c => c.Int());
        }
    }
}

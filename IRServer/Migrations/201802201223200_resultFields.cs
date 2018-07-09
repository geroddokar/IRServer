namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class resultFields : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ResultFields", "ResultFields", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ResultFields", "ResultFields");
        }
    }
}

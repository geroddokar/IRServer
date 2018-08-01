namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class userNameRequesttable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.RequestObjs", "UserName", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.RequestObjs", "UserName");
        }
    }
}

namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class datacreatefield : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Nedvigimosts", "DateCreate", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Nedvigimosts", "DateCreate");
        }
    }
}

namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class sitefield : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Avtomobiles", "Site", c => c.String(unicode: false));
            AddColumn("dbo.Nedvigimosts", "Site", c => c.String(unicode: false));
            AddColumn("dbo.Rabotas", "Site", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Rabotas", "Site");
            DropColumn("dbo.Nedvigimosts", "Site");
            DropColumn("dbo.Avtomobiles", "Site");
        }
    }
}

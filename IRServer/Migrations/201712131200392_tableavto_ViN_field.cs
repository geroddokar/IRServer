namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class tableavto_ViN_field : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Avtomobiles", "VIN", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Avtomobiles", "VIN");
        }
    }
}

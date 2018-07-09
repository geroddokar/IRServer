namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class newFieldMetro : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Nedvigimosts", "Metro", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Nedvigimosts", "Metro");
        }
    }
}

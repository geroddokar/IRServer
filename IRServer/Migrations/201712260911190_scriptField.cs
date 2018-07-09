namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class scriptField : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Nedvigimosts", "Script", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Nedvigimosts", "Script");
        }
    }
}

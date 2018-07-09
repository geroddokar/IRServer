namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class resultFieldsScriptTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Scripts", "ResultFields", c => c.String(maxLength: 4000, storeType: "nvarchar"));
            DropColumn("dbo.ResultFields", "ResultFields");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ResultFields", "ResultFields", c => c.String(unicode: false));
            DropColumn("dbo.Scripts", "ResultFields");
        }
    }
}

namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class editLength : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Scripts", "JsPathFile", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Scripts", "JsPathFile", c => c.String(maxLength: 4000, storeType: "nvarchar"));
        }
    }
}

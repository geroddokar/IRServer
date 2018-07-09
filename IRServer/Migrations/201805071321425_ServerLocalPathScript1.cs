namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ServerLocalPathScript1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Scripts", "PathFileLocal", c => c.String(unicode: false));
            AddColumn("dbo.Scripts", "JsPathFileLocal", c => c.String(unicode: false));
            AddColumn("dbo.Scripts", "PathFileServer", c => c.String(unicode: false));
            AddColumn("dbo.Scripts", "JsPathFileServer", c => c.String(unicode: false));
            DropColumn("dbo.Scripts", "PathFile");
            DropColumn("dbo.Scripts", "JsPathFile");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Scripts", "JsPathFile", c => c.String(unicode: false));
            AddColumn("dbo.Scripts", "PathFile", c => c.String(maxLength: 4000, storeType: "nvarchar"));
            DropColumn("dbo.Scripts", "JsPathFileServer");
            DropColumn("dbo.Scripts", "PathFileServer");
            DropColumn("dbo.Scripts", "JsPathFileLocal");
            DropColumn("dbo.Scripts", "PathFileLocal");
        }
    }
}

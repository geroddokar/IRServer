namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ScriptTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Scripts", "TypeScript", c => c.String(unicode: false));
            AddColumn("dbo.Scripts", "TypePageScript", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Scripts", "TypePageScript");
            DropColumn("dbo.Scripts", "TypeScript");
        }
    }
}

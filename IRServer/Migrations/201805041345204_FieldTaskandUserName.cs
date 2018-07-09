namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FieldTaskandUserName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Avtomobiles", "User", c => c.String(unicode: false));
            AddColumn("dbo.Avtomobiles", "TaskName", c => c.String(unicode: false));
            AddColumn("dbo.Nedvigimosts", "User", c => c.String(unicode: false));
            AddColumn("dbo.Nedvigimosts", "TaskName", c => c.String(unicode: false));
            AddColumn("dbo.Rabotas", "User", c => c.String(unicode: false));
            AddColumn("dbo.Rabotas", "TaskName", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Rabotas", "TaskName");
            DropColumn("dbo.Rabotas", "User");
            DropColumn("dbo.Nedvigimosts", "TaskName");
            DropColumn("dbo.Nedvigimosts", "User");
            DropColumn("dbo.Avtomobiles", "TaskName");
            DropColumn("dbo.Avtomobiles", "User");
        }
    }
}

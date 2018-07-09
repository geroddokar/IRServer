namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class md5 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Avtomobiles", "MD5", c => c.String(unicode: false));
            AddColumn("dbo.Avtomobiles", "UserID", c => c.String(unicode: false));
            AddColumn("dbo.Nedvigimosts", "MD5", c => c.String(unicode: false));
            AddColumn("dbo.Nedvigimosts", "UserID", c => c.String(unicode: false));
            AddColumn("dbo.Rabotas", "MD5", c => c.String(unicode: false));
            AddColumn("dbo.Rabotas", "UserID", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Rabotas", "UserID");
            DropColumn("dbo.Rabotas", "MD5");
            DropColumn("dbo.Nedvigimosts", "UserID");
            DropColumn("dbo.Nedvigimosts", "MD5");
            DropColumn("dbo.Avtomobiles", "UserID");
            DropColumn("dbo.Avtomobiles", "MD5");
        }
    }
}

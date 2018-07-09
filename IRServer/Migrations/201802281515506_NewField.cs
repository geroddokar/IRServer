namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class NewField : DbMigration
    {
        public override void Up()
        {
            //AddColumn("dbo.Nedvigimosts", "CountFloor", c => c.Int());
            AlterColumn("dbo.Nedvigimosts", "Etag", c => c.Int());
            AlterColumn("dbo.Nedvigimosts", "Price", c => c.Int());
            AlterColumn("dbo.Nedvigimosts", "PriceM", c => c.Double());
            AlterColumn("dbo.Nedvigimosts", "AreaKyhnya", c => c.Double());
            AlterColumn("dbo.Nedvigimosts", "AreaRoom", c => c.Double());
            AlterColumn("dbo.Nedvigimosts", "AreaAll", c => c.Double());
            AlterColumn("dbo.Nedvigimosts", "CountRoom", c => c.Int());
            AlterColumn("dbo.Nedvigimosts", "AreaLife", c => c.Double());
            AlterColumn("dbo.Rabotas", "ZpOt", c => c.Int());
            AlterColumn("dbo.Rabotas", "ZpDo", c => c.Int());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Rabotas", "ZpDo", c => c.String(unicode: false));
            AlterColumn("dbo.Rabotas", "ZpOt", c => c.String(unicode: false));
            AlterColumn("dbo.Nedvigimosts", "AreaLife", c => c.String(unicode: false));
            AlterColumn("dbo.Nedvigimosts", "CountRoom", c => c.String(unicode: false));
            AlterColumn("dbo.Nedvigimosts", "AreaAll", c => c.String(unicode: false));
            AlterColumn("dbo.Nedvigimosts", "AreaRoom", c => c.String(unicode: false));
            AlterColumn("dbo.Nedvigimosts", "AreaKyhnya", c => c.String(unicode: false));
            AlterColumn("dbo.Nedvigimosts", "PriceM", c => c.String(unicode: false));
            AlterColumn("dbo.Nedvigimosts", "Price", c => c.String(unicode: false));
            AlterColumn("dbo.Nedvigimosts", "Etag", c => c.String(unicode: false));
            DropColumn("dbo.Nedvigimosts", "CountFloor");
        }
    }
}

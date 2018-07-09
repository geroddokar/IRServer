namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class errorTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ErrorTables",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Url = c.String(unicode: false),
                        Script = c.String(unicode: false),
                        Field = c.String(unicode: false),
                        ValueScript = c.String(unicode: false),
                        ValueResTable = c.String(unicode: false),
                        DateException = c.DateTime(nullable: false, precision: 0),
                        DateEdit = c.DateTime(nullable: false, precision: 0),
                        Developer = c.String(unicode: false),
                        Corrected = c.Boolean(nullable: false),
                        Counter = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ErrorTables");
        }
    }
}

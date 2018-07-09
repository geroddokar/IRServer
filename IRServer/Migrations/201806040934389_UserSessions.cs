namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserSessions : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.UserSessions",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        OwnerUser = c.String(unicode: false),
                        AuthToken = c.String(unicode: false),
                        ExpirationDateTime = c.DateTime(nullable: false, precision: 0),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.UserSessions");
        }
    }
}

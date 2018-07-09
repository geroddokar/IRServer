namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class test1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Clients",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128, storeType: "nvarchar"),
                        Secret = c.String(nullable: false, unicode: false),
                        Name = c.String(nullable: false, maxLength: 100, storeType: "nvarchar"),
                        ApplicationType = c.Int(nullable: false),
                        Active = c.Boolean(nullable: false),
                        RefreshTokenLifeTime = c.Int(nullable: false),
                        AllowedOrigin = c.String(maxLength: 100, storeType: "nvarchar"),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.RefreshTokens",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128, storeType: "nvarchar"),
                        Subject = c.String(nullable: false, maxLength: 50, storeType: "nvarchar"),
                        ClientId = c.String(nullable: false, maxLength: 50, storeType: "nvarchar"),
                        IssuedUtc = c.DateTime(nullable: false, precision: 0),
                        ExpiresUtc = c.DateTime(nullable: false, precision: 0),
                        ProtectedTicket = c.String(nullable: false, unicode: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.RefreshTokens");
            DropTable("dbo.Clients");
        }
    }
}

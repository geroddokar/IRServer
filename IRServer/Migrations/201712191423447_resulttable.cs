namespace IRServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class resulttable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Nedvigimosts",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Photo = c.String(unicode: false),
                        Etag = c.String(unicode: false),
                        Price = c.String(unicode: false),
                        PriceM = c.String(unicode: false),
                        UrlString = c.String(unicode: false),
                        TypeSale = c.String(unicode: false),
                        TypeHouse = c.String(unicode: false),
                        Phone = c.String(unicode: false),
                        SdachaGK = c.String(unicode: false),
                        Sanuzel = c.String(unicode: false),
                        Remont = c.String(unicode: false),
                        AreaKyhnya = c.String(unicode: false),
                        AreaRoom = c.String(unicode: false),
                        AreaAll = c.String(unicode: false),
                        Discription = c.String(unicode: false),
                        Lift = c.String(unicode: false),
                        CountRoom = c.String(unicode: false),
                        AreaLife = c.String(unicode: false),
                        DateOfChange = c.String(unicode: false),
                        VidIzOkna = c.String(unicode: false),
                        Balkon = c.String(unicode: false),
                        Adress = c.String(unicode: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Rabotas",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Vakansia = c.String(unicode: false),
                        ZpOt = c.String(unicode: false),
                        ZpDo = c.String(unicode: false),
                        UrlString = c.String(unicode: false),
                        Discription = c.String(unicode: false),
                        Trebovanie = c.String(unicode: false),
                        Usloviya = c.String(unicode: false),
                        TipZanyatosri = c.String(unicode: false),
                        Adress = c.String(unicode: false),
                        DateCreate = c.String(unicode: false),
                        OpitRaboti = c.String(unicode: false),
                        Gorod = c.String(unicode: false),
                        Contacts = c.String(unicode: false),
                        Obrozovanie = c.String(unicode: false),
                        Rabotodatel = c.String(unicode: false),
                        Script = c.String(unicode: false),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Rabotas");
            DropTable("dbo.Nedvigimosts");
        }
    }
}

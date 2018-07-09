function DOMtoString(data) { var obj = [];
    var Photo = [];
    var Marka = [];
    var Year = [];
    var Price = [];
    var UrlString = [];
    var Probeg = [];
    var Kuzov = [];
    var KPP = [];
    var Dvigatel = [];
    var Power = [];
    var Salon = [];
    var Adress = [];

    var obj = [

    ];
    console.log("Start");
    var links = data.querySelectorAll('#page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(3) > div:nth-child(1) > span > article > div > div.SerpSnippet_data__3ezjY > div.SerpSnippet_topPadding__38j6x > div.SerpSnippet_topInfo__1ZraC > a');
    for (var i = 0; i < links.length; ++i) {
        Marka.push(links[i].innerText);
        UrlString.push(links[i].getAttribute('href'));
    }

    var probegdiv = data.querySelectorAll(
        '#page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(3) > div:nth-child(1) > span > article > div > div.SerpSnippet_data__3ezjY > div.SerpSnippet_info__3_y7m > div:nth-child(1)');
    for (var i = 0; i < probegdiv.length; ++i) {
        Probeg.push(probegdiv[i].innerText);
    }

    var priceDiv = data.querySelectorAll(
        '#page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(3) > div:nth-child(1) > span > article > div > div.SerpSnippet_data__3ezjY > div.SerpSnippet_topPadding__38j6x > div.SerpSnippet_topInfo__1ZraC > div.SerpSnippet_topInfoRight__pG1ha > div');
    for (var i = 0; i < priceDiv.length; ++i) {
        Price.push(priceDiv[i].innerText);
    }

    var yearDiv = data.querySelectorAll(
        '#page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(3) > div:nth-child(1) > span > article > div > div.SerpSnippet_data__3ezjY > div.SerpSnippet_info__3_y7m > div:nth-child(4)');
    for (var i = 0; i < yearDiv.length; ++i) {
        Year.push(yearDiv[i].innerText.replace(/\s+/g, "").match(/\d+/i)[0]);
    }

    var kuzovDiv = data.querySelectorAll("#page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(3) > div:nth-child(1) > span > article > div > div.SerpSnippet_data__3ezjY > div.SerpSnippet_info__3_y7m > div:nth-child(5)");
    for (var i = 0; i < kuzovDiv.length; ++i) {
        Kuzov.push(kuzovDiv[i].innerText);
    }

    var dvigDiv = data.querySelectorAll("#page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(3) > div:nth-child(1) > span > article > div > div.SerpSnippet_data__3ezjY > div.SerpSnippet_info__3_y7m > div:nth-child(2)");
    for (var i = 0; i < dvigDiv.length; ++i) {
        Dvigatel.push(dvigDiv[i].innerText);
    }

    var powerDiv = data.querySelectorAll("#page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(3) > div:nth-child(1) > span > article > div > div.SerpSnippet_data__3ezjY > div.SerpSnippet_info__3_y7m > div:nth-child(3)");
    for (var i = 0; i < powerDiv.length; ++i) {
        Power.push(powerDiv[i].innerText);
    }

    var kppDiv = data.querySelectorAll("#page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(3) > div:nth-child(1) > span > article > div > div.SerpSnippet_data__3ezjY > div.SerpSnippet_info__3_y7m > div:nth-child(6)");
    for (var i = 0; i < kppDiv.length; ++i) {
        KPP.push(kppDiv[i].innerText);
    }

    var salonDiv = data.querySelectorAll("#page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(3) > div:nth-child(1) > span > article > div > div.SerpSnippet_data__3ezjY > div.SerpSnippet_personal__2weQZ > div");
    for (var i = 0; i < salonDiv.length; ++i) {
        Salon.push(salonDiv[i].innerText);
    }

    var adressDiv = data.querySelectorAll("#page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(3) > div:nth-child(1) > span > article > div > div.SerpSnippet_data__3ezjY > button");
    for (var i = 0; i < adressDiv.length; ++i) {
        Adress.push(adressDiv[i].innerText);
    }

    var photoDiv = data.querySelectorAll("#page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(3) > div:nth-child(1) > span > article > div > div.SerpSnippet_colLeft__1qO8G > a > img");
    for (var i = 0; i < photoDiv.length; ++i) {
        Photo.push(photoDiv[i].getAttribute('src'));
    }

    for (var i = Marka.length - 1; i >= 0; i--) {
        obj.push({
            "Photo": Photo[i],
            "Marka": Marka[i].toString(),
            "Year": Year[i],
            "Price": Price[i].toString().replace(/\s+/g, "").match(/\d+/i)[0],
            "UrlString": UrlString[i].toString(),
            "Probeg": Probeg[i],
            "Kuzov": Kuzov[i],
            "KPP": KPP[i],
            "Dvigatel": Dvigatel[i],
            "Power": Power[i],
            "Salon": Salon[i],
            "Adress": Adress[i]
        });
    }
    return obj;
}


chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});



//(function ($) {
//    function ajaxStart() {

//    }
//    function ajaxStop() {

//    }
//    function parserGo() {
//        ajaxStart();
//        var b = $.ajax('https://am.ru/lipetsk/search/?kladdr%5B0%5D=2263');
//        b.done(function (d) {
//            analysisSite(d);
//            ajaxStop();
//        });
//        b.fail(function (e, g, f) {
//            alert('Epic Fail');
//            ajaxStop();
//        })
//    }
//    function analysisSite(data) {
//        var s = '';
//        var name = [];
//        var urls = [];
//        var price = [];
//        var obj = [];
//        $(data).find('.SerpSnippet_topInfo__1ZraC a').each(function () {
//            name.push(this.innerText);
//            urls.push("https://am.ru" + $(this).attr('href'));
//        })
//        $(data).find('.SerpSnippet_price__1DHTI').each(function () {
//            price.push(this.innerText);
//        })
//        for (var i = 0; i < name.length; i++) {
//            obj.push({
//                Name: name[i],
//                Url: urls[i],
//                Price: price[i]
//            });
//        }
//        buildHtmlTable(obj);

//    }
//    $(function () {

//        $('#starter').click(parserGo);
//    });

//})(jQuery);

function DOMtoString(data) {
    var obj = [];
    var Id = [];
    var Photo = [];
    var Marka = [];
    var Year = [];
    var Price = [];
    var UrlString = [];
    var Probeg = [];
    var Kuzov = [];
    var KPP = [];
    var Dvigatel = [];
    var Obem = [];
    var Color = [];
    var Privod = [];
    var Power = [];
    var Rule = [];
    var VIN = [];
    var DateCreate = [];
    var Rastamogen = [];
    var Discription = [];
    var Bezopasnost = [];
    var Komfort = [];
    var Media = [];
    var Salon = [];
    var Contacts = [];
    var Adress = [];
    var Sostoyanie = [];
    var Nalichie = [];
    var PhotoUrlStringvar = [];
    var CountVlad = [];
    var DateOfChange = [];
    var PhotoUrlString = [];
    var Script = [];
    try {



        var textDiv = data.querySelectorAll('div[id^="i"]');

        for (var j = 0; j < textDiv.length; ++j) {

            console.log(j);

            var block = textDiv[j].querySelectorAll('div:nth-child(3) > div > h3 > a');
            if (block.length > 0) {
                Marka.push(block[0].innerText);
            } else {
                Marka.push("");
            }
            var block = textDiv[j].querySelectorAll('div:nth-child(3) > div.item_table-header > div');

            if (block.length > 0) {
                Price.push(block[0].innerText);
            } else {
                Price.push("");
            }
            Price = RunRule("Текст", Price, 0, /\s+/g, "Text", "", Price);
            Price = RunRule("Текст", Price, 1, /\d+/g, "Нет", "", Price);

            var block = textDiv[j].querySelectorAll('div:nth-child(3) > div.item_table-header > div > span > span');

            if (block.length > 0) {
                Discription.push(block[0].innerText);
            } else {
                Discription.push("");
            }

            var block = textDiv[j].querySelectorAll('div:nth-child(3) > div.item_table-header > div > span > span');
            if (block.length > 0) {
                Probeg.push(block[0].innerText);
            } else {
                Probeg.push("");
            }

            Probeg = RunRule("Текст", Probeg, 0, /\s+/g, "Text", "", Probeg);
            Probeg = RunRule("Текст", Probeg, 1, /\d+/g, "Нет", "", Probeg);

            var block = textDiv[j].querySelectorAll('div:nth-child(3) > div.item_table-header > div > span > span');

            if (block.length > 0) {
                Obem.push(block[0].innerText);
            } else {
                Obem.push("");
            }

            Obem = RunRule("Текст", Obem, 1, /\d+\.\d+/g, "Нет", "", Obem);
           
            var block = textDiv[j].querySelectorAll('div:nth-child(3) > div.item_table-header > div > span > span');

            if (block.length > 0) {
                Power.push(block[0].innerText);
            } else {
                Power.push("");
            }

            Power = RunRule("Текст", Power, 1, /\(.*?\)/g, "Нет", "", Power);
            Power = RunRule("Текст", Power, 1, /\d+/g, "Нет", "", Power);

            var block = textDiv[j].querySelectorAll('div:nth-child(3) > div.item_table-header > div > span > span');

            if (block.length > 0) {
                Dvigatel.push(block[0].innerText);
            } else {
                Dvigatel.push("");
            }

            Dvigatel = RunRule("Разделитель", Dvigatel, 5, /\,\s/g, "Нет", "", Dvigatel);

            var block = textDiv[j].querySelectorAll('div:nth-child(3) > div.item_table-header > div > span > span');
            if (block.length > 0) {

                Kuzov.push(block[0].innerText);
            } else {
                Kuzov.push("");
            }

               

            Kuzov = RunRule("Разделитель", Kuzov, 3, /\,\s/g, "Нет", "", Kuzov);

            var block = textDiv[j].querySelectorAll('div:nth-child(3) > div.item_table-header > div > span > span');

            if (block.length > 0) {
                Privod.push(block[0].innerText);
            } else {
                Privod.push("");
            }
            Privod = RunRule("Разделитель", Privod, 4, /\,\s/g, "Нет", "", Privod);

            var block = textDiv[j].querySelectorAll('div:nth-child(1) > a > img');
            console.log(block);
            if (block.length > 0)
                Photo.push(block[0].src);
            else {
                Photo.push("");
            }
        }


        for (var i = Marka.length - 1; i >= 0; i--) {
            obj.push({
                "Photo": Photo[i],
                "Marka": Marka[i],
                "Year": Year[i],
                "Price": Price[i],
                "UrlString": UrlString[i],
                "Probeg": Probeg[i],
                "Kuzov": Kuzov[i],
                "KPP": KPP[i],
                "Dvigatel": Dvigatel[i],
                "Obem": Obem[i],
                "Color": Color[i],
                "Privod": Privod[i],
                "Power": Power[i],
                "Rule": Rule[i],
                "VIN": VIN[i],
                "DateCreate": DateCreate[i],
                "Rastamogen": Rastamogen[i],
                "Discription": Discription[i],
                "Bezopasnost": Bezopasnost[i],
                "Komfort": Komfort[i],
                "Media": Media[i],
                "Salon": Salon[i],
                "Contacts": Contacts[i],
                "Adress": Adress[i],
                "Sostoyanie": Sostoyanie[i],
                "Nalichie": Nalichie[i],
                "PhotoUrlString": PhotoUrlString[i],
                "CountVlad ": CountVlad[i],
                "DateOfChange ": DateOfChange[i],
                "PhotoUrlString ": PhotoUrlString[i],
                "Script": 'Скрипт - irr.ru - Основная - Новый Скрипт 1',
            });
        }
        return obj;
    }
    catch (err) {

        console.log(err);

    }
}

function RunRule(typeTemplate, fieldSource, entry, searchTemplate, typeReplace, replace, resultField) {

    switch (typeTemplate) {
    case "Разделитель":
        return SeparatorTextSymbol(fieldSource, entry, searchTemplate);

    default:
        return TypeTemplateTextSymbol(fieldSource, entry, searchTemplate, typeReplace, replace);
    }
}
function TypeTemplateTextSymbol(fieldSource, entry, searchTemplate, typeReplace, replace) {
    try {
        var listval = fieldSource;
        if (listval == null)
            return fieldSource;
        var resultList = [];
        var index = GetEntryIndex(entry);
        for (var i = 0; i < listval.length; i++) {
            if (searchTemplate != null) {
                var rg = searchTemplate;
                if (listval[i] != null && listval[i] != undefined) {
                    var matches = listval[i].match(searchTemplate);
                    if (matches != null && matches.length > 0) {
                        var date = new Date();
                        if (typeReplace.indexOf("Вчера") >= 0) {

                           date.setDate(date.getDate() - 1);replace = date.toISOString();
                        }
                        if (typeReplace.indexOf("Сегодня") >= 0)
                            replace = date.toISOString();

                        if (typeReplace.indexOf("Нет") >= 0) {
                            if (index >= 0 && matches.length > index)
                                resultList.push(matches[index]);
                            else
                                resultList.push(listval[i]);
                        }
                        else {
                            var str;
                            if (index >= 0) {
                                str = ReplaceByMach(listval[i], matches[index], typeReplace,
                                    replace, index);
                                resultList.push(str);
                            }
                            else {
                                var replaText = replace;
                                if (replace == "\"\"")
                                    replaText = "";
                                str = listval[i].replace(rg, replaText);
                                resultList.push(str);
                            }
                        }
                    }
                    else {
                        resultList.push(listval[i]);
                    }
                }
                else {
                    resultList.push("");
                }
            }
        }
        return resultList;
    }
    catch (e) {
        return fieldSource;
        console.log(e);
    }

}

function ReplaceByMach(text, findText, typeReplace, replaText, mach) {
    try {
        var foundIndexes = [];
        if (findText)
            for (var i = text.indexOf(findText); i > -1; i = text.indexOf(findText, i + 1)) {
                foundIndexes.push(i);
            }
        if (foundIndexes.length == 0)
            return text;
        if (foundIndexes.length > mach) {
            if (typeReplace.indexOf("Формат") >= 0) {
                var date = new Date(text);
                return date;
            }
            if (replaText == "\"\"")
                replaText = "";
            if (foundIndexes[mach] == 0) {
                return replaText + text.remove(0, findText.length);
            }
            var s1 = text.substr(foundIndexes[mach], text.length - foundIndexes[mach]);
            var s2 = replaText;
            var s3 = text.substr(0, foundIndexes[mach] + findText.length);
            return s1 + s2 + s3;
        }
        return text;
    }
    catch (err) {

        console.log(err);


    }
}
function SeparatorTextSymbol(fieldSource, entry, searchTemplate) {
    try {
        var listval = fieldSource;
        if (listval == null)
            return fieldSource;
        var index = GetEntryIndex(entry);
        var resultList = [];
        for (var i = 0; i < listval.length; i++) {
            if (searchTemplate == null) continue;
            var matches = listval[i].split(searchTemplate);
            if (matches.length > index)
                resultList.push(matches[index]);
            else {
                resultList.push("");
            }
        }
        return resultList;
    }
    catch (e) {
        return fieldSource;
        console.log(e);
    }

}

function GetEntryIndex(entry) {
    if (entry == 0)
        return -99;
    var index = 0;
    index = entry - 1;
    if (index < 0) {
        index = -1;
    }
    return index;
}

chrome.runtime.sendMessage({
    action: "getSourceAvto",
    source: DOMtoString(document)
});
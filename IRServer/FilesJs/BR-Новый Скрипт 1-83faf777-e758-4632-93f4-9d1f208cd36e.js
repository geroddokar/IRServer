var errors = [];
var tableObj = [];
var scriptname = ["am.ru - Краткие данные - Новый Скрипт 1"];
var siteName = [];
function DOMtoString(data) {
    try {



        
//Колонки
{//Чтение колонки Marka
var selectorBlockMarka = ' #page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(4) > div:nth-child(1) > span > article';
var selectorItemMarka = 'div > div.SerpSnippet_data__3ezjY > div.SerpSnippet_topPadding__38j6x > div.SerpSnippet_topInfo__1ZraC > div.SerpSnippet_topInfoLeft__14Csp > div.SerpSnippet_titleWrapper__38bZM > a';
var Marka = ReadData(data, selectorBlockMarka, selectorItemMarka, 'InnerText'); 
//Добавление в таблицу данные колонки Marka
AddToArray(Marka, "Marka");
//Чтение колонки Price
var selectorBlockPrice = ' #page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(4) > div:nth-child(1) > span > article';
var selectorItemPrice = 'div > div.SerpSnippet_data__3ezjY > div.SerpSnippet_topPadding__38j6x > div.SerpSnippet_topInfo__1ZraC > div.SerpSnippet_topInfoRight__pG1ha > div > div';
var Price = ReadData(data, selectorBlockPrice, selectorItemPrice, 'InnerText'); 
//Добавление в таблицу данные колонки Price
AddToArray(Price, "Price");
//Коррекция для поля Price
var Price = Array.from(tableObj, x => x.Price).reverse();
Price = RunRule("Регулярное выражение", Price, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки Price
AddToArray(Price, "Price");
//Чтение колонки UrlString
var selectorBlockUrlString = ' #page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(4) > div:nth-child(1) > span > article';
var selectorItemUrlString = 'div > div.SerpSnippet_data__3ezjY > div.SerpSnippet_topPadding__38j6x > div.SerpSnippet_topInfo__1ZraC > div.SerpSnippet_topInfoLeft__14Csp > div.SerpSnippet_titleWrapper__38bZM > a';
var UrlString = ReadData(data, selectorBlockUrlString, selectorItemUrlString, 'href'); 
//Добавление в таблицу данные колонки UrlString
AddToArray(UrlString, "UrlString");
//Чтение колонки Probeg
var selectorBlockProbeg = ' #page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(4) > div:nth-child(1) > span > article';
var selectorItemProbeg = 'div > div.SerpSnippet_data__3ezjY > div:nth-child(2) > div.SerpSnippet_info__3_y7m > div:nth-child(1)';
var Probeg = ReadData(data, selectorBlockProbeg, selectorItemProbeg, 'InnerText'); 
//Добавление в таблицу данные колонки Probeg
AddToArray(Probeg, "Probeg");
//Коррекция для поля Probeg
var Probeg = Array.from(tableObj, x => x.Probeg).reverse();
Probeg = RunRule("Регулярное выражение", Probeg, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки Probeg
AddToArray(Probeg, "Probeg");
//Чтение колонки Year
var selectorBlockYear = '#page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div > div:nth-child(1) > span > article';
var selectorItemYear = 'div > div.SerpSnippet_data__3ezjY > div:nth-child(2) > div.SerpSnippet_info__3_y7m > div:nth-child(4)';
var Year = ReadData(data, selectorBlockYear, selectorItemYear, 'InnerText'); 
//Добавление в таблицу данные колонки Year
AddToArray(Year, "Year");
//Коррекция для поля Year
var Year = Array.from(tableObj, x => x.Year).reverse();
Year = RunRule("Регулярное выражение", Year, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки Year
AddToArray(Year, "Year");
//Чтение колонки DateCreate
var selectorBlockDateCreate = ' #page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(4) > div:nth-child(1) > span > article';
var selectorItemDateCreate = 'div > div.SerpSnippet_data__3ezjY > div.SerpSnippet_topPadding__38j6x > div.SerpSnippet_topInfo__1ZraC > div.SerpSnippet_topInfoLeft__14Csp > div.SerpSnippet_actualDate__2GBsL';
var DateCreate = ReadData(data, selectorBlockDateCreate, selectorItemDateCreate, 'InnerText'); 
//Добавление в таблицу данные колонки DateCreate
AddToArray(DateCreate, "DateCreate");
//Коррекция для поля DateCreate
var DateCreate = Array.from(tableObj, x => x.DateCreate).reverse();
DateCreate = RunRule("Регулярное выражение", DateCreate, -99, /.*мин.*/g, "Переменная: Сегодня","15.06.2018");
 //Добавление в таблицу данные колонки DateCreate
AddToArray(DateCreate, "DateCreate");
//Коррекция для поля DateCreate
var DateCreate = Array.from(tableObj, x => x.DateCreate).reverse();
DateCreate = RunRule("Регулярное выражение", DateCreate, -99, /.*час.*/g, "Переменная: Сегодня","15.06.2018");
 //Добавление в таблицу данные колонки DateCreate
AddToArray(DateCreate, "DateCreate");
//Чтение колонки Kuzov
var selectorBlockKuzov = ' #page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(4) > div:nth-child(1) > span > article';
var selectorItemKuzov = 'div > div.SerpSnippet_data__3ezjY > div:nth-child(2) > div.SerpSnippet_info__3_y7m > div:nth-child(5)';
var Kuzov = ReadData(data, selectorBlockKuzov, selectorItemKuzov, 'InnerText'); 
//Добавление в таблицу данные колонки Kuzov
AddToArray(Kuzov, "Kuzov");
//Чтение колонки KPP
var selectorBlockKPP = ' #page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(4) > div:nth-child(1) > span > article';
var selectorItemKPP = 'div > div.SerpSnippet_data__3ezjY > div:nth-child(2) > div.SerpSnippet_info__3_y7m > div:nth-child(6)';
var KPP = ReadData(data, selectorBlockKPP, selectorItemKPP, 'InnerText'); 
//Добавление в таблицу данные колонки KPP
AddToArray(KPP, "KPP");
//Чтение колонки Dvigatel
var selectorBlockDvigatel = ' #page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(4) > div:nth-child(1) > span > article';
var selectorItemDvigatel = 'div > div.SerpSnippet_data__3ezjY > div:nth-child(2) > div.SerpSnippet_info__3_y7m > div:nth-child(2)';
var Dvigatel = ReadData(data, selectorBlockDvigatel, selectorItemDvigatel, 'InnerText'); 
//Добавление в таблицу данные колонки Dvigatel
AddToArray(Dvigatel, "Dvigatel");
//Коррекция для поля Dvigatel
var Dvigatel = Array.from(tableObj, x => x.Dvigatel).reverse();
Dvigatel = RunRule("Регулярное выражение", Dvigatel, 0, /.*л\,/g, "Text","");
 //Добавление в таблицу данные колонки Dvigatel
AddToArray(Dvigatel, "Dvigatel");
//Чтение колонки Obem
var selectorBlockObem = ' #page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(4) > div:nth-child(1) > span > article';
var selectorItemObem = 'div > div.SerpSnippet_data__3ezjY > div:nth-child(2) > div.SerpSnippet_info__3_y7m > div:nth-child(2)';
var Obem = ReadData(data, selectorBlockObem, selectorItemObem, 'InnerText'); 
//Добавление в таблицу данные колонки Obem
AddToArray(Obem, "Obem");
//Коррекция для поля Obem
var Obem = Array.from(tableObj, x => x.Obem).reverse();
Obem = RunRule("Регулярное выражение", Obem, 0, /\d+(\.\d+)?/g, "Нет","");
 //Добавление в таблицу данные колонки Obem
AddToArray(Obem, "Obem");
//Коррекция для поля Obem
var Obem = Array.from(tableObj, x => x.Obem).reverse();
Obem = RunRule("Регулярное выражение", Obem, 0, /\./g, "Text",",");
 //Добавление в таблицу данные колонки Obem
AddToArray(Obem, "Obem");
//Чтение колонки Power
var selectorBlockPower = ' #page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(4) > div:nth-child(1) > span > article';
var selectorItemPower = 'div > div.SerpSnippet_data__3ezjY > div:nth-child(2) > div.SerpSnippet_info__3_y7m > div:nth-child(3)';
var Power = ReadData(data, selectorBlockPower, selectorItemPower, 'InnerText'); 
//Добавление в таблицу данные колонки Power
AddToArray(Power, "Power");
//Коррекция для поля Power
var Power = Array.from(tableObj, x => x.Power).reverse();
Power = RunRule("Регулярное выражение", Power, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки Power
AddToArray(Power, "Power");
//Чтение колонки VIN
var selectorBlockVIN = ' #page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(4) > div:nth-child(1) > span > article';
var selectorItemVIN = 'div > div.SerpSnippet_data__3ezjY > div:nth-child(2) > div.SerpSnippet_tags__1UxLF > div';
var VIN = ReadData(data, selectorBlockVIN, selectorItemVIN, 'InnerText'); 
//Добавление в таблицу данные колонки VIN
AddToArray(VIN, "VIN");
//Чтение колонки Adress
var selectorBlockAdress = ' #page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(4) > div:nth-child(1) > span > article';
var selectorItemAdress = 'div > div.SerpSnippet_data__3ezjY > div.SerpSnippet_bottomInfo__1zRMv > button';
var Adress = ReadData(data, selectorBlockAdress, selectorItemAdress, 'InnerText'); 
//Добавление в таблицу данные колонки Adress
AddToArray(Adress, "Adress");
//Коррекция для поля Adress
var Adress = Array.from(tableObj, x => x.Adress).reverse();
Adress = RunRule("Текст", Adress, 0, /, показать на карте/g, "Text","");
 //Добавление в таблицу данные колонки Adress
AddToArray(Adress, "Adress");
//Чтение колонки Contacts
var selectorBlockContacts = ' #page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div:nth-child(4) > div:nth-child(1) > span > article';
var selectorItemContacts = 'div > div.SerpSnippet_data__3ezjY > div.SerpSnippet_bottomInfo__1zRMv > div';
var Contacts = ReadData(data, selectorBlockContacts, selectorItemContacts, 'InnerText'); 
//Добавление в таблицу данные колонки Contacts
AddToArray(Contacts, "Contacts");
//Коррекция для поля Contacts
var Contacts = Array.from(tableObj, x => x.Contacts).reverse();
Contacts = RunRule("Текст", Contacts, 0, /Показать номер/g, "Text","");
 //Добавление в таблицу данные колонки Contacts
AddToArray(Contacts, "Contacts");
//Чтение колонки Photo
var selectorBlockPhoto = '#page-body > div > div.app_gridContainer__3QfzP > div.app_gridContentChildren__17ZMX > div > div:nth-child(1) > span > article';
var selectorItemPhoto = 'div > div.SerpSnippet_colLeft__1qO8G > a > div:nth-child(1) > div > div.SerpSnippetSlider_item__39435.SerpSnippetSlider_itemActive__GWzze';
var Photo = ReadData(data, selectorBlockPhoto, selectorItemPhoto, 'style'); 
//Добавление в таблицу данные колонки Photo
AddToArray(Photo, "Photo");
//Коррекция для поля Photo
var Photo = Array.from(tableObj, x => x.Photo).reverse();
Photo = RunRule("Регулярное выражение", Photo, 0, /background-image: url\(\"/g, "Text","");
 //Добавление в таблицу данные колонки Photo
AddToArray(Photo, "Photo");
//Коррекция для поля Photo
var Photo = Array.from(tableObj, x => x.Photo).reverse();
Photo = RunRule("Регулярное выражение", Photo, 0, /\"\);/g, "Text","");
 //Добавление в таблицу данные колонки Photo
AddToArray(Photo, "Photo");
};


        AddToArray(scriptname, "Script");
        siteName.push(data.domain);
        AddToArray(siteName, "Site");
        var obj = { Errors: errors, Table: tableObj, ScriptName: scriptname[0], Url: data.URL };
        return JSON.stringify(obj);
    }
    catch (err) {

        console.log(err);

    }
}

function ReadData(data, blockPath, elementPath, attr) {
    var array = [];
    var textDiv = data.querySelectorAll(blockPath);
    for (var i = 0; i < textDiv.length; ++i) {
        if (elementPath) {
            var el = textDiv[i].querySelectorAll(elementPath);
            if (el.length > 0) {
                var val = GetAttributeValue(el[0], attr);
                array.push(val);
            }
            else {
                array.push('');
            };
        }
        else {
            var val = GetAttributeValue(textDiv[i], attr);
            array.push(val);
        }

    }
    if (textDiv.length === 0) {
        errors.push({ Field: "Marka", Value: "" });
    }
    return array;
}

function GetAttributeValue(data, attr) {
    switch (attr) {
        case 'InnerText':
            return data.innerText;
        case 'src':
            return data.src;
        case 'href':
            return data.href;
        default:
            return attr ? data.getAttribute(attr) : "";
    }
}

function AddToArray(listItem, nameField) {
    if (tableObj != null) {
        if (tableObj.length > 0 && tableObj.length == listItem.length) {
            var ind = tableObj.length - 1;
            for (var i = 0; i <= tableObj.length - 1; i++) {
                tableObj[ind - i][nameField] = listItem[i];
            }
        } else {
            var myObj;
            if (tableObj.length > 0 && tableObj.length < listItem.length) {
                for (var i = 0; i <= listItem.length - 1; i++) {
                    if (tableObj.length < i) {
                        tableObj[i][nameField] = listItem[i];
                    } else {
                        myObj = new Object;
                        myObj[nameField] = listItem[i];
                        tableObj.unshift(myObj);
                    }
                }
            } else {
                if (tableObj.length > 0 && listItem.length == 1) {
                    for (var i = 0; i <= tableObj.length - 1; i++) {
                        tableObj[i][nameField] = listItem[0];
                    }
                } else {
                    if (tableObj.length == 0) {
                        for (var i = 0; i <= listItem.length - 1; i++) {
                            myObj = new Object;
                            myObj[nameField] = listItem[i];
                            tableObj.unshift(myObj);
                            console.log(i);
                        }
                    }
                }
            }
        }
    }
}

function RunRule(typeTemplate, fieldSource, entry, searchTemplate, typeReplace, replace) {

    switch (typeTemplate) {
        case "Разделитель":
            return SeparatorTextSymbol(fieldSource, entry, searchTemplate);
        case "Регулярное выражение":
            return TypeTemplateRegexSymbol(fieldSource, entry, searchTemplate, typeReplace, replace);
        default:
            return TypeTemplateTextSymbol(fieldSource, entry, searchTemplate, typeReplace, replace);
    }
}
function TypeTemplateRegexSymbol(fieldSource, index, searchTemplate, typeReplace, replace) {
    try {
        var listval = fieldSource;
        if (listval == null)
            return fieldSource;
        var resultList = [];
        for (var i = 0; i < listval.length; i++) {
            if (searchTemplate != null) {
                var rg = searchTemplate;
                if (listval[i] != null && listval[i] != undefined) {
                    var matches = listval[i].match(searchTemplate);
                    if (matches != null && matches.length > 0) {
                        var date = new Date();
                        if (typeReplace.indexOf("Вчера") >= 0) {
                            date.setDate(date.getDate() - 1);
                            replace =date.toJSON().slice(0,10).replace(/-/g,'.');
                        }
                        if (typeReplace.indexOf("Сегодня") >= 0)
                            replace = date.toJSON().slice(0,10).replace(/-/g,'.');
                        if (typeReplace.indexOf("Нет") >= 0) {
                            if (index >= 0 && matches.length > index)
                                resultList.push(matches[index]);
                            else
                                resultList.push(listval[i]);
                        }
                        else {
                            var str;
                            if (index >= 0) {
                                str = listval[i].toString().replace(matches[index], replace);
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
        console.log(e);
        return fieldSource;

    }
}
function TypeTemplateTextSymbol(fieldSource, index, searchTemplate, typeReplace, replace) {
    try {
        var listval = fieldSource;
        if (listval == null)
            return fieldSource;
        var resultList = [];
        for (var i = 0; i < listval.length; i++) {
            if (searchTemplate != null) {
                var rg = searchTemplate;
                if (listval[i] != null && listval[i] != undefined) {
                    var matches = listval[i].match(searchTemplate);
                    if (matches != null && matches.length > 0) {
                        var date = new Date();
                       if (typeReplace.indexOf("Вчера") >= 0) {
                            date.setDate(date.getDate() - 1);
                            replace =date.toJSON().slice(0,10).replace(/-/g,'.');
                        }
                        if (typeReplace.indexOf("Сегодня") >= 0)
                            replace = date.toJSON().slice(0,10).replace(/-/g,'.');

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
                return replaText + text.slice(0, findText.length - 1);
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
function SeparatorTextSymbol(fieldSource, index, searchTemplate) {
    try {
        var listval = fieldSource;
        if (listval == null)
            return fieldSource;
        var resultList = [];
        for (var i = 0; i < listval.length; i++) {
            if (searchTemplate == null) continue;
            var matches = listval[i].split(searchTemplate);
            if (matches.length > index)
                resultList.push(matches[index]);
            else {
                resultList.push(matches.FirstOrDefault());
            }
        }
        return resultList;
    }
    catch (e) {
        return fieldSource;
        console.log(e);
    }

}

function RunOperation(list1, list2, operand) {
    var resultList = [];
    switch (operand) {
        case "Add":
            if (list1.length <= list2.length) {
                for (var i = 0; i < list1.length; i++) {
                    var a = parseInt(list1[i]);
                    resultList.push(parseInt(list1[i]) + parseInt(list2[i]));
                }
            }
            if (list2.length < list1.length) {
                for (var i = 0; i < list2.length; i++) {
                    resultList.push(parseInt(list1[i]) + parseInt(list2[i]));
                }
            }
            break;
        case "Subtract":
            if (list1.length <= list2.length) {
                for (var i = 0; i < list1.length; i++) {
                    resultList.push(parseInt(list1[i]) - parseInt(list2[i]));
                }
            }
            if (list2.length < list1.length) {
                for (var i = 0; i < list2.length; i++) {
                    resultList.push(parseInt(list1[i]) - parseInt(list2[i]));
                }
            }
            break;
        case "Divide":
            if (list1.length <= list2.length) {
                for (var i = 0; i < list1.length; i++) {
                    resultList.push(parseInt(list1[i]) / parseInt(list2[i]));
                }
            }
            if (list2.length < list1.length) {
                for (var i = 0; i < list2.length; i++) {
                    resultList.push(parseInt(list1[i]) / parseInt(list2[i]));
                }
            }
            break;
        case "Multiply":
            if (list1.length <= list2.length) {
                for (var i = 0; i < list1.length; i++) {
                    resultList.push(parseInt(list1[i]) * parseInt(list2[i]));
                }
            }
            if (list2.length < list1.length) {
                for (var i = 0; i < list2.length; i++) {
                    resultList.push(parseInt(list1[i]) * parseInt(list2[i]));
                }
            }
            break;
    }
    return resultList;
}

function GetListItem(xpathBlock, xpathItem, doc) {
    var countBlock = [];
    var resultsnode = [];
    var listblock = doc.querySelectorAll(xpathBlock);
    if (listblock.length === 0)
        return null;
    if (xpathItem !== "") {
        for (var i = 0; i < listblock.length; i++) {
            var item = listblock[i].querySelectorAll(xpathItem);
            if (item == null || item.length === 0) {
                resultsnode.push(listblock[i]);
            } else {
                resultsnode.push(item[0]);
            }
        }
    }
    if (resultsnode.length == 0)
        return countBlock;
    for (var i = 0; i < resultsnode.length; i++) {
        var node = resultsnode[i];
        if (node == null) {

            countBlock.push("");
        } else {
            if (node.InnerText == null || node.InnerText === "")
                countBlock.push(node.GetAttributeValue("title", ""));
            else {
                var text = node.InnerText.trim().replace(/<.*?>/i, "").replace(/\r/, "").replace(/\n/, "")
                    .replace(/\t/, "").replace("&nbsp;", "");
                countBlock.push(text);
            }
        }
    }
    return countBlock;
}

function GetNameValue(xPathBlock, XPathInBlock, XPathBlockValue,
    XPathInBlockValue, ResultFieldsDic, doc) {

    var _resultTableNameValue = [];
    var listName = GetListItem(xPathBlock, XPathInBlock, doc);
    var listValue = GetListItem(XPathBlockValue, XPathInBlockValue, doc);

    for (var i = 0; i < listName.length; i++) {
        var row = { Name: listName[i], resultField: "", Value: "" };
        var key = ResultFieldsDic.filter(t => t.Value == row.Name.toString());
        if (key.length > 0)
            row.resultField = key[0].key;
        _resultTableNameValue.push(row);
    }
}


chrome.runtime.sendMessage({
    action: "1",
    source: DOMtoString(document)
});
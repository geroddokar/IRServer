var errors = [];
var tableObj = [];
var scriptname = ["www.mirkvartir.ru - Краткие данные - Новый Скрипт 1"];
var siteName = [];
function DOMtoString(data) {
    try {



        
//Колонки
{//Чтение колонки Discription
var selectorBlockDiscription = 'body > div.l-layout.layout > div.l-site-wrapper-outer > div.l-site-wrapper-inner > div.l-site-container > div.l-content.m-left-3x-right-1x.l-alert-placeholder > div.l-column-left.m-two-column.m-table > div.js-listing > div.l-column-left-right > div > div.b-offers-list > div.wrapper-list > div';
var selectorItemDiscription = 'div.item > a:nth-child(1) > span.b-card-header > span.object-prams.b-cutted-text';
var Discription = ReadData(data, selectorBlockDiscription, selectorItemDiscription, 'InnerText'); 
//Добавление в таблицу данные колонки Discription
AddToArray(Discription, "Discription");
//Чтение колонки Price
var selectorBlockPrice = 'body > div.l-layout.layout > div.l-site-wrapper-outer > div.l-site-wrapper-inner > div.l-site-container > div.l-content.m-left-3x-right-1x.l-alert-placeholder > div.l-column-left.m-two-column.m-table > div.js-listing > div.l-column-left-right > div > div.b-offers-list > div.wrapper-list > div';
var selectorItemPrice = 'div.item > a:nth-child(1) > span.b-card-header > span.info.m-narrow > span:nth-child(1) > strong';
var Price = ReadData(data, selectorBlockPrice, selectorItemPrice, 'InnerText'); 
//Добавление в таблицу данные колонки Price
AddToArray(Price, "Price");
//Коррекция для поля Price
var Price = Array.from(tableObj, x => x.Price).reverse();
Price = RunRule("Текст", Price, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки Price
AddToArray(Price, "Price");
//Чтение колонки PriceM
var selectorBlockPriceM = 'body > div.l-layout.layout > div.l-site-wrapper-outer > div.l-site-wrapper-inner > div.l-site-container > div.l-content.m-left-3x-right-1x.l-alert-placeholder > div.l-column-left.m-two-column.m-table > div.js-listing > div.l-column-left-right > div > div.b-offers-list > div.wrapper-list > div';
var selectorItemPriceM = 'div.item > a:nth-child(1) > span.b-card-header > span.info.m-narrow > span:nth-child(2)';
var PriceM = ReadData(data, selectorBlockPriceM, selectorItemPriceM, 'InnerText'); 
//Добавление в таблицу данные колонки PriceM
AddToArray(PriceM, "PriceM");
//Коррекция для поля PriceM
var PriceM = Array.from(tableObj, x => x.PriceM).reverse();
PriceM = RunRule("Регулярное выражение", PriceM, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки PriceM
AddToArray(PriceM, "PriceM");
//Чтение колонки Photo
var selectorBlockPhoto = 'body > div.l-layout.layout > div.l-site-wrapper-outer > div.l-site-wrapper-inner > div.l-site-container > div.l-content.m-left-3x-right-1x.l-alert-placeholder > div.l-column-left.m-two-column.m-table > div.js-listing > div.l-column-left-right > div > div.b-offers-list > div.wrapper-list > div';
var selectorItemPhoto = 'div.item > a:nth-child(1) > span.b-estate-image > span:nth-child(1) > span > span.slide-container > span > span > div > div:nth-child(1) > img';
var Photo = ReadData(data, selectorBlockPhoto, selectorItemPhoto, 'data-2x-src'); 
//Добавление в таблицу данные колонки Photo
AddToArray(Photo, "Photo");
//Чтение колонки UrlString
var selectorBlockUrlString = 'body > div.l-layout.layout > div.l-site-wrapper-outer > div.l-site-wrapper-inner > div.l-site-container > div.l-content.m-left-3x-right-1x.l-alert-placeholder > div.l-column-left.m-two-column.m-table > div.js-listing > div.l-column-left-right > div > div.b-offers-list > div.wrapper-list > div';
var selectorItemUrlString = 'div.item > a';
var UrlString = ReadData(data, selectorBlockUrlString, selectorItemUrlString, 'href'); 
//Добавление в таблицу данные колонки UrlString
AddToArray(UrlString, "UrlString");
//Чтение колонки CountRoom
var selectorBlockCountRoom = 'body > div.l-layout.layout > div.l-site-wrapper-outer > div.l-site-wrapper-inner > div.l-site-container > div.l-content.m-left-3x-right-1x.l-alert-placeholder > div.l-column-left.m-two-column.m-table > div.js-listing > div.l-column-left-right > div > div.b-offers-list > div.wrapper-list > div';
var selectorItemCountRoom = 'div.item > a:nth-child(1) > span.b-card-header > span.b-card-title > span > span.address.b-cutted-text > span.room-count-desc';
var CountRoom = ReadData(data, selectorBlockCountRoom, selectorItemCountRoom, 'InnerText'); 
//Добавление в таблицу данные колонки CountRoom
AddToArray(CountRoom, "CountRoom");
//Чтение колонки AreaAll
var selectorBlockAreaAll = 'body > div.l-layout.layout > div.l-site-wrapper-outer > div.l-site-wrapper-inner > div.l-site-container > div.l-content.m-left-3x-right-1x.l-alert-placeholder > div.l-column-left.m-two-column.m-table > div.js-listing > div.l-column-left-right > div > div.b-offers-list > div.wrapper-list > div';
var selectorItemAreaAll = 'div.item > a:nth-child(1) > span.b-card-header > span.b-card-title > span > span.address.b-cutted-text > span.flat-area-desc';
var AreaAll = ReadData(data, selectorBlockAreaAll, selectorItemAreaAll, 'InnerText'); 
//Добавление в таблицу данные колонки AreaAll
AddToArray(AreaAll, "AreaAll");
//Чтение колонки Etag
var selectorBlockEtag = 'body > div.l-layout.layout > div.l-site-wrapper-outer > div.l-site-wrapper-inner > div.l-site-container > div.l-content.m-left-3x-right-1x.l-alert-placeholder > div.l-column-left.m-two-column.m-table > div.js-listing > div.l-column-left-right > div > div.b-offers-list > div.wrapper-list > div';
var selectorItemEtag = 'div.item > a:nth-child(1) > span.b-card-header > span.b-card-title > span > span.address.b-cutted-text > span.floor-desc';
var Etag = ReadData(data, selectorBlockEtag, selectorItemEtag, 'InnerText'); 
//Добавление в таблицу данные колонки Etag
AddToArray(Etag, "Etag");
//Чтение колонки CountFloor
var selectorBlockCountFloor = 'body > div.l-layout.layout > div.l-site-wrapper-outer > div.l-site-wrapper-inner > div.l-site-container > div.l-content.m-left-3x-right-1x.l-alert-placeholder > div.l-column-left.m-two-column.m-table > div.js-listing > div.l-column-left-right > div > div.b-offers-list > div.wrapper-list > div';
var selectorItemCountFloor = 'div.item > a:nth-child(1) > span.b-card-header > span.b-card-title > span > span.address.b-cutted-text > span.floors-desc';
var CountFloor = ReadData(data, selectorBlockCountFloor, selectorItemCountFloor, 'InnerText'); 
//Добавление в таблицу данные колонки CountFloor
AddToArray(CountFloor, "CountFloor");
//Чтение колонки Contacts
var selectorBlockContacts = 'a.phone-button';
var selectorItemContacts = '';
var Phone = ReadData(data, selectorBlockContacts, selectorItemContacts, 'InnerText'); 
//Добавление в таблицу данные колонки Phone
AddToArray(Phone, "Phone");
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
                            replace = date.setDate(date.getDate() - 1);;
                        }
                        if (typeReplace.indexOf("Сегодня") >= 0)
                            replace = date.getDate();
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

                            replace = date.setDate(date.getDate() - 1);;
                        }
                        if (typeReplace.indexOf("СеYearня") >= 0)
                            replace = date.getDate();

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
    action: "3",
    source: DOMtoString(document)
});
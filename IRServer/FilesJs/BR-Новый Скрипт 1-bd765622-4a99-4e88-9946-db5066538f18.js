var errors = [];
var tableObj = [];
var scriptname = ["www.mirkvartir.ru - Краткие данные - Новый Скрипт 1"];
var siteName = [];
function DOMtoString(data) {
    try {



        
//Колонки
{//Чтение колонки Discription
var selectorBlockDiscription = '#react_IOJzr8Ax0S8OzEkkHtMQ > div > div.l-layout.m-content > div.l-content > div.b-flats-list > div';
var selectorItemDiscription = 'div.info-container > div.info-text > div';
var Discription = ReadData(data, selectorBlockDiscription, selectorItemDiscription, 'InnerText', 'Discription'); 
//Добавление в таблицу данные колонки Discription
AddToArray(Discription, "Discription");
//Чтение колонки Price
var selectorBlockPrice = '#react_IOJzr8Ax0S8OzEkkHtMQ > div > div.l-layout.m-content > div.l-content > div.b-flats-list > div';
var selectorItemPrice = 'div.info-container > div.info-table.m-type1 > span.price-all > strong';
var Price = ReadData(data, selectorBlockPrice, selectorItemPrice, 'InnerText', 'Price'); 
//Добавление в таблицу данные колонки Price
AddToArray(Price, "Price");
//Коррекция для поля Price
var Price = Array.from(tableObj, x => x.Price).reverse();
Price = RunRule("Текст", Price, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки Price
AddToArray(Price, "Price");
//Чтение колонки PriceM
var selectorBlockPriceM = '#react_IOJzr8Ax0S8OzEkkHtMQ > div > div.l-layout.m-content > div.l-content > div.b-flats-list > div';
var selectorItemPriceM = 'div.item > a:nth-child(1) > span.b-card-header > span.info.m-narrow > span:nth-child(2)';
var PriceM = ReadData(data, selectorBlockPriceM, selectorItemPriceM, 'InnerText', 'PriceM'); 
//Добавление в таблицу данные колонки PriceM
AddToArray(PriceM, "PriceM");
//Коррекция для поля PriceM
var PriceM = Array.from(tableObj, x => x.PriceM).reverse();
PriceM = RunRule("Регулярное выражение", PriceM, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки PriceM
AddToArray(PriceM, "PriceM");
//Чтение колонки Photo
var selectorBlockPhoto = '#react_IOJzr8Ax0S8OzEkkHtMQ > div > div.l-layout.m-content > div.l-content > div.b-flats-list > div';
var selectorItemPhoto = 'div.img > div > a > div > div > div > div:nth-child(2) > span > img';
var Photo = ReadData(data, selectorBlockPhoto, selectorItemPhoto, 'src', 'Photo'); 
//Добавление в таблицу данные колонки Photo
AddToArray(Photo, "Photo");
//Чтение колонки UrlString
var selectorBlockUrlString = '#react_IOJzr8Ax0S8OzEkkHtMQ > div > div.l-layout.m-content > div.l-content > div.b-flats-list > div';
var selectorItemUrlString = 'div.info-container > h4 > a:nth-child(1)';
var UrlString = ReadData(data, selectorBlockUrlString, selectorItemUrlString, 'href', 'UrlString'); 
//Добавление в таблицу данные колонки UrlString
AddToArray(UrlString, "UrlString");
//Чтение колонки CountRoom
var selectorBlockCountRoom = '#react_IOJzr8Ax0S8OzEkkHtMQ > div > div.l-layout.m-content > div.l-content > div.b-flats-list > div';
var selectorItemCountRoom = 'div.info-container > div.info-table.m-type1 > span.count-room > strong';
var CountRoom = ReadData(data, selectorBlockCountRoom, selectorItemCountRoom, 'InnerText', 'CountRoom'); 
//Добавление в таблицу данные колонки CountRoom
AddToArray(CountRoom, "CountRoom");
//Чтение колонки AreaAll
var selectorBlockAreaAll = '#react_IOJzr8Ax0S8OzEkkHtMQ > div > div.l-layout.m-content > div.l-content > div.b-flats-list > div';
var selectorItemAreaAll = 'div.info-container > div.info-table.m-type1 > span.square-all > strong';
var AreaAll = ReadData(data, selectorBlockAreaAll, selectorItemAreaAll, 'InnerText', 'AreaAll'); 
//Добавление в таблицу данные колонки AreaAll
AddToArray(AreaAll, "AreaAll");
//Чтение колонки Etag
var selectorBlockEtag = '#react_IOJzr8Ax0S8OzEkkHtMQ > div > div.l-layout.m-content > div.l-content > div.b-flats-list > div';
var selectorItemEtag = 'div.info-container > div.info-table.m-type1 > span.count-floor > strong';
var Etag = ReadData(data, selectorBlockEtag, selectorItemEtag, 'InnerText', 'Etag'); 
//Добавление в таблицу данные колонки Etag
AddToArray(Etag, "Etag");

//Коррекция для поля Etag
var Etag = Array.from(tableObj, x => x.Etag).reverse();
Etag = RunRule("Регулярное выражение", Etag, 0, /\d+/g, "Нет","");
 //Добавление в таблицу данные колонки Etag
AddToArray(Etag, "Etag");

//Чтение колонки CountFloor
var selectorBlockCountFloor = '#react_IOJzr8Ax0S8OzEkkHtMQ > div > div.l-layout.m-content > div.l-content > div.b-flats-list > div';
var selectorItemCountFloor = 'div.info-container > div.info-table.m-type1 > span.count-floor > strong > small';
var CountFloor = ReadData(data, selectorBlockCountFloor, selectorItemCountFloor, 'InnerText', 'CountFloor'); 
//Добавление в таблицу данные колонки CountFloor
AddToArray(CountFloor, "CountFloor");

//Коррекция для поля CountFloor
var CountFloor = Array.from(tableObj, x => x.CountFloor).reverse();
CountFloor = RunRule("Регулярное выражение", CountFloor, 0, /\d+/g, "Нет","");
 //Добавление в таблицу данные колонки CountFloor
AddToArray(CountFloor, "CountFloor");

//Чтение колонки Contacts
var selectorBlockContacts = '#react_IOJzr8Ax0S8OzEkkHtMQ > div > div.l-layout.m-content > div.l-content > div.b-flats-list > div';
var selectorItemContacts = 'div.actions-container > a > span';
var Contacts = ReadData(data, selectorBlockContacts, selectorItemContacts, 'InnerText', 'Contacts'); 
//Добавление в таблицу данные колонки Contacts
AddToArray(Contacts, "Contacts");


//Чтение колонки Metro
var selectorBlockMetro = '#react_IOJzr8Ax0S8OzEkkHtMQ > div > div.l-layout.m-content > div.l-content > div.b-flats-list > div';
var selectorItemMetro = 'div.info-container > div.place-address > div.place > a';
var Metro = ReadData(data, selectorBlockMetro, selectorItemMetro, 'InnerText', 'Metro'); 
//Добавление в таблицу данные колонки Metro
AddToArray(Metro, "Metro");

//Чтение колонки Adress
var selectorBlockAdress = '#react_IOJzr8Ax0S8OzEkkHtMQ > div > div.l-layout.m-content > div.l-content > div.b-flats-list > div';
var selectorItemAdress = 'div.info-container > div.place-address > div.address > span:nth-child(2) > a';
var Adress = ReadData(data, selectorBlockAdress, selectorItemAdress, 'InnerText', 'Adress'); 
//Добавление в таблицу данные колонки Adress
AddToArray(Adress, "Adress");


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

function ReadData(data, blockPath, elementPath, attr, field) {
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
        errors.push({ Field: field, Value: "" });
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
                            replace = date.getTime()
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
                        if (typeReplace.indexOf("Сегодня") >= 0)
                            replace = date.getTime()

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
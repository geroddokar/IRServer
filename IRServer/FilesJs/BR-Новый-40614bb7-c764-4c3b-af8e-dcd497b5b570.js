var errors = [];
var tableObj = [];
var scriptname = ["msk.realty.mail.ru - Краткие данные - Новый"];
var siteName = [];
function DOMtoString(data) {
    try {



        
//Колонки
{//Чтение колонки Discription
var selectorBlockDiscription = 'body > div.layout > div.block.js-module > div > div > div > div.cols__column.cols__column_small_32.cols__column_medium_33.cols__column_large_39.js-module > div > div > div.js-search-results__cont > div > div';
var selectorItemDiscription = 'div > div.p-instance__inner > div.p-instance__text';
var Discription = ReadData(data, selectorBlockDiscription, selectorItemDiscription, 'InnerText', 'Discription'); 
//Добавление в таблицу данные колонки Discription
AddToArray(Discription, "Discription");
//Чтение колонки Price
var selectorBlockPrice = 'body > div.layout > div.block.js-module > div > div > div > div.cols__column.cols__column_small_32.cols__column_medium_33.cols__column_large_39.js-module > div > div > div.js-search-results__cont > div > div';
var selectorItemPrice = 'div > div.p-instance__inner > div:nth-child(1) > div.p-instance__block_right > span.p-instance__title';
var Price = ReadData(data, selectorBlockPrice, selectorItemPrice, 'InnerText', 'Price'); 
//Добавление в таблицу данные колонки Price
AddToArray(Price, "Price");
//Коррекция для поля Price
var Price = Array.from(tableObj, x => x.Price).reverse();
Price = RunRule("Регулярное выражение", Price, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки Price
AddToArray(Price, "Price");
//Чтение колонки UrlString
var selectorBlockUrlString = 'body > div.layout > div.block.js-module > div > div > div > div.cols__column.cols__column_small_32.cols__column_medium_33.cols__column_large_39.js-module > div > div > div.js-search-results__cont > div > div';
var selectorItemUrlString = 'div > div.p-instance__inner > div:nth-child(1) > div.p-instance__block_place > a';
var UrlString = ReadData(data, selectorBlockUrlString, selectorItemUrlString, 'href', 'UrlString'); 
//Добавление в таблицу данные колонки UrlString
AddToArray(UrlString, "UrlString");
//Чтение колонки Photo
var selectorBlockPhoto = 'body > div.layout > div.block.js-module > div > div > div > div.cols__column.cols__column_small_32.cols__column_medium_33.cols__column_large_39.js-module > div > div > div.js-search-results__cont > div > div';
var selectorItemPhoto = 'div > div.p-instance__img > span > div > img';
var Photo = ReadData(data, selectorBlockPhoto, selectorItemPhoto, 'src', 'Photo'); 
//Добавление в таблицу данные колонки Photo
AddToArray(Photo, "Photo");
//Чтение колонки Etag
var selectorBlockEtag = 'body > div.layout > div.block.js-module > div > div > div > div.cols__column.cols__column_small_32.cols__column_medium_33.cols__column_large_39.js-module > div > div > div.js-search-results__cont > div > div';
var selectorItemEtag = 'div > div.p-instance__inner > div:nth-child(2) > div.hidden_small.hidden_medium > span';
var Etag = ReadData(data, selectorBlockEtag, selectorItemEtag, 'InnerText', 'Etag'); 
//Добавление в таблицу данные колонки Etag
AddToArray(Etag, "Etag");
//Коррекция для поля Etag
var Etag = Array.from(tableObj, x => x.Etag).reverse();
Etag = RunRule("Регулярное выражение", Etag, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки Etag
AddToArray(Etag, "Etag");
//Чтение колонки AreaAll
var selectorBlockAreaAll = 'body > div.layout > div.block.js-module > div > div > div > div.cols__column.cols__column_small_32.cols__column_medium_33.cols__column_large_39.js-module > div > div > div.js-search-results__cont > div > div';
var selectorItemAreaAll = 'div > div.p-instance__inner > div:nth-child(2) > div:nth-child(2) > span';
var AreaAll = ReadData(data, selectorBlockAreaAll, selectorItemAreaAll, 'InnerText', 'AreaAll'); 
//Добавление в таблицу данные колонки AreaAll
AddToArray(AreaAll, "AreaAll");
//Коррекция для поля AreaAll
var AreaAll = Array.from(tableObj, x => x.AreaAll).reverse();
AreaAll = RunRule("Регулярное выражение", AreaAll, -99, /м2/g, "Text","");
 //Добавление в таблицу данные колонки AreaAll
AddToArray(AreaAll, "AreaAll");
//Коррекция для поля AreaAll
var AreaAll = Array.from(tableObj, x => x.AreaAll).reverse();
AreaAll = RunRule("Регулярное выражение", AreaAll, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки AreaAll
AddToArray(AreaAll, "AreaAll");
//Чтение колонки AreaLife
var selectorBlockAreaLife = 'body > div.layout > div.block.js-module > div > div > div > div.cols__column.cols__column_small_32.cols__column_medium_33.cols__column_large_39.js-module > div > div > div.js-search-results__cont > div > div';
var selectorItemAreaLife = 'div > div.p-instance__inner > div:nth-child(2) > div:nth-child(3) > span';
var AreaLife = ReadData(data, selectorBlockAreaLife, selectorItemAreaLife, 'InnerText', 'AreaLife'); 
//Добавление в таблицу данные колонки AreaLife
AddToArray(AreaLife, "AreaLife");
//Коррекция для поля AreaLife
var AreaLife = Array.from(tableObj, x => x.AreaLife).reverse();
AreaLife = RunRule("Текст", AreaLife, -99, /м2/g, "Text","");
 //Добавление в таблицу данные колонки AreaLife
AddToArray(AreaLife, "AreaLife");
//Коррекция для поля AreaLife
var AreaLife = Array.from(tableObj, x => x.AreaLife).reverse();
AreaLife = RunRule("Регулярное выражение", AreaLife, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки AreaLife
AddToArray(AreaLife, "AreaLife");
//Чтение колонки AreaKyhnya
var selectorBlockAreaKyhnya = 'body > div.layout > div.block.js-module > div > div > div > div.cols__column.cols__column_small_32.cols__column_medium_33.cols__column_large_39.js-module > div > div > div.js-search-results__cont > div > div';
var selectorItemAreaKyhnya = 'div > div.p-instance__inner > div:nth-child(2) > div:nth-child(4) > span';
var AreaKyhnya = ReadData(data, selectorBlockAreaKyhnya, selectorItemAreaKyhnya, 'InnerText', 'AreaKyhnya'); 
//Добавление в таблицу данные колонки AreaKyhnya
AddToArray(AreaKyhnya, "AreaKyhnya");
//Коррекция для поля AreaKyhnya
var AreaKyhnya = Array.from(tableObj, x => x.AreaKyhnya).reverse();
AreaKyhnya = RunRule("Текст", AreaKyhnya, -99, /м2/g, "Text","");
 //Добавление в таблицу данные колонки AreaKyhnya
AddToArray(AreaKyhnya, "AreaKyhnya");
//Коррекция для поля AreaKyhnya
var AreaKyhnya = Array.from(tableObj, x => x.AreaKyhnya).reverse();
AreaKyhnya = RunRule("Регулярное выражение", AreaKyhnya, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки AreaKyhnya
AddToArray(AreaKyhnya, "AreaKyhnya");
//Чтение колонки Adress
var selectorBlockAdress = 'body > div.layout > div.block.js-module > div > div > div > div.cols__column.cols__column_small_32.cols__column_medium_33.cols__column_large_39.js-module > div > div > div.js-search-results__cont > div > div';
var selectorItemAdress = 'div > div.p-instance__inner > div:nth-child(1) > div.p-instance__block_place > a';
var Adress = ReadData(data, selectorBlockAdress, selectorItemAdress, 'InnerText', 'Adress'); 
//Добавление в таблицу данные колонки Adress
AddToArray(Adress, "Adress");
//Коррекция для поля Adress
var Adress = Array.from(tableObj, x => x.Adress).reverse();
Adress = RunRule("Регулярное выражение", Adress, 0, /\d+\s+комн\.\s+квартира,/g, "Text","");
 //Добавление в таблицу данные колонки Adress
AddToArray(Adress, "Adress");
//Чтение колонки PriceM
var selectorBlockPriceM = 'body > div.layout > div.block.js-module > div > div > div > div.cols__column.cols__column_small_32.cols__column_medium_33.cols__column_large_39.js-module > div > div > div.js-search-results__cont > div > div';
var selectorItemPriceM = 'div > div.p-instance__inner > div:nth-child(1) > div.p-instance__block_right > span.p-instance__params > div:nth-child(1)';
var PriceM = ReadData(data, selectorBlockPriceM, selectorItemPriceM, 'InnerText', 'PriceM'); 
//Добавление в таблицу данные колонки PriceM
AddToArray(PriceM, "PriceM");
//Коррекция для поля PriceM
var PriceM = Array.from(tableObj, x => x.PriceM).reverse();
PriceM = RunRule("Регулярное выражение", PriceM, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки PriceM
AddToArray(PriceM, "PriceM");
//Чтение колонки DateCreate
var selectorBlockDateCreate = 'body > div.layout > div.block.js-module > div > div > div > div.cols__column.cols__column_small_32.cols__column_medium_33.cols__column_large_39.js-module > div > div > div.js-search-results__cont > div > div';
var selectorItemDateCreate = 'div > div.p-instance__inner > div:nth-child(1) > div.p-instance__block_place > span > div.js-ago';
var DateCreate = ReadData(data, selectorBlockDateCreate, selectorItemDateCreate, 'InnerText', 'DateCreate'); 
//Добавление в таблицу данные колонки DateCreate
AddToArray(DateCreate, "DateCreate");
//Коррекция для поля DateCreate
var DateCreate = Array.from(tableObj, x => x.DateCreate).reverse();
DateCreate = RunRule("Регулярное выражение", DateCreate, 0, /\d+\s+час.*/g, "Переменная: Сегодня","17.07.2018");
 //Добавление в таблицу данные колонки DateCreate
AddToArray(DateCreate, "DateCreate");
//Коррекция для поля DateCreate
var DateCreate = Array.from(tableObj, x => x.DateCreate).reverse();
DateCreate = RunRule("Текст", DateCreate, 0, /1 день назад/g, "Переменная: Вчера","16.07.2018");
 //Добавление в таблицу данные колонки DateCreate
AddToArray(DateCreate, "DateCreate");
//Чтение колонки CountRoom
var selectorBlockCountRoom = 'body > div.layout > div.block.js-module > div > div > div > div.cols__column.cols__column_small_32.cols__column_medium_33.cols__column_large_39.js-module > div > div > div.js-search-results__cont > div > div';
var selectorItemCountRoom = 'div > div.p-instance__inner > div:nth-child(1) > div.p-instance__block_place > a';
var CountRoom = ReadData(data, selectorBlockCountRoom, selectorItemCountRoom, 'InnerText', 'CountRoom'); 
//Добавление в таблицу данные колонки CountRoom
AddToArray(CountRoom, "CountRoom");
//Коррекция для поля CountRoom
var CountRoom = Array.from(tableObj, x => x.CountRoom).reverse();
CountRoom = RunRule("Регулярное выражение", CountRoom, 0, /^\d+/g, "Нет","");
 //Добавление в таблицу данные колонки CountRoom
AddToArray(CountRoom, "CountRoom");
//Чтение колонки Metro
var selectorBlockMetro = 'body > div.layout > div.block.js-module > div > div > div > div.cols__column.cols__column_small_32.cols__column_medium_33.cols__column_large_39.js-module > div > div > div.js-search-results__cont > div > div';
var selectorItemMetro = 'div > div.p-instance__inner > div:nth-child(5) > div:nth-child(1) > span > div';
var Metro = ReadData(data, selectorBlockMetro, selectorItemMetro, 'InnerText', 'Metro'); 
//Добавление в таблицу данные колонки Metro
AddToArray(Metro, "Metro");
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
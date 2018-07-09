var errors = [];
var tableObj = [];
var scriptname = ["www.rabota.ru - Краткие данные - Новый Скрипт 1"];
var siteName = [];
function DOMtoString(data) {
    try {



        
//Колонки
{//Чтение колонки Vakansia
var selectorBlockVakansia = '#js-search-result-container > div.list-vacancies__sections > section';
var selectorItemVakansia = 'div.list-vacancies__content > div.indent-small > div.list-vacancies__content-left.col-sm-9 > div > a > span';
var Vakansia = ReadData(data, selectorBlockVakansia, selectorItemVakansia, 'InnerText'); 
//Добавление в таблицу данные колонки Vakansia
AddToArray(Vakansia, "Vakansia");
//Чтение колонки UrlString
var selectorBlockUrlString = '#js-search-result-container > div.list-vacancies__sections > section';
var selectorItemUrlString = 'div.list-vacancies__content > div.indent-small > div.list-vacancies__content-left.col-sm-9 > div > a';
var UrlString = ReadData(data, selectorBlockUrlString, selectorItemUrlString, 'href'); 
//Добавление в таблицу данные колонки UrlString
AddToArray(UrlString, "UrlString");
//Чтение колонки ZpOt
var selectorBlockZpOt = '#js-search-result-container > div.list-vacancies__sections > section';
var selectorItemZpOt = 'div.list-vacancies__content > div.indent-small > div.list-vacancies__content-left.col-sm-9 > div > div.list-vacancies__salary';
var ZpOt = ReadData(data, selectorBlockZpOt, selectorItemZpOt, 'InnerText'); 
//Добавление в таблицу данные колонки ZpOt
AddToArray(ZpOt, "ZpOt");
//Коррекция для поля ZpOt
var ZpOt = Array.from(tableObj, x => x.ZpOt).reverse();
ZpOt = RunRule("Регулярное выражение", ZpOt, -99, /\s+/g, "Text","");
 //Добавление в таблицу данные колонки ZpOt
AddToArray(ZpOt, "ZpOt");
//Коррекция для поля ZpOt
var ZpOt = Array.from(tableObj, x => x.ZpOt).reverse();
ZpOt = RunRule("Текст", ZpOt, 0, /^\d+/g, "Нет","");
 //Добавление в таблицу данные колонки ZpOt
AddToArray(ZpOt, "ZpOt");
//Коррекция для поля ZpOt
var ZpOt = Array.from(tableObj, x => x.ZpOt).reverse();
ZpOt = RunRule("Текст", ZpOt, -99, /до.*/g, "Text","");
 //Добавление в таблицу данные колонки ZpOt
AddToArray(ZpOt, "ZpOt");
//Коррекция для поля ZpOt
var ZpOt = Array.from(tableObj, x => x.ZpOt).reverse();
ZpOt = RunRule("Регулярное выражение", ZpOt, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки ZpOt
AddToArray(ZpOt, "ZpOt");
//Чтение колонки ZpDo
var selectorBlockZpDo = '#js-search-result-container > div.list-vacancies__sections > section';
var selectorItemZpDo = 'div.list-vacancies__content > div.indent-small > div.list-vacancies__content-left.col-sm-9 > div > div.list-vacancies__salary';
var ZpDo = ReadData(data, selectorBlockZpDo, selectorItemZpDo, 'InnerText'); 
//Добавление в таблицу данные колонки ZpDo
AddToArray(ZpDo, "ZpDo");
//Коррекция для поля ZpDo
var ZpDo = Array.from(tableObj, x => x.ZpDo).reverse();
ZpDo = RunRule("Регулярное выражение", ZpDo, -99, /\s+/g, "Text","");
 //Добавление в таблицу данные колонки ZpDo
AddToArray(ZpDo, "ZpDo");
//Коррекция для поля ZpDo
var ZpDo = Array.from(tableObj, x => x.ZpDo).reverse();
ZpDo = RunRule("Текст", ZpDo, 1, /\d+/g, "Нет","");
 //Добавление в таблицу данные колонки ZpDo
AddToArray(ZpDo, "ZpDo");
//Коррекция для поля ZpDo
var ZpDo = Array.from(tableObj, x => x.ZpDo).reverse();
ZpDo = RunRule("Текст", ZpDo, -99, /от.*/g, "Text","");
 //Добавление в таблицу данные колонки ZpDo
AddToArray(ZpDo, "ZpDo");
//Коррекция для поля ZpDo
var ZpDo = Array.from(tableObj, x => x.ZpDo).reverse();
ZpDo = RunRule("Регулярное выражение", ZpDo, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки ZpDo
AddToArray(ZpDo, "ZpDo");
//Чтение колонки Discription
var selectorBlockDiscription = '#js-search-result-container > div.list-vacancies__sections > section';
var selectorItemDiscription = 'div.list-vacancies__content > div.list-vacancies__desc.indent-small';
var Discription = ReadData(data, selectorBlockDiscription, selectorItemDiscription, 'InnerText'); 
//Добавление в таблицу данные колонки Discription
AddToArray(Discription, "Discription");
//Чтение колонки Adress
var selectorBlockAdress = '#js-search-result-container > div.list-vacancies__sections > section';
var selectorItemAdress = 'div.list-vacancies__content > div:nth-child(4) > div.col-lg-7.col-md-6.list-vacancies__loc-inner > div > div > div > div.metro-station__title';
var Adress = ReadData(data, selectorBlockAdress, selectorItemAdress, 'InnerText'); 
//Добавление в таблицу данные колонки Adress
AddToArray(Adress, "Adress");
//Чтение колонки DateCreate
var selectorBlockDateCreate = '#js-search-result-container > div.list-vacancies__sections > section';
var selectorItemDateCreate = 'div.list-vacancies__content > div.indent-small > div.list-vacancies__content-right.col-sm-3.hidden-xs > div';
var DateCreate = ReadData(data, selectorBlockDateCreate, selectorItemDateCreate, 'InnerText'); 
//Добавление в таблицу данные колонки DateCreate
AddToArray(DateCreate, "DateCreate");
//Коррекция для поля DateCreate
var DateCreate = Array.from(tableObj, x => x.DateCreate).reverse();
DateCreate = RunRule("Текст", DateCreate, -99, /Сегодня/g, "Переменная: Сегодня","15.06.2018");
 //Добавление в таблицу данные колонки DateCreate
AddToArray(DateCreate, "DateCreate");
//Чтение колонки Rabotodatel
var selectorBlockRabotodatel = '#js-search-result-container > div.list-vacancies__sections > section';
var selectorItemRabotodatel = 'div.list-vacancies__content > div.indent-small > div.list-vacancies__content-left.col-sm-9 > div > div.list-vacancies__company > a';
var Rabotodatel = ReadData(data, selectorBlockRabotodatel, selectorItemRabotodatel, 'InnerText'); 
//Добавление в таблицу данные колонки Rabotodatel
AddToArray(Rabotodatel, "Rabotodatel");
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
    action: "2",
    source: DOMtoString(document)
});
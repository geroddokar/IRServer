var errors = [];
var tableObj = [];
var scriptname = ["www.zarplata.ru - Краткие данные - моя1"];
var siteName = [];
function DOMtoString(data) {
    try {



        
//Колонки
{//Чтение колонки Vakansia
var selectorBlockVakansia = '#app > div > div.page-type-search > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div';
var selectorItemVakansia = 'div.ui.grid.vacancy-preview_2vHdM > div.ten.wide.column.info-column_REucJ > h2 > span > a > span';
var Vakansia = ReadData(data, selectorBlockVakansia, selectorItemVakansia, 'InnerText', 'Vakansia'); 
//Добавление в таблицу данные колонки Vakansia
AddToArray(Vakansia, "Vakansia");
//Чтение колонки Contacts
var selectorBlockContacts = '#app > div > div.page-type-search > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div';
var selectorItemContacts = 'div.ui.grid.vacancy-preview_2vHdM > div.two.wide.column.logotype_3o74j > a';
var Contacts = ReadData(data, selectorBlockContacts, selectorItemContacts, 'href', 'Contacts'); 
//Добавление в таблицу данные колонки Contacts
AddToArray(Contacts, "Contacts");
//Чтение колонки UrlString
var selectorBlockUrlString = '#app > div > div.page-type-search > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div';
var selectorItemUrlString = 'div.ui.grid.vacancy-preview_2vHdM > div.ten.wide.column.info-column_REucJ > h2 > span > a';
var UrlString = ReadData(data, selectorBlockUrlString, selectorItemUrlString, 'href', 'UrlString'); 
//Добавление в таблицу данные колонки UrlString
AddToArray(UrlString, "UrlString");
//Чтение колонки ZpOt
var selectorBlockZpOt = '#app > div > div.page-type-search > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div';
var selectorItemZpOt = 'div.ui.grid.vacancy-preview_2vHdM > div.four.wide.column.salary-column_2za0O > div > strong > span';
var ZpOt = ReadData(data, selectorBlockZpOt, selectorItemZpOt, 'InnerText', 'ZpOt'); 
//Добавление в таблицу данные колонки ZpOt
AddToArray(ZpOt, "ZpOt");
//Коррекция для поля ZpOt
var ZpOt = Array.from(tableObj, x => x.ZpOt).reverse();
ZpOt = RunRule("Регулярное выражение", ZpOt, -99, /\s+/g, "Text","");
 //Добавление в таблицу данные колонки ZpOt
AddToArray(ZpOt, "ZpOt");
//Коррекция для поля ZpOt
var ZpOt = Array.from(tableObj, x => x.ZpOt).reverse();
ZpOt = RunRule("Регулярное выражение", ZpOt, 0, /до.*/g, "Text","");
 //Добавление в таблицу данные колонки ZpOt
AddToArray(ZpOt, "ZpOt");
//Коррекция для поля ZpOt
var ZpOt = Array.from(tableObj, x => x.ZpOt).reverse();
ZpOt = RunRule("Регулярное выражение", ZpOt, 0, /\d+/g, "Нет","");
 //Добавление в таблицу данные колонки ZpOt
AddToArray(ZpOt, "ZpOt");
//Чтение колонки ZpDo
var selectorBlockZpDo = '#app > div > div.page-type-search > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div';
var selectorItemZpDo = 'div.ui.grid.vacancy-preview_2vHdM > div.four.wide.column.salary-column_2za0O > div > strong > span';
var ZpDo = ReadData(data, selectorBlockZpDo, selectorItemZpDo, 'InnerText', 'ZpDo'); 
//Добавление в таблицу данные колонки ZpDo
AddToArray(ZpDo, "ZpDo");
//Коррекция для поля ZpDo
var ZpDo = Array.from(tableObj, x => x.ZpDo).reverse();
ZpDo = RunRule("Регулярное выражение", ZpDo, -99, /\s+/g, "Text","");
 //Добавление в таблицу данные колонки ZpDo
AddToArray(ZpDo, "ZpDo");
//Коррекция для поля ZpDo
var ZpDo = Array.from(tableObj, x => x.ZpDo).reverse();
ZpDo = RunRule("Регулярное выражение", ZpDo, 0, /от.*/g, "Text","");
 //Добавление в таблицу данные колонки ZpDo
AddToArray(ZpDo, "ZpDo");
//Коррекция для поля ZpDo
var ZpDo = Array.from(tableObj, x => x.ZpDo).reverse();
ZpDo = RunRule("Регулярное выражение", ZpDo, 0, /\d+\—/g, "Text","");
 //Добавление в таблицу данные колонки ZpDo
AddToArray(ZpDo, "ZpDo");
//Коррекция для поля ZpDo
var ZpDo = Array.from(tableObj, x => x.ZpDo).reverse();
ZpDo = RunRule("Регулярное выражение", ZpDo, 0, /\d+/g, "Нет","");
 //Добавление в таблицу данные колонки ZpDo
AddToArray(ZpDo, "ZpDo");
//Чтение колонки Rabotodatel
var selectorBlockRabotodatel = '#app > div > div.page-type-search > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div';
var selectorItemRabotodatel = 'div.ui.grid.vacancy-preview_2vHdM > div.ten.wide.column.info-column_REucJ > span:nth-child(2) > span > span > a';
var Rabotodatel = ReadData(data, selectorBlockRabotodatel, selectorItemRabotodatel, 'InnerText', 'Rabotodatel'); 
//Добавление в таблицу данные колонки Rabotodatel
AddToArray(Rabotodatel, "Rabotodatel");
//Чтение колонки DateCreate
var selectorBlockDateCreate = '#app > div > div.page-type-search > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div';
var selectorItemDateCreate = 'div.ui.grid.vacancy-preview_2vHdM > div.ten.wide.column.info-column_REucJ > span.address_3lqMr.closed_1eD1X > div > span > span:nth-child(2)';
var DateCreate = ReadData(data, selectorBlockDateCreate, selectorItemDateCreate, 'InnerText', 'DateCreate'); 
//Добавление в таблицу данные колонки DateCreate
AddToArray(DateCreate, "DateCreate");
//Коррекция для поля DateCreate
var DateCreate = Array.from(tableObj, x => x.DateCreate).reverse();
DateCreate = RunRule("Регулярное выражение", DateCreate, -0, /сегодня.*/g, "Нет","22.06.2018");
 //Добавление в таблицу данные колонки DateCreate
AddToArray(DateCreate, "DateCreate");
//Коррекция для поля DateCreate
var DateCreate = Array.from(tableObj, x => x.DateCreate).reverse();
DateCreate = RunRule("Регулярное выражение", DateCreate, 0, /в.*/g, "Text","");
 //Добавление в таблицу данные колонки DateCreate
AddToArray(DateCreate, "DateCreate");
//Чтение колонки TipZanyatosri
var selectorBlockTipZanyatosri = '#app > div > div.page-type-search > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div';
var selectorItemTipZanyatosri = 'div.ui.grid.vacancy-preview_2vHdM > div.four.wide.column.salary-column_2za0O > div > div > div:nth-child(1)';
var TipZanyatosri = ReadData(data, selectorBlockTipZanyatosri, selectorItemTipZanyatosri, 'InnerText', 'TipZanyatosri'); 
//Добавление в таблицу данные колонки TipZanyatosri
AddToArray(TipZanyatosri, "TipZanyatosri");
//Чтение колонки Usloviya
var selectorBlockUsloviya = '#app > div > div.page-type-search > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div';
var selectorItemUsloviya = 'div.ui.grid.vacancy-preview_2vHdM > div.four.wide.column.salary-column_2za0O > div > div > div:nth-child(2)';
var Usloviya = ReadData(data, selectorBlockUsloviya, selectorItemUsloviya, 'InnerText', 'Usloviya'); 
//Добавление в таблицу данные колонки Usloviya
AddToArray(Usloviya, "Usloviya");
//Чтение колонки Gorod
var selectorBlockGorod = '#app > div > div.page-type-search > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div';
var selectorItemGorod = 'div.ui.grid.vacancy-preview_2vHdM > div.ten.wide.column.info-column_REucJ > span.address_3lqMr.closed_1eD1X > div > span > span:nth-child(3)';
var Gorod = ReadData(data, selectorBlockGorod, selectorItemGorod, 'InnerText', 'Gorod'); 
//Добавление в таблицу данные колонки Gorod
AddToArray(Gorod, "Gorod");
//Коррекция для поля Gorod
var Gorod = Array.from(tableObj, x => x.Gorod).reverse();
Gorod = RunRule("Регулярное выражение", Gorod, -99, /\,.*/g, "Нет","");
 //Добавление в таблицу данные колонки Gorod
AddToArray(Gorod, "Gorod");
//Чтение колонки Adress
var selectorBlockAdress = '#app > div > div.page-type-search > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div';
var selectorItemAdress = 'div.ui.grid.vacancy-preview_2vHdM > div.ten.wide.column.info-column_REucJ > span.address_3lqMr.closed_1eD1X > div > span > span:nth-child(3)';
var Adress = ReadData(data, selectorBlockAdress, selectorItemAdress, 'InnerText', 'Adress'); 
//Добавление в таблицу данные колонки Adress
AddToArray(Adress, "Adress");
//Коррекция для поля Adress
var Adress = Array.from(tableObj, x => x.Adress).reverse();
Adress = RunRule("Регулярное выражение", Adress, -99, /.*\,/g, "Нет","");
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
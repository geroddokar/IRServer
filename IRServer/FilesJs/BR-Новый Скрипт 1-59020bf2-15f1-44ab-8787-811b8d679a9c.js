var errors = [];
var tableObj = [];
var scriptname = ["auto.ru - Краткие данные - Новый Скрипт 1"];
var siteName = [];
function DOMtoString(data) {
    try {



        
//Колонки
{//Чтение колонки Marka
var selectorBlockMarka = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemMarka = 'div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnLeft > div.ListingItem-module__columnRowFlex > div.ListingItem-module__columnCellSummary > h3 > a';
var Marka = ReadData(data, selectorBlockMarka, selectorItemMarka, 'InnerText', 'Marka'); 
//Добавление в таблицу данные колонки Marka
AddToArray(Marka, "Marka");
//Чтение колонки Price
var selectorBlockPrice = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemPrice = 'div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnLeft > div.ListingItem-module__columnRowFlex > div.ListingItem-module__columnCellPrice > div.ListingItemPrice-module__container.ListingItem-module__price';
var Price = ReadData(data, selectorBlockPrice, selectorItemPrice, 'InnerText', 'Price'); 
//Добавление в таблицу данные колонки Price
AddToArray(Price, "Price");
//Коррекция для поля Price
var Price = Array.from(tableObj, x => x.Price).reverse();
Price = RunRule("Регулярное выражение", Price, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки Price
AddToArray(Price, "Price");
//Чтение колонки UrlString
var selectorBlockUrlString = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemUrlString = 'div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnLeft > div.ListingItem-module__columnRowFlex > div.ListingItem-module__columnCellSummary > h3 > a';
var UrlString = ReadData(data, selectorBlockUrlString, selectorItemUrlString, 'href', 'UrlString'); 
//Добавление в таблицу данные колонки UrlString
AddToArray(UrlString, "UrlString");
//Чтение колонки Photo
var selectorBlockPhoto = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemPhoto = 'div > div.ListingItem-module__thumb > div > a > div > div > div:nth-child(1) > div.Brazzers__image-wrapper > div > img';
var Photo = ReadData(data, selectorBlockPhoto, selectorItemPhoto, 'src', 'Photo'); 
//Добавление в таблицу данные колонки Photo
AddToArray(Photo, "Photo");
//Чтение колонки VIN
var selectorBlockVIN = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemVIN = 'div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnLeft > div.ListingItem-module__columnRowFlex > div.ListingItem-module__columnCellSummary > div.InfoPopup.InfoPopup_theme_plain.InfoPopup_withChildren';
var VIN = ReadData(data, selectorBlockVIN, selectorItemVIN, 'InnerText', 'VIN'); 
//Добавление в таблицу данные колонки VIN
AddToArray(VIN, "VIN");
//Коррекция для поля VIN
var VIN = Array.from(tableObj, x => x.VIN).reverse();
VIN = RunRule("Регулярное выражение", VIN, -99, /VIN/g, "Нет","");
 //Добавление в таблицу данные колонки VIN
AddToArray(VIN, "VIN");
//Чтение колонки Probeg
var selectorBlockProbeg = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemProbeg = ' div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnRight > div.ListingItem-module__columnRowFlex > div.ListingItem-module__columnCellKmAge';
var Probeg = ReadData(data, selectorBlockProbeg, selectorItemProbeg, 'InnerText', 'Probeg'); 
//Добавление в таблицу данные колонки Probeg
AddToArray(Probeg, "Probeg");
//Коррекция для поля Probeg
var Probeg = Array.from(tableObj, x => x.Probeg).reverse();
Probeg = RunRule("Регулярное выражение", Probeg, -99, /\D+/g, "Text","");
 //Добавление в таблицу данные колонки Probeg
AddToArray(Probeg, "Probeg");
//Чтение колонки Year
var selectorBlockYear = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemYear = 'div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnMiddle > div';
var Year = ReadData(data, selectorBlockYear, selectorItemYear, 'InnerText', 'Year'); 
//Добавление в таблицу данные колонки Year
AddToArray(Year, "Year");
//Чтение колонки DateCreate
var selectorBlockDateCreate = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemDateCreate = 'div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnLeft > div.ListingItem-module__columnRow > div > div > span > span.MetroListPlace__content';
var DateCreate = ReadData(data, selectorBlockDateCreate, selectorItemDateCreate, 'InnerText', 'DateCreate'); 
//Добавление в таблицу данные колонки DateCreate
AddToArray(DateCreate, "DateCreate");
//Коррекция для поля DateCreate
var DateCreate = Array.from(tableObj, x => x.DateCreate).reverse();
DateCreate = RunRule("Регулярное выражение", DateCreate, -99, /.*\d+\s+мин.*/g, "Переменная: Сегодня","17.07.2018");
 //Добавление в таблицу данные колонки DateCreate
AddToArray(DateCreate, "DateCreate");
//Коррекция для поля DateCreate
var DateCreate = Array.from(tableObj, x => x.DateCreate).reverse();
DateCreate = RunRule("Регулярное выражение", DateCreate, 0, /.*\d+\s+час.*/g, "Переменная: Сегодня","17.07.2018");
 //Добавление в таблицу данные колонки DateCreate
AddToArray(DateCreate, "DateCreate");
//Чтение колонки Adress
var selectorBlockAdress = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemAdress = 'div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnLeft > div.ListingItem-module__columnRow > div > div > span > span.MetroListPlace__place';
var Adress = ReadData(data, selectorBlockAdress, selectorItemAdress, 'InnerText', 'Adress'); 
//Добавление в таблицу данные колонки Adress
AddToArray(Adress, "Adress");
//Чтение колонки Contacts
var selectorBlockContacts = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemContacts = 'div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnRight > div.ListingItem-module__columnRowFlex > div.ListingItem-module__columnCellKmAge > a';
var Contacts = ReadData(data, selectorBlockContacts, selectorItemContacts, 'href', 'Contacts'); 
//Добавление в таблицу данные колонки Contacts
AddToArray(Contacts, "Contacts");
//Чтение колонки Obem
var selectorBlockObem = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemObem = 'div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnLeft > div.ListingItem-module__columnRowFlex > div.ListingItem-module__columnCellSummary > div.ListingItemTechSummary-module__container.ListingItem-module__techSummary > div:nth-child(1)';
var Obem = ReadData(data, selectorBlockObem, selectorItemObem, 'InnerText', 'Obem'); 
//Добавление в таблицу данные колонки Obem
AddToArray(Obem, "Obem");
//Коррекция для поля Obem
var Obem = Array.from(tableObj, x => x.Obem).reverse();
Obem = RunRule("Регулярное выражение", Obem, 0, /\d+(\.\d+)?/g, "Нет","");
 //Добавление в таблицу данные колонки Obem
AddToArray(Obem, "Obem");
//Чтение колонки Power
var selectorBlockPower = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemPower = 'div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnLeft > div.ListingItem-module__columnRowFlex > div.ListingItem-module__columnCellSummary > div.ListingItemTechSummary-module__container.ListingItem-module__techSummary > div:nth-child(1)';
var Power = ReadData(data, selectorBlockPower, selectorItemPower, 'InnerText', 'Power'); 
//Добавление в таблицу данные колонки Power
AddToArray(Power, "Power");
//Коррекция для поля Power
var Power = Array.from(tableObj, x => x.Power).reverse();
Power = RunRule("Регулярное выражение", Power, 0, /\d{2,3}/g, "Нет","");
 //Добавление в таблицу данные колонки Power
AddToArray(Power, "Power");
//Чтение колонки Privod
var selectorBlockPrivod = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemPrivod = 'div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnLeft > div.ListingItem-module__columnRowFlex > div.ListingItem-module__columnCellSummary > div.ListingItemTechSummary-module__container.ListingItem-module__techSummary > div:nth-child(2) > div:nth-child(1)';
var Privod = ReadData(data, selectorBlockPrivod, selectorItemPrivod, 'InnerText', 'Privod'); 
//Добавление в таблицу данные колонки Privod
AddToArray(Privod, "Privod");
//Чтение колонки Color
var selectorBlockColor = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemColor = 'div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnLeft > div.ListingItem-module__columnRowFlex > div.ListingItem-module__columnCellSummary > div.ListingItemTechSummary-module__container.ListingItem-module__techSummary > div:nth-child(2) > div:nth-child(2)';
var Color = ReadData(data, selectorBlockColor, selectorItemColor, 'InnerText', 'Color'); 
//Добавление в таблицу данные колонки Color
AddToArray(Color, "Color");
//Чтение колонки Dvigatel
var selectorBlockDvigatel = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemDvigatel = 'div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnLeft > div.ListingItem-module__columnRowFlex > div.ListingItem-module__columnCellSummary > div.ListingItemTechSummary-module__container.ListingItem-module__techSummary > div:nth-child(1)';
var Dvigatel = ReadData(data, selectorBlockDvigatel, selectorItemDvigatel, 'InnerText', 'Dvigatel'); 
//Добавление в таблицу данные колонки Dvigatel
AddToArray(Dvigatel, "Dvigatel");
//Коррекция для поля Dvigatel
var Dvigatel = Array.from(tableObj, x => x.Dvigatel).reverse();
Dvigatel = RunRule("Разделитель", Dvigatel, 2, /\//g, "Нет","");
 //Добавление в таблицу данные колонки Dvigatel
AddToArray(Dvigatel, "Dvigatel");

//Коррекция для поля Dvigatel
var Dvigatel = Array.from(tableObj, x => x.Dvigatel).reverse();
Dvigatel = RunRule("Регулярное выражение", Dvigatel, 0, /[А-Яа-я]+/g, "Нет","");
 //Добавление в таблицу данные колонки Dvigatel
AddToArray(Dvigatel, "Dvigatel");

//Чтение колонки KPP
var selectorBlockKPP = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemKPP = 'div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnLeft > div.ListingItem-module__columnRowFlex > div.ListingItem-module__columnCellSummary > div.ListingItemTechSummary-module__container.ListingItem-module__techSummary > div:nth-child(1)';
var KPP = ReadData(data, selectorBlockKPP, selectorItemKPP, 'InnerText', 'KPP'); 
//Добавление в таблицу данные колонки KPP
AddToArray(KPP, "KPP");
//Коррекция для поля KPP
var KPP = Array.from(tableObj, x => x.KPP).reverse();
KPP = RunRule("Разделитель", KPP, 2, /\//g, "Нет","");
 //Добавление в таблицу данные колонки KPP
AddToArray(KPP, "KPP");

//Коррекция для поля KPP
var KPP = Array.from(tableObj, x => x.KPP).reverse();
KPP = RunRule("Регулярное выражение", KPP, 1, /[А-Яа-я]+/g, "Нет","");
 //Добавление в таблицу данные колонки KPP
AddToArray(KPP, "KPP");


//Чтение колонки Kuzov
var selectorBlockKuzov = '#listing-filters > div.ListingCars-module__container.ListingCars-module__list > div';
var selectorItemKuzov = 'div > div.ListingItem-module__description > div.ListingItem-module__column.ListingItem-module__columnLeft > div.ListingItem-module__columnRowFlex > div.ListingItem-module__columnCellSummary > div.ListingItemTechSummary-module__container.ListingItem-module__techSummary > div:nth-child(1)';
var Kuzov = ReadData(data, selectorBlockKuzov, selectorItemKuzov, 'InnerText', 'Kuzov'); 
//Добавление в таблицу данные колонки Kuzov
AddToArray(Kuzov, "Kuzov");
//Коррекция для поля Kuzov
var Kuzov = Array.from(tableObj, x => x.Kuzov).reverse();
Kuzov = RunRule("Разделитель", Kuzov, 2, /\//g, "Нет","");
 //Добавление в таблицу данные колонки Kuzov
AddToArray(Kuzov, "Kuzov");

//Коррекция для поля Kuzov
var Kuzov = Array.from(tableObj, x => x.Kuzov).reverse();
Kuzov = RunRule("Разделитель", Kuzov, 3, /\s+/g, "Нет","");
 //Добавление в таблицу данные колонки Kuzov
AddToArray(Kuzov, "Kuzov");

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
    action: "1",
    source: DOMtoString(document)
});
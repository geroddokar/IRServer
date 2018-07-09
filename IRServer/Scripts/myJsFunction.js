function ToJavaScriptDate(value) {
    if (value == null)
        return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(value);
    var date = new Date(parseFloat(results[1]));
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    var formattedDate = year + '.' + month + '.' + day;
    return formattedDate;
}

function DeleteRows(id) {
    var url = "/ResultTable/DeleteResult/" + id.toString();
    $.ajax({
        url: url,
        type: 'DELETE',
        dataType: 'application/json; charset=utf-8',
        success: function (data, textStatus, xhr) {
            console.log(data);
            document.location.reload();
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
        }
    });

}
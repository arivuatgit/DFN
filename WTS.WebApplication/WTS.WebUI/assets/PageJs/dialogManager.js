function showConfirmDialog(confirmationMessage, okHandler) {
    $("#divConfirmDialog").mmsDialog({
        //autoOpen: false,
        maxWidth: 'auto',
        width: 400,
        height: 'auto',
        resizable: false,
        //title: 'Confirmation Message',
        title: 'Confirmation',
        modal: true
    });
    $("#lblConfirmMessage").html(confirmationMessage);
    $("#divConfirmDialog").mmsDialog(
    {
        buttons: [
            {
                text: 'Yes',
                click: function () {
                    $(this).mmsDialog("close");
                    okHandler();
                }
            },
            {
                text: 'Cancel',
                click: function () {
                    //cancelHandler();
                    $(this).mmsDialog("close");
                }
            }
        ]

    });
    $("#divConfirmDialog").css("display", "");
}

//function showConfirmDialog(confirmationMessage, okHandler) {
//    $('#titleConfirmDialog').html(langKeys[currentLanguage]['msgDlgTitleConf']);
//    $('#lblConfirmMessage').html(confirmationMessage);
//    $('#yesBtnConfirmDialog').html(langKeys[currentLanguage]['msgBtnYes']);
//    $('#noBtnConfirmDialog').html(langKeys[currentLanguage]['msgBtnNo']);
//    $("#divConfirmDialog").css("height", 'auto');
//    $("#divConfirmDialog").css("width", '400px');
//    $("#divConfirmDialog").css("max-width", 'auto');
//    $("#divConfirmDialog").css("position", 'absolute');
//    $("#divConfirmDialog").css("top", ($(window).height() - $('#divConfirmDialog').height()) / 2);
//    $("#divConfirmDialog").css("left", ($(window).width() - $('#divConfirmDialog').width()) / 2);
//    $("#divConfirmDialog").css("display", "");
//    $("#divConfirmDialog").draggable();

//    $('#yesBtnConfirmDialog').on('click', function () {
//        okHandler();
//        $("#divConfirmDialog").css("display", "none");

//        $('#yesBtnConfirmDialog').off('click');
//        $('#noBtnConfirmDialog').off('click');
//    });
//    $('#noBtnConfirmDialog').click(function () {
//        $("#divConfirmDialog").css("display", "none");

//        $('#yesBtnConfirmDialog').off('click');
//        $('#noBtnConfirmDialog').off('click');
//    });
//}


function showConfirmationDialog(confirmationMessage, param, okHandler) {

    $("#divConfirmDialog").mmsDialog({
        //autoOpen: false,
        maxWidth: 'auto',
        width: 400,
        height: 'auto',
        resizable: false,
        //title: 'Confirmation Message',
        title: 'Confirmation',
        modal: true
    });
    $("#lblConfirmMessage").html(confirmationMessage);
    $("#divConfirmDialog").mmsDialog(
    {
        buttons: [
            {
                text: 'Yes',
                click: function () {
                    $(this).mmsDialog("close");
                    okHandler(param);
                }
            },
            {
                text: 'No',
                click: function () {
                    //cancelHandler();
                    $(this).mmsDialog("close");
                }
            }
        ]
    });
    //$("#divConfirmDialog").css("display", "");
}

//function showConfirmationDialog(confirmationMessage, param, okHandler) {
//    $('#titleConfirmDialog').html(langKeys[currentLanguage]['msgDlgTitleConf']);
//    $('#lblConfirmMessage').html(confirmationMessage);
//    $('#yesBtnConfirmDialog').html(langKeys[currentLanguage]['msgBtnYes']);
//    $('#noBtnConfirmDialog').html(langKeys[currentLanguage]['msgBtnNo']);
//    $("#divConfirmDialog").css("height", 'auto');
//    $("#divConfirmDialog").css("width", '400px');
//    $("#divConfirmDialog").css("max-width", 'auto');
//    $("#divConfirmDialog").css("position", 'absolute');
//    $("#divConfirmDialog").css("top", ($(window).height() - $('#divConfirmDialog').height()) / 2);
//    $("#divConfirmDialog").css("left", ($(window).width() - $('#divConfirmDialog').width()) / 2);
//    $("#divConfirmDialog").css("display", "");
//    $("#divConfirmDialog").draggable();

//    $('#yesBtnConfirmDialog').on('click', function () {
//        okHandler(param);
//        $("#divConfirmDialog").css("display", "none");

//        $('#yesBtnConfirmDialog').off('click');
//        $('#noBtnConfirmDialog').off('click');
//    });
//    $('#noBtnConfirmDialog').on('click', function () {
//        $("#divConfirmDialog").css("display", "none");
        
//        $('#yesBtnConfirmDialog').off('click');
//        $('#noBtnConfirmDialog').off('click');
//    });
//}


function showSuccessDialog(successMessage) {

    $("#divSuccessDialog").mmsDialog({
        //autoOpen: false,
        maxWidth: 'auto',
        width: 400,
        height: 'auto',
        resizable: false,
        title: 'Success Message',
        modal: true
    });
    $("#lblSuccessMessage").html(successMessage);
    $("#divSuccessDialog").mmsDialog(
    {
        buttons: [{
            text: langKeys[currentLanguage]['msgBtnOK'],
            click: function () {
                $(this).mmsDialog("close");
            }
        }]
    });
    $("#divSuccessDialog").css("display", "");
}

//function showSuccessDialog(successMessage) {

//    $("#titleSuccessDialog").html(langKeys[currentLanguage]['msgDlgTitleSuccess']);
//    $("#lblSuccessMessage").html(successMessage);
//    $("#okBtnSuccessDialog").html(langKeys[currentLanguage]['msgBtnOK']);

//    $("#okBtnSuccessDialog").on('click', function () {
//        $("#divSuccessDialog").hide();
//        $(this).off('click');
//    });
//    $("#divSuccessDialog").css("width", "30%");
//    $("#divSuccessDialog").css("top", ($(window).height() - $('#divSuccessDialog').height()) / 2);
//    $("#divSuccessDialog").css("left", ($(window).width() - $('#divSuccessDialog').width()) / 2);
//    $("#divSuccessDialog").draggable();

//    $("#divSuccessDialog").css("display", "");
//}


function showInformationDialog(InfoMessage) {

    $("#divInformationDialog").mmsDialog({
        //autoOpen: false,
        maxWidth: 'auto',
        width: 400,
        height: 'auto',
        resizable: false,
        title: langKeys[currentLanguage]['msgDlgTitleInfo'],
        modal: true
    });
    $("#lblInformationMessage").html(InfoMessage);
    $("#divInformationDialog").mmsDialog(
    {
        buttons: [{
            text: langKeys[currentLanguage]['msgBtnOK'],
            click: function () {
                $(this).mmsDialog("close");
                $("#lblInformationMessage").html('');
            }
        }]
    });
    $("#divInformationDialog").css("display", "");
}

//function showInformationDialog(InfoMessage) {
//    $('#titleInformationDialog').html(langKeys[currentLanguage]['msgDlgTitleInfo']);
//    $('#lblInformationMessage').html(InfoMessage);
//    $('#okBtnInformationDialog').html(langKeys[currentLanguage]['msgBtnOK']);
//    $("#divInformationDialog").css("height", 'auto');
//    $("#divInformationDialog").css("width", '400px');
//    $("#divInformationDialog").css("max-width", 'auto');
//    $("#divConfirmDialog").css("position", 'absolute');
//    $("#divInformationDialog").css("top", ($(window).height() - $('#divInformationDialog').height()) / 2);
//    $("#divInformationDialog").css("left", ($(window).width() - $('#divInformationDialog').width()) / 2);
//    $("#divInformationDialog").css("display", "");
//    $("#divInformationDialog").draggable();
//    $('#okBtnInformationDialog').on('click', function () {
//        $("#divInformationDialog").css("display", "none");
//        $(this).off('click');
//    });
//}

function showInfoDialog(InfoTitle, InfoMessage) {
    $("#divInformationDialog").mmsDialog({
        //autoOpen: false,
        maxWidth: 'auto',
        width: 500,
        height: 300,
        resizable: true,
        title: InfoTitle,
        modal: true
    });
    $("#lblInformationMessage").html(InfoMessage);
    $("#divInformationDialog").mmsDialog(
    {
        buttons: [{
            text: langKeys[currentLanguage]['msgBtnOK'],
            click: function () {
                $(this).mmsDialog("close");
                $("#lblInformationMessage").html('');
            }
        }]
    });
}

//function showInfoDialog(InfoTitle, InfoMessage) {
//    $('#titleInformationDialog').html(InfoTitle);
//    $('#lblInformationMessage').html(InfoMessage);
//    $('#okBtnInformationDialog').html(langKeys[currentLanguage]['msgBtnOK']);
//    $("#divInformationDialog").css("height", 'auto');
//    $("#divInformationDialog").css("width", '500px');
//    $("#divInformationDialog").css("max-width", 'auto');
//    $("#divConfirmDialog").css("position", 'absolute');
//    $("#divInformationDialog").css("top", ($(window).height() - $('#divInformationDialog').height()) / 2);
//    $("#divInformationDialog").css("left", ($(window).width() - $('#divInformationDialog').width()) / 2);
//    $("#divInformationDialog").css("display", "");
//    $("#divInformationDialog").draggable();
//    $('#okBtnInformationDialog').on('click', function () {
//        $("#divInformationDialog").css("display", "none");
//        $(this).off('click');
//    });
//}

function showPlaylistFileViewerDialog(PlaylistFileViewerTitle, PlaylistFileViewerData) {
    $("#divInformationDialog").mmsDialog({
        //autoOpen: false,
        maxWidth: 'auto',
        width: 'auto',
        height: 'auto',
        resizable: true,
        title: PlaylistFileViewerTitle,
        modal: true,
        close: function () {
            $("#lblInformationMessage").html('');
        }
    });
    $("#lblInformationMessage").html(PlaylistFileViewerData);
    $("#divInformationDialog").mmsDialog(
    {
        buttons: [{
            text: langKeys[currentLanguage]['msgBtnOK'],
            click: function () {
                $(this).mmsDialog("close");
                $("#lblInformationMessage").html('');
            }
        }]
    });
}

function showErrorDialog(errorMessage) {
    $("#divErrorDialog").mmsDialog({
        //autoOpen: false,
        maxWidth: 'auto',
        width: 400,
        maxWidth: '90%',
        height: 'auto',
        resizable: false,
        title: langKeys[currentLanguage]['msgDlgTitleError'],
        modal: true,
        close: function () {
            $("#lblErrorMessage").html('');
        }
    });
    $("#lblErrorMessage").html(errorMessage);
    $("#divErrorDialog").mmsDialog(
    {
        buttons: [{
            text: langKeys[currentLanguage]['msgBtnOK'],
            click: function () {
                $(this).mmsDialog("close");
                $("#lblErrorMessage").html('');
            }
        }]
    });
    
    $("#divErrorDialog").css("display", "");
}

/*
function showErrorDialog(errorMessage) {
    //$("#divErrorDialog").html("");

    var temp = '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                    '<div class="widget widget-blue">' +
                        '<div class="widget-title">' +
                            '<div class="widget-controls">' +
                                '<a href="#" class="widget-control widget-control-full-screen" data-toggle="tooltip" data-placement="top" title="" data-original-title="Full Screen"><i class="fa fa-expand"></i></a>' +
                                '<a href="#" class="widget-control widget-control-full-screen widget-control-show-when-full" data-toggle="tooltip" data-placement="left" title="" data-original-title="Exit Full Screen"><i class="fa fa-expand"></i></a>' +
                                '<a href="#" data-toggle="dropdown" class="widget-control widget-control-settings"><i class="fa fa-cog"></i></a>' +
                                '<a href="#" class="widget-control widget-control-refresh" data-toggle="tooltip" data-placement="top" title="" data-original-title="Refresh"><i class="fa fa-refresh"></i></a>' +
                                '<a href="#" class="widget-control widget-control-minimize" data-toggle="tooltip" data-placement="top" title="" data-original-title="Minimize"><i class="fa fa-minus-circle"></i></a>' +
                            '</div>' +
                            '<h3 id="titleErrorMessage">' + langKeys[currentLanguage]['msgDlgTitleError'] + '</h3>' +
                        '</div>' +
                        '<div class="widget-content">' +
                            '<div class="modal-body">' +
                                '<span style="color: #000;">' +
                                    '<label id="lblErrorMessage">' + errorMessage + '</label>' +
                                '</span>' +
                                '<div style="align-items: right;">' +
                                        '<button type="button" class="btn btn-primary" onclick="$(\'#divErrorDialog\').css(\'display\',\'none\');">' + langKeys[currentLanguage]['msgBtnOK'] + '</button>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';

    console.log(temp);
    console.log($(temp));

    $('#titleErrorMessage').html(langKeys[currentLanguage]['msgDlgTitleError']);
    $('#lblErrorMessage').html(errorMessage);
    $('#okBtnErrorMessage').html(langKeys[currentLanguage]['msgBtnOK']);
    $("#divErrorDialog").css("padding-top", ($(window).height() - 2 * $('#divErrorDialog').height())/2 );

    //$("#divErrorDialog").html($(temp));
    $("#divErrorDialog").css("display", "");
}
*/

//function showErrorDialog(errorMessage) {
//    $('#titleErrorDialog').html(langKeys[currentLanguage]['msgDlgTitleError']);
//    $('#lblErrorMessage').html(errorMessage);
//    $('#okBtnErrorDialog').html(langKeys[currentLanguage]['msgBtnOK']);
//    $("#divErrorDialog").css("height", 'auto');
//    //$("#divErrorDialog").css("width", 'auto');
//    $("#divErrorDialog").css({ "width": 'auto', "min-width": '350px' });
//    $("#divErrorDialog").css("max-width", ($(window).width() * 2) / 3);

//    $("#divErrorDialog").css("padding-top", ($(window).height() - $('#divErrorDialog').height()) / 2);
//    $("#divErrorDialog").css("padding-left", ($(window).width() - $('#divErrorDialog').width()) / 2);
//    $("#divErrorDialog").css("display", "");
//    $("#divErrorDialog").draggable();
//    $('#okBtnErrorDialog').on('click', function () {
//        $("#divErrorDialog").css("display", "none");
//        $(this).off('click');
//    });
//}


function showExceptionDialog(errorMessage) {
    $("#divErrorDialog").mmsDialog({
        //autoOpen: false,
        //maxWidth: 'auto',
       // width: 500,
       // height: 500,
        width: 'auto',
        height: 'auto',
        resizable: false,
        title: langKeys[currentLanguage]['msgDlgTitleError'],    //'Error Message',
        modal: true,
        close: function () {
            $("#lblErrorMessage").html('');
        }
    });
    $("#lblErrorMessage").html(errorMessage);
    $("#divErrorDialog").mmsDialog(
    {
        buttons: [{
            text: langKeys[currentLanguage]['msgBtnOK'],
            click: function () {
                $(this).mmsDialog("close");
                $("#lblErrorMessage").html('');
            }
        }]
    });
    $("#divErrorDialog").css("display", "");
}


//function showExceptionDialog(errorMessage) {
//    $('#titleErrorDialog').html(langKeys[currentLanguage]['msgDlgTitleError']);
//    $('#lblErrorMessage').html(errorMessage);
//    $('#okBtnErrorDialog').html(langKeys[currentLanguage]['msgBtnOK']);
//    $("#divErrorDialog").css("height", 'auto');
//    //$("#divErrorDialog").css("max-height", $(window).height() - 200);
//    $("#spanErrorDialog").css("max-height", $(window).height() - 300);
//    $("#spanErrorDialog").css("overflow-y", 'auto');

//    $("#divErrorDialog").css("width", 'auto');
//    $("#divErrorDialog").css("max-width", ($(window).width() * 2) / 3);
//    $("#divErrorDialog").css("position", 'absolute');
//    $("#divErrorDialog").css("top", ($(window).height() - $('#divErrorDialog').height()) / 2);
//    $("#divErrorDialog").css("left", ($(window).width() - $('#divErrorDialog').width()) / 2);
//    $("#divErrorDialog").css("display", "");
//    $("#divErrorDialog").draggable();
//    $('#okBtnErrorDialog').on('click', function () {
//        $("#divErrorDialog").css("display", "none");
//        $(this).off('click');
//    });
//}

function showCustomInfoDialog(InfoTitle, InfoMessage) {
    $("#divInformationDialog").mmsDialog({
        maxWidth: 'auto',
        width: 400,
        height: 'auto',
        resizable: false,
        title: InfoTitle,
        modal: true
    });
    $("#lblInformationMessage").html(InfoMessage);
    $("#divInformationDialog").mmsDialog(
    {
        buttons: [{
            text: langKeys[currentLanguage]['msgBtnOK'],
            click: function () {
                $(this).mmsDialog("close");
                $("#lblInformationMessage").html('');
            }
        }]
    });
}

//function showCustomInfoDialog(InfoTitle, InfoMessage) {
//    $('#titleInformationDialog').html(InfoTitle);
//    $('#lblInformationMessage').html(InfoMessage);
//    $('#okBtnInformationDialog').html(langKeys[currentLanguage]['msgBtnOK']);
//    $("#divInformationDialog").css("height", 'auto');
//    $("#divInformationDialog").css("width", '400');
//    $("#divInformationDialog").css("top", ($(window).height() - $('#divInformationDialog').height()) / 2);
//    $("#divInformationDialog").css("left", ($(window).width() - $('#divInformationDialog').width()) / 2);
//    $("#divInformationDialog").css("display", "");
//    $("#divInformationDialog").draggable();
//    $('#okBtnInformationDialog').on('click', function () {
//        $("#divInformationDialog").css("display", "none");
//        $(this).off('click');
//    });
//}

function showCustomInfoDialog_text(InfoTitle, InfoMessage) {
    //var url = URL.createObjectURL(new Blob([InfoMessage], {type:"text/plain"}));
   
    //var stringMessage = GetFancyConversationFormat(InfoMessage);
    //console.log(InfoMessage);

    var doc = new jsPDF();

    var InfoMessageForFile = "<hr>" + InfoMessage.replace(/\r\n/g, "<hr/>");

    //Removing Extra Carriage Return or NextLine if exist
    InfoMessageForFile = InfoMessageForFile.replace(/\r/g, "");
    InfoMessageForFile = InfoMessageForFile.replace(/\n/g, "");

    //doc.setFontSize(10);
    //doc.text(10, 10, stringMessage);
    //var blob = doc.output('blob');

    doc.setFontSize(10);
    doc.fromHTML(InfoMessageForFile, 10, 10, { 'width': 180 });
    var blob = doc.output('blob');

    //PDF FileName
    var contentToSearchForPDFName = "<b>Time</b> : ";
    var indexOfContentToSearchForPDFName = InfoMessage.indexOf(contentToSearchForPDFName) + contentToSearchForPDFName.length;
    var pdfFileName = ConvertDateTimeToStartTime(InfoMessage.substring(indexOfContentToSearchForPDFName, indexOfContentToSearchForPDFName + 10) + " " + InfoMessage.substring(indexOfContentToSearchForPDFName + 11, indexOfContentToSearchForPDFName + 19));

    //var url = URL.createObjectURL(new Blob([doc], { type: "application/pdf" }));
    var url = URL.createObjectURL(new Blob([blob], { type: "application/pdf" }));

    $("#divInformationDialog").mmsDialog({
        maxWidth: 'auto',
        width: 600,
        height: 400,
        overflow:'auto',
        resizable: false,
        title: InfoTitle,
        modal: true
    });
    $('#lblInformationMessage').html(replaceAll("<a href=\"" + url + "\" download=\"SMS Conversation " + pdfFileName + ".pdf\" STYLE=\"position:absolute; right:30px;color:red;\">Download</a><br>" + InfoMessage, "\r\n", "<br>"));
    $("#divInformationDialog").mmsDialog(
    {
        buttons: [{
            text: "Close",
            click: function () {
                $(this).mmsDialog("close");
                $("#lblInformationMessage").html('');
            }
        }
        ]
    });
}

//function showCustomInfoDialog_text(InfoTitle, InfoMessage) {
//    //Creating PDF for Transcription
//    var doc = new jsPDF();
//    var InfoMessageForFile = "<hr>" + InfoMessage.replace(/\r\n/g, "<hr/>");

//    //Removing Extra Carriage Return or NextLine if exist
//    InfoMessageForFile = InfoMessageForFile.replace(/\r/g, "");
//    InfoMessageForFile = InfoMessageForFile.replace(/\n/g, "");

//    doc.setFontSize(10);
//    doc.fromHTML(InfoMessageForFile, 10, 10, {'width': 200});
//    var blob = doc.output('blob');

//    //PDF FileName
//    var contentToSearchForPDFName = "<b>Time</b> : ";
//    var indexOfContentToSearchForPDFName = InfoMessage.indexOf(contentToSearchForPDFName) + contentToSearchForPDFName.length;
//    var pdfFileName = ConvertDateTimeToStartTime(InfoMessage.substring(indexOfContentToSearchForPDFName, indexOfContentToSearchForPDFName + 10) + " " + InfoMessage.substring(indexOfContentToSearchForPDFName + 11, indexOfContentToSearchForPDFName + 19));

//    //var url = URL.createObjectURL(new Blob([InfoMessage], { type: "text/plain" }));
//    var url = URL.createObjectURL(new Blob([blob], { type: "application/pdf" }));

//    $('#titleInformationDialog').html(InfoTitle);
//    $('#lblInformationMessage').html(replaceAll("<a href=\"" + url + "\" download=\"SMS Conversation " + pdfFileName + ".pdf\" STYLE=\"position:absolute; right:30px;color:red;\">Download</a><br>" + InfoMessage, "\r\n", "<br>"));
//    $('#okBtnInformationDialog').html(langKeys[currentLanguage]['msgBtnOK']);
//    $("#divInformationDialog").css("height", 'auto');
//    //$("#divErrorDialog").css("max-height", $(window).height() - 200);
//    $("#spanErrorDialog").css("max-height", $(window).height() - 300);
//    $("#spanErrorDialog").css("overflow-y", 'auto');

//    $("#divInformationDialog").css("width", 'auto');
//    $("#divInformationDialog").css("max-width", ($(window).width() * 2) / 3);
//    $("#divInformationDialog").css("position", 'absolute');
//    $("#divInformationDialog").css("top", ($(window).height() - $('#divErrorDialog').height()) / 2);
//    $("#divInformationDialog").css("left", ($(window).width() - $('#divErrorDialog').width()) / 2);
//    $("#divInformationDialog").css("display", "");
//    $("#divInformationDialog").draggable();
//    $('#okBtnInformationDialog').on('click', function () {
//        $("#divInformationDialog").css("display", "none");
//        $(this).off('click');
//    });
//}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//#region User Activity
var logDuration = 3000;
function logUserActivity(userId, activityId, activityLog, msgKey, msgData, comments) {
    //console.log(userId, activityId);
    var activityData = {
        UserId: userId,
        ActivityId: activityId,
        ActivityPerformed: activityLog,
        MessageKey: msgKey,
        MessageData: msgData,
        Comments: comments
    };
    var jsonData = JSON.stringify(activityData);

    try {
        $.ajax({
            type: 'POST',
            url: umHandler1URL,
            data: { method: 'LogUserActivity', userId: userId, activityId: activityId, userActivity: jsonData },
            success: function (response) {
                $.unblockUI();
                switch (response.success) {
                    case true:
                        //$.growlUI(null, 'Activity logged successfully');
                        break;
                    default:
                        $.unblockUI();
                        showErrorDialog(response.message);
                        break;
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $.unblockUI();
                showExceptionDialog('Error occurred in during logUserActivity(): ' + jqXHR.responseText);
            }
        });
    }
    catch (e) {
        showErrorDialog('Caught Exception: ' + e.message);
    }
}

function logActivity(userId, activityId, msgData, comments) {
    //console.log(userId, activityId);
    var activityData = {
        UserId: userId,
        ActivityId: activityId,
        MessageData: msgData,
        Comments: comments
    };
    var jsonData = JSON.stringify(activityData);

    try {
        $.ajax({
            type: 'POST',
            url: umHandler1URL,
            data: { method: 'LogActivity', userActivity: jsonData },
            success: function (response) {
                $.unblockUI();
                switch (response.success) {
                    case true:
                        //$.growlUI(null, 'Activity logged successfully');
                        break;
                    default:
                        //showErrorDialog(response.message);
                        break;
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $.unblockUI();
                showExceptionDialog('Error occurred in during logActivity(): ' + jqXHR.responseText);
            }
        });
    }
    catch (e) {
        showErrorDialog('Caught Exception: ' + e.message);
    }
}

String.prototype.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};
String.formatData = function (stringToFormat, argsForFormat) {
    for (var i = 0; i < argsForFormat.length; i++) {
        var regex = new RegExp('\{(' + i + ')}', 'g');
        stringToFormat = stringToFormat.replace(regex, argsForFormat[i]);
    }
    return stringToFormat;
};

String.prototype.formatPlaceholders = function (placeholders) {
    var s = this;
    for (var propertyName in placeholders) {
        var re = new RegExp('{' + propertyName + '}', 'gm');
        s = s.replace(re, placeholders[propertyName]);
    }
    return s;
};
//#endregion User Activity

/*
function GetText911ConversationPDF(dataToConvertToPDF)
{
    var result;
    $.blockUI({ message: '<h1> ' + langKeys[currentLanguage]['Processing'] + ' </h1>' });
    $.ajax({
        type: 'POST',
        url: '/Handlers/VoiceRecHandlers/Text911FileHandler.ashx',
        data: { method: 'GetText911ConversationPDF', DataToConvertToPDF: dataToConvertToPDF }, //CallCustomField: JSON.stringify(jsonRecCallIds) },
        cache: false,
        success: function (response) {
            console.log('Text911PDF ' + response);
            switch (response.success) {
                case true:
                    $.unblockUI();
                    //$.growlUI(null, langKeys[currentLanguage]['sCfUpdate']);
                    /*
                    $.each(recCallIds, function (key, val) {
                        $("#tblCalls tbody tr[id='" + val.CallId + "'] td[abbr='" + columnClass + "']").find('div').html(newVal);
                    });
                    console.log(response.data);
                    result = response.data;
                    break;
                default:
                    $.unblockUI();
                    showErrorDialog(response.message);
                    /*
                    $.each(recCallIds, function (key, val) {
                        $("#tblCalls tbody tr[id='" + val.CallId + "'] td[abbr='" + columnClass + "']").find('div').html('');
                    });
                    break;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $.unblockUI();
            showExceptionDialog('An error has occurred getText911Conversation(): ' + jqXHR.responseText);
        },
        async: false
    });
    return result;
}
*/

function GetFancyConversationFormat(text) {
    
    var result = "";
    result += "Time: " + ConvertStartTimeToDateTime(text.StartTime) + "\r\n";

    for (var i = 0; i < text.Conversation.length; i++) {
        result += "Cell Phone: " + text.Conversation[i].PhoneNumber +"\r\n";
        result += ConvertStartTimeToTime(text.Conversation[i].DateTime) + " " + text.Conversation[i].Text + "\r\n";
    }
    return result;
}


//DateTime Conversion functions for Text911
function ConvertStartTimeToDateTime(StartTime)
{
    return StartTime.substring(0, 4) + "-" + StartTime.substring(4, 6) + "-" + StartTime.substring(6, 8) + " " + StartTime.substring(8, 10) + ":" + StartTime.substring(10, 12) + ":" + StartTime.substring(12, 14);
}

function ConvertStartTimeToTime(StartTime)
{
    return StartTime.substring(8, 10) + ":" + StartTime.substring(10, 12) + ":" + StartTime.substring(12, 14);
}

function ConvertDateTimeToStartTime(DateTime)
{
    let temp = DateTime.split(" ");
    let result = "";
    let date = temp[0];
    let time = temp[1];

    temp = date.split("-");
    result += temp[2] + temp[1] + temp[0];

    result += " ";

    temp = time.split(":");
    result += temp[0] + temp[1] + temp[2];

    return result;
}

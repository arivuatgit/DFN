$(function () {
    $('#divLoginDialog').mmsDialog({
        autoOpen: false,
        width: 400,
        height: 300,
        resizable: true,
        modal: true,
        title: "Login",

    });
   
    $('#divVideoPanel').mmsDialog({
        autoOpen: false,
        width: 800,
        height: 500,
        resizable: true,
        modal: true,
        
        title: "Play Video",
        beforeClose: function () {
            stopMedia();
        }
    });
    $('#divDiagnosis').mmsDialog({
        autoOpen: false,
        width: 400,
        height: 200,
        resizable: true,
        title:"Full Diagnosis",
    });
    $('#lnkLogin').click(function () {
         $('#divLoginDialog').mmsDialog('open');
       
    });
    $('#divNewUserForm').mmsDialog({
        autoOpen: false,
        width: 600,
        height: 'auto',
        resizable: true,
        title: 'Add New User',

    });
    $('#divEditUserForm').mmsDialog({
        autoOpen: false,
        width: 600,
        height: 'auto',
        resizable: true,
        title: 'Edit User',

    });
});
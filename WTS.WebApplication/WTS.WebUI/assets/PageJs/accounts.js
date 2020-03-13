var tableData;
var rowData = [];
var colData = [];
var totalRows;
var colChkBoxNew = '<input type="checkbox" />';
var imgEditDelete = '<img src="../assets/images/Accounts/imgEdit6.png" title="Edit" style="padding-left: 20px;cursor:pointer;" onclick="EditUserForm(this)" alt=""/>' + '<img src="../assets/images/Accounts/imgDelete2.jpg" title="Delete" style="padding-left: 20px;cursor:pointer;" onclick="DeleteUser(this)" alt=""/>';
$(function () {

    $('#btnAddUser').click(function () {
        addNewUserForm();
    });
    $(document).on('click', '#btnSubmit', function () {

        var email = $('#txtEmail').val();
        var pass = $('#txtPassword').val();
        var name = $('#txtName').val();
        var mob = $('#txtMobileNumber').val();
        var IsValidEmail = ValidateEmail(email);
        var IsValidMob = allnumeric(mob);
        if(IsValidEmail && IsValidMob && name!=""&& pass!="")
            addNewUser();
    })
    $(document).on('click', '#btnSubmitEdit', function () {
        var email = $("#txtEmailEdit").val();
        var pass = $('#txtPasswordEdit').val();
        var name = $('#txtNameEdit').val();
        var mob = $('#txtMobNumberEdit').val();
        var IsValidEmail = ValidateEmail(email);
        var IsValidMob = allnumeric(mob);
        if (IsValidEmail && IsValidMob && name != "" && pass != "")
            addEditedUser();
    })
});

$(document).ready(function () {

    $('#menuListAccounts a').addClass('active');
    $('#menuListRecorded a').removeClass('active');
    $('#menuListLive a').removeClass('active');

    bindDataTable();
});

function bindDataTable() {
    console.log("Inside bindDataTable()");
    var method = 'PageLoadAcoounts';
    var qry = { Hospital: hospital };
    var hospital = userHospital;

    var data;
    var dataToSend = JSON.stringify(qry);


    tableData = $('#tblAccounts').DataTable({
        dom: 'Rlfrtip',
        ajax: {
            url: accountsHandlerUrl + '?method=' + method,
            dataType: 'json',
            type: 'POST',
            data: { Hospital: hospital },
            order: [[0, 'desc']],
            dataSrc: function (data) {

                for (let i = colData.length; i < data.rows.length; i++) {

                    colData.push([

                        data.rows[i].cell.colSNo,
                        data.rows[i].cell.colHospital,
                        data.rows[i].cell.colName,
                        data.rows[i].cell.colMobileNumber,
                        data.rows[i].cell.colEmail,
                          imgEditDelete,


                    ]);
                }
                rowData = data.rows;
                totalRows = data.rows.length;
                data = colData; //colData;
                return data;
            },
            complete: function () {

            },
            error: function () {

            }
        },
        createdRow: function (row, data, dataIndex) {
            console.log("Inside createdRow");
            $(row).attr('hospital', rowData[dataIndex].uHospital);
            $(row).attr('uName', rowData[dataIndex].uName);
            $(row).attr('uMobNumber', rowData[dataIndex].uMobileNumber);
            $(row).attr('uEmail', rowData[dataIndex].uEmail);
            $(row).attr('uPassWord', rowData[dataIndex].uPassWord);
            $(row).attr('uId', rowData[dataIndex].uId);

        }
    });
}
function addNewUserForm() {
    console.log("Inside addNewUser()");
    $('#divNewUserForm').mmsDialog('open');

}
function addNewUser() {
    var email = $('#txtEmail').val();
    var pass = $('#txtPassword').val();
    var name = $('#txtName').val();
    var mob = $('#txtMobileNumber').val();
    var method = 'AddNewUser';
   
    var jsonData = { Hospital: userHospital, Email: email, Password: pass, Name: name, MobNumber: mob };
    $.ajax({
        url: accountsHandlerUrl + '?method=' + method,
        dataType: 'json',
        type: 'POST',
        data: jsonData,
        success: function (data) {

            // var data = response.data;

            drawDataTable(data);
            alert('Record saved');
            $('#divNewUserForm').mmsDialog('close');
            // location.reload();


        },
        error: function () {

        }
    });

}
function EditUserForm(e) {
    console.log("Inside EditUser()");
    var $tr = $(e).closest('tr');
    var email = $($tr).attr('uEmail');
    var pass = $($tr).attr('uPassWord');
    var name = $($tr).attr('uName');
    var mobnum = $($tr).attr('uMobNumber');
    var uId = $($tr).attr('uId');
    $("#txtEmailEdit").val(email);
    $('#txtPasswordEdit').val(pass);
    $('#txtNameEdit').val(name);
    $('#txtMobNumberEdit').val(mobnum);
    $('#hdnUserId').val(uId);
    $('#divEditUserForm').mmsDialog('open');
}
function addEditedUser() {
    var email = $("#txtEmailEdit").val();
    var pass = $('#txtPasswordEdit').val();
    var name = $('#txtNameEdit').val();
    var mob = $('#txtMobNumberEdit').val();
    var uid = $('#hdnUserId').val();

    var method = "AddEditedUser";
    $.ajax({
        url: accountsHandlerUrl + '?method=' + method,
        dataType: 'json',
        type: 'POST',
        data: { UId: uid, Email: email, Password: pass, Name: name, MobNumber: mob, Hospital: userHospital },
        success: function (data) {

            drawDataTable(data);
            alert('Record edited and saved');
            $('#divEditUserForm').mmsDialog('close');
            // location.reload();
        },
        error: function () {

        }
    });

}

function DeleteUser(e) {
    console.log("Inside DeleteUser(e)");
    var $tr = $(e).closest('tr');
    var uid = $($tr).attr('uId');
    showConfirmationDialog("Are you sure to delete?", uid, DeleteUserRecord);

}
function DeleteUserRecord(uid) {
    var method = "DeleteUser";

    $.ajax({
        url: accountsHandlerUrl + '?method=' + method,
        dataType: 'json',
        type: 'POST',
        data: { UId: uid, Hospital: userHospital },
        success: function (data) {

            drawDataTable(data);
            alert('Record deleted');
            $('#divEditUserForm').mmsDialog('close');
            // location.reload();
        },
        error: function () {

        }
    });
}
function drawDataTable(data) {
    var colData = [];
    var lastRowIndex = colData.length + 1;
    for (i = 0; i < data.rows.length; i++) {

        colData.push([

                    data.rows[i].cell.colSNo,
                    data.rows[i].cell.colHospital,
                    data.rows[i].cell.colName,
                    data.rows[i].cell.colMobileNumber,
                    data.rows[i].cell.colEmail,
                      imgEditDelete,


        ]);
    }

    rowData = data.rows;

    data = colData; //colData;
    tableData.clear().draw();
    tableData.rows.add(data);
    tableData.draw();

}
function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
   
    return (false)
}
function allnumeric(inputtxt) {
    var numbers = /^[0-9]+$/;
    if (inputtxt.match(numbers)) {
      
        return true;
    }
    else {
       
        return false;
    }
}

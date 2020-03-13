var dataToBind = [];
var tblData = null;
var rowData = [];
var videoElement = document.getElementById("videoRecorded");
$(document).ready(function () {
    //  dataToBind = [['1', '[]', 'ChildTrust', '12345', 'Arivu', '23-12-2019', '19:18', 'Dr.Thiru', 'Sinus', '201912231918'], ['1', '[]', 'ChildTrust', '12345', 'Arivu', '23-12-2019', '19:18', 'Dr.Thiru', 'Sinus', '201912231918']];
     
    $('#menuListRecorded a').addClass('active');
    $('#menuListAccounts a').removeClass('active');
    $('#menuListLive a').removeClass('active');

    bindDataTable();
});
$(function () {
    $(document).on('dblclick', '#tblRecorded tr', function () {
        console.log("Inside tblRecorded row double click");
       
        $(this).find("input:checkbox").prop('checked', true);
      
        $(this).addClass('highlightRow');
                
       
        var fileName=$(this).attr('fileName');
       
        PlaybackVideo(fileName);

    }) ;
     
 
    $('#tblRecorded').on('click', 'input[type="checkbox"]', function () {
        console.log("Inside tblRecorded checkbox click");
        var $tr = (this).closest('tr');
        if( $($tr).hasClass('highlightRow'))
        {
          
            $($tr).removeClass('highlightRow');
        }
        else {
            $($tr).addClass('highlightRow');
        }
    });

    $(document).on('click', '.show-full-diagnosis', function () {
        var $tr=$(this).closest('tr');
        var fullDiagnosis = $($tr).attr('diagnosis');
        $('#divDiagnosis').text(fullDiagnosis);

        $('#divDiagnosis').mmsDialog('open','slow');
    });
    $(document).on('click', '#chkHeader', function () {
        if ($(this).prop('checked')==true) {
            $('#tblRecorded input[type="checkbox"]').each(function () {

                $(this).prop("checked", true);

            });
        }
        else {
            $('#tblRecorded input[type="checkbox"]').each(function () {

                $(this).prop("checked", false);

            });
        }
      
             
    });
});
function bindDataTable() {
    console.log("Inside bindDataTable()");
    var method = 'PageLoadSearchRecords';
    var qry = { Hospital: 'ChildTrust' };
    var data;
    var datatobind = [[]];

    //$.ajax({
    //    type: 'GET',
    //    url: baseUrl+'?method='+method,
    //    contentType: 'application/json; charset=utf-8',
    //  // data: { method: 'UpdateCustomFieldsByRecorders', CallCustomField: JSON.stringify(jsonRecCallIds) },
    //    data: {HospitalName:JSON.stringify(qry) },

    //    success: function (data) {



    //        debugger;
    //    },
    //    error: function () {

    //    }

    //});

    tblData = $('#tblRecorded').DataTable({
        dom:'Rlfrtip',
        ajax: {
            url: baseUrl + '?method=' + method,
            datType: 'json',
            type: 'POST',
            data: { Hospital: hospital },
        
            //dataSrc: function (data) {
            //    var colData = [];
            //    for (let i = colData.length; i < data.rows.length; i++) {
            //        colData.push(data.rows[i].cell[i].value);
            //    }
            //    rowData = data.rows;
            //    data = colData;
            //    return data;
            //},
          dataSrc: function (data) {
                var colData = [];
                for (let i = colData.length; i < data.rows.length; i++) {
                    var diagnosis = data.rows[i].cell.colDiagnosis;
                    var displayDiagnosis = manageDiagnosisText(diagnosis);
                    colData.push([
                        data.rows[i].cell.colChkBox,
                        data.rows[i].cell.colSNo,
                        data.rows[i].cell.colHospital,
                        data.rows[i].cell.ColPId,
                        data.rows[i].cell.colPName,
                        data.rows[i].cell.colODate,
                        data.rows[i].cell.colOTime,
                        data.rows[i].cell.colRDoctor,
                        displayDiagnosis, // data.rows[i].cell.colDiagnosis,
                       // data.rows[i].cell.colFilename
                    ]);
                }
            
               
                rowData = data.rows;
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
            $(row).attr('hospital', rowData[dataIndex].hospital);
            $(row).attr('pId', rowData[dataIndex].pid);
            $(row).attr('pName', rowData[dataIndex].pName);
            $(row).attr('oDate', rowData[dataIndex].oDate);
            $(row).attr('oTime', rowData[dataIndex].oTime);
            $(row).attr('rDoctor', rowData[dataIndex].rDoctor);
            $(row).attr('diagnosis', rowData[dataIndex].diagnosis);
            $(row).attr('fileName', rowData[dataIndex].filename);
           
        },
       
    });

    //$('#tblRecorded').DataTable({
    //    "scrolX": 100,
    //    "pagingType": "full_numbers",
    //    "dom": '<toolbar>frtip',
    //    "dataSrc": dataToBind,

    //    //"dataSrc": function (dataToBind) {
    //    //    for(var i=0,ien=dataToBind.length;i<ien;i++){
    //    //        dataToBind[i][0] = '<a href="/message/' + dataToBind[i][0] + '>View message</a>';
    //    //    }
    //    //    return dataToBind;
    //    //}

    //});
}
function manageDiagnosisText(diagnosis) {
    var textLength = diagnosis.length;
    var truncatedText;
    if (textLength > 20) {
        var html = '';
        truncatedText = diagnosis.substring(0, 20);
        html = truncatedText;
        html += '<a class="show-full-diagnosis";href="javascript:void();" style="padding-left:3px; cursor:pointer;"><img id="imgFullDiagnosis"; height="16" src="../assets/images/comments-16.png" alt=""/><a/>';
        return html;
    }
    else
        return diagnosis;
}


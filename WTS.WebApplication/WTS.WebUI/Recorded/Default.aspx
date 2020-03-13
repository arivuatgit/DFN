<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WTS.WebUI.Recorded.Recorded_Default" %>

<%@ Import Namespace="WTS.WebUI.Session" %>
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>+A² Infosystems</title>

    <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../assets/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../assets/css/jquery.bxslider.css" />
    <link rel="stylesheet" type="text/css" href="../assets/css/isotope.css" media="screen" />
    <link rel="stylesheet" href="../assets/css/animate.css" />
    <link rel="stylesheet" href="../assets/js/fancybox/jquery.fancybox.css" type="text/css" media="screen" />
    <link href="../assets/css/prettyPhoto.css" rel="stylesheet" />
    <link href="../assets/css/style.css" rel="stylesheet" />
    <link href="../assets/css/jQuery/jquery-ui-custom-mmsDialog.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="../assets/DataTables/css/jquery.dataTables.css" />

    <link rel="stylesheet" type="text/css" href="../assets/css/recorded.css" />
    <style>
        .modal {
            text-align: center;
            padding: 0 !important;
        }

       .modal:before {
                content: '';                                                                               
                display: inline-block;
                height: 100%;  
                vertical-align: middle;
                margin-right: -4px;
        }   

        .modal-dialog {
            display: inline-block;
            text-align: left;
            vertical-align: middle;
        }
    </style>
    <script>
        var VideoUrl = "<%= ConfigurationManager.AppSettings["VideoUrl"].ToString() %>";
        var hospital = '<%=SessionHandler.Hospital%>';
        var IsAdmin = '<%= SessionHandler.AdminUser%>';
    </script>
</head>

<body style="background-color: #ddd;">
    <header>
        <nav class="navbar navbar-default navbar-static-top" role="navigation">
            <div class="navigation" style="">
                <div class="container" style="">
                    <div class="navbar-header" style="">
                        <div class="navbar-brand" style="text-align: center;">
                            <img src="../assets/images/logo-a2.png" style="margin-top: -10%;" alt="A² Infosystems" />
                        </div>
                    </div>
                    <div class="navbar-collapse collapse">
                        <div class="menu">
                            <ul class="nav nav-tabs" role="tablist">
                                <li role="presentation" id="menuListAccounts"><a href="../Accounts/Default.aspx">Accounts</a></li>
                                <li role="presentation" id="menuListRecorded"><a href="#">Recorded</a></li>
                                <li role="presentation" id="menuListLive"><a href="../Live/Default.aspx">Live</a></li>
                                <li role="link" id="menuLogOut"><a href="../Default.aspx">LogOut</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <div class="container">
        <table id="tblRecorded" class="display">
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" id="chkHeader" /></th>
                    <th>#</th>
                    <th>Hospital</th>
                    <th>Patient ID</th>
                    <th>Patient Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Ref: Doctor</th>
                    <th>Diagnosis</th>
                    <%-- <th>FileName</th>--%>
                </tr>
            </thead>

        </table>

    </div>
    <div id="divLoginDialog" style="display: none;">

        <div class="form-group">
            <label for="usr">Name:</label>
            <input type="text" class="form-control" id="usr">
        </div>
        <div id="divVideoPanel" style="display: none;">
            <video id="videoRecorded" controls oncontextmenu="return false;" controlsList="nodownload"></video>
        </div>
        <div id="divDiagnosis" style="display: none;">
        </div>
        <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd">
        </div>
    </div>

    <script src="../assets/js/jquery-2.1.1.min.js"></script>
    <script src="../assets/js/bootstrap.min.js"></script>
    <script src="../assets/js/wow.min.js"></script>
    <script src="../assets/js/fancybox/jquery.fancybox.pack.js"></script>
    <script src="../assets/js/jquery.easing.1.3.js"></script>
    <script src="../assets/js/jquery.bxslider.min.js"></script>
    <script src="../assets/js/jquery.prettyPhoto.js"></script>
    <script src="../assets/js/jquery.isotope.min.js"></script>
    <script src="../assets/js/functions.js"></script>
    <script src="../assets/PageJs/ModalPage.js"></script>
    <script src="../assets/PageJs/recorded.js"></script>
    <script src="../assets/js/jQuery/jquery-ui-custom-mmsDialog.js"></script>
    <script type="text/javascript" charset="utf8" src="../assets/DataTables/js/jquery.dataTables.js"></script>
    <script type="text/javascript" src="../assets/PageJs/VideoPlayer.js"></script>

    <script>
        var baseUrl = '<%= ResolveClientUrl("~/Handlers/SearchRecords/SearchRecordsHandler.ashx") %>';
        wow = new WOW({}).init();
        $(document).ready(function () {
            $('#tblRecorded').DataTable();
            if (IsAdmin == 'true')
                $('#menuListAccounts').css('display', 'block');
            else
                $('#menuListAccounts').css('display', 'none');

        });
    </script>

</body>

</html>

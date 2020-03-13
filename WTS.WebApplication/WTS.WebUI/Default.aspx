<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WTS.WebUI.Default" %>
<%@ Import Namespace="WTS.WebUI.Session" %>
<!DOCTYPE html>
<script runat="server">


</script>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>+A² Infosystems</title>


    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/jquery.bxslider.css">
    <link rel="stylesheet" type="text/css" href="assets/css/isotope.css" media="screen" />
    <link rel="stylesheet" href="assets/css/animate.css">
    <link rel="stylesheet" href="assets/js/fancybox/jquery.fancybox.css" type="text/css" media="screen" />
    <link href="assets/css/prettyPhoto.css" rel="stylesheet" />
    <link href="assets/css/style.css" rel="stylesheet" />
    <link href="assets/css/jQuery/jquery-ui-custom-mmsDialog.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="assets/DataTables/css/jquery.dataTables.css">


    <style>
        #btnSubmit:hover {
            color: #fff !important;
        }

        #btnSubmit:active {
            color: #fff !important;
        }
    </style>
    <script>
        var userName = '<%=SessionHandler.UserName %>';
        var hospital = '<%=SessionHandler.Hospital %>';
    </script>
</head>

<body style="background-color: #ddd;background: url(assets/images/logo-dfn-Rx.png);background-repeat:no-repeat;background-size:auto;">

    <form runat="server">
        <div style="margin-top: 5%; background: url(assets/images/logo-dfn-Rx.png);background-repeat:no-repeat;background-size:100%;">
           
        </div>
        <div>

            <div style="width: 51.5%; height: 50%; position: absolute; left: 25%; color: black;margin-top:5%;">
                <div style="width: 100%; height: 80%; position: relative; border: solid 1px #fff; border-radius: 25px; top: 12.5%; color: #404f62; font-weight: bold; background: #ececec;">
                    <div style="position: relative; text-align: center; font-weight: bold; font-size: 25px; color: #404f62; margin: 20px; height: 40px;  border-radius: 25px; vertical-align: middle;">

                        <span id="spnLogIn" runat="server">Log In</span>
                        <span id="spnInvalidUser" runat="server" style="color:red;display:none;font-size:14px;"></span>
                    </div>


                    <div style="margin: 20px; position: relative; left: 25%;">
                        <asp:Label runat="server" Style="padding: 20px;"> Email ID :  </asp:Label>
                        <asp:TextBox ID="txtUserName" Style="border-radius: 25px; margin-left: 25px;" placeholder="Enter User Name" runat="server" required="true"></asp:TextBox>

                    </div>
                    <div style="margin: 20px; padding: 20px; position: relative; left: 25%;">
                        <asp:Label runat="server" Style=""> Password :  </asp:Label>
                        <asp:TextBox ID="txtPassword" Style="border-radius: 25px; margin-left: 35px;" TextMode="Password" placeholder="Enter Password" required="true" runat="server"></asp:TextBox>
                        <a href="#" id="lnkForgotPassword" style="color: red; text-decoration: underline; cursor: pointer; margin-left: 10px;display:none;">Forgot Password ? </a>
                    </div>

                    <div style="position: relative; left: 60%; color: #fff;">
                        <asp:Button ID="btnSubmit" Style="border-radius: 25px; background: #404f62;" Text="Submit" OnClick="btnSubmit_Click" runat="server" CssClass="btn btn-primary;" />

                    </div>
                </div>
            </div>
        </div>

        <div id="divLoginDialog" style="display: none;">

            <div class="form-group">
                <label for="usr">Name:</label>
                <input type="text" class="form-control" id="usr">
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd">
            </div>
        </div>

    </form>
    <script src="assets/js/jquery-2.1.1.min.js"></script>

    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/wow.min.js"></script>
    <script src="assets/js/fancybox/jquery.fancybox.pack.js"></script>
    <script src="assets/js/jquery.easing.1.3.js"></script>
    <script src="assets/js/jquery.bxslider.min.js"></script>
    <script src="assets/js/jquery.prettyPhoto.js"></script>
    <script src="assets/js/jquery.isotope.min.js"></script>
    <script src="assets/js/functions.js"></script>
    <script src="assets/PageJs/ModalPage.js"></script>
    <script src="assets/js/jQuery/jquery-ui-custom-mmsDialog.js"></script>
    <script src="assets/PageJs/login.js"></script>
    <script>
        wow = new WOW({}).init();

    </script>
</body>


</html>

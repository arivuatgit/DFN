<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WTS.WebUI.Accounts.Default" %>
<%@ Import Namespace="WTS.WebUI.Session" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head runat="server">
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
    <link rel="stylesheet" type="text/css" href="../assets/css/accounts.css" />

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
        table {
    border-collapse: collapse;
   font-weight:bold;
}

td {
    padding-top: .5em;
    padding-bottom: .5em;
     padding-left: 1em;
}
.stlValidator{
    color:red;
}
    </style>
    <script>
       
        var accountsHandlerUrl = '<%=ResolveClientUrl("~/Handlers/Accounts/AccountsHandler.ashx") %>';
          var userName = '<%=SessionHandler.UserName %>';
        var userHospital = '<%=SessionHandler.Hospital %>';
        var IsAdmin = '<%= SessionHandler.AdminUser%>';
    </script>
</head>
<body style="background-color: #ddd;">
    <form id="form1" runat="server">
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

                                    <li role="presentation" id="menuListAccounts"><a href="#">Accounts</a></li>
                                    <li role="presentation" id="menuListRecorded"><a href="../Recorded/Default.aspx">Recorded</a></li>
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
            <div style="width:100%;">
               
                <button id="btnAddUser" type="button" class="btn btn-default" id="btnNewUser" style="float:right;margin-bottom:20px;font-weight:bold;font-size:12px !important">Add User</button>
            </div>
            <table id="tblAccounts" class="display">
                <thead>
                    <tr>
                       <%-- <th>
                            <input type="checkbox" id="chkHeader" /></th>--%>
                        <th>#</th>

                        <th>Hospital</th>
                        <th>User Name</th>
                        <th>MobileNumber</th>
                        <th>Email</th>
                        <th>Edit/Delete</th>
                        
                        <%-- <th>FileName</th>--%>
                    </tr>
                </thead>

            </table>

        </div>
            <!--start: dialog boxes-->
        <div id="divNewUserForm" style="display:none;">
            <table id="tblNewUser">
                <tr>
                    <td>
                         <asp:Label runat="server" Style=""> Email :  </asp:Label>
                    </td>
                     <td>
                          <asp:TextBox ID="txtEmail" Style="border-radius: 25px; " placeholder="Enter Email" runat="server" required="true"></asp:TextBox>
                    </td>
                     <td>
            
                        
                          <asp:RegularExpressionValidator ID="regexEmail" runat="server" 
               ControlToValidate="txtEmail" CssClass="stlValidator" ErrorMessage="Please enter valid email" 
               ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*">
            </asp:RegularExpressionValidator>   
                          <asp:RequiredFieldValidator ID="rfvEmail" runat="server" ControlToValidate="txtEmail" ErrorMessage="Please Enter Email" CssClass="stlValidator"></asp:RequiredFieldValidator>
          </td>
                </tr>
                <tr>
                    <td>
                          <asp:Label runat="server" Style=""> Password :  </asp:Label>
                    </td>
                     <td>
                          <asp:TextBox ID="txtPassword" Style="border-radius: 25px; " TextMode="Password" placeholder="Enter Password" required="true" runat="server"></asp:TextBox>
                    </td>
                    <td>
                         <asp:RequiredFieldValidator ID="rfvPassword" runat="server" ControlToValidate="txtPassword" ErrorMessage="Please Enter Password" CssClass="stlValidator"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td>
                         <asp:Label runat="server" Style=""> Name :  </asp:Label>
                    </td>
                     <td>
                           <asp:TextBox ID="txtName" Style="border-radius: 25px; "  placeholder="Enter Name" required="true" runat="server"></asp:TextBox>
                    </td>
                    <td>
                       
                         <asp:RequiredFieldValidator ID="rfvName" runat="server" ControlToValidate="txtName" ErrorMessage="Please Enter Name" CssClass="stlValidator"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td>
                         <asp:Label runat="server" Style=""> Mobile Number :  </asp:Label>
                    </td>
                     <td>
                           <asp:TextBox ID="txtMobileNumber" Style="border-radius: 25px; " placeholder="Enter Mobile Number" runat="server" required="true" > </asp:TextBox>
                                                                                
                    </td>
                    <td>
                         <asp:RegularExpressionValidator ID="regexMobNum" runat="server" ControlToValidate="txtMobileNumber" ErrorMessage="Numbers only Please" CssClass="stlValidator" ValidationExpression="^\d+$"></asp:RegularExpressionValidator>
                        <asp:RequiredFieldValidator ID="rfvMobileNumber" runat="server" ControlToValidate="txtMobileNumber" ErrorMessage="Please Enter Mobile Number" CssClass="stlValidator"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:Button ID="btnSubmit" Style="border-radius: 25px; background: #404f62;color:#fff;float:right;" Text="Submit" runat="server" CssClass="btn btn-primary;" OnClick="btnSubmit_Click" CausesValidation="true" />
                    </td>
                </tr>
            </table>
            
        </div>
         <div id="divEditUserForm" style="display:none;">
            <table id="tblEditUser">
                <tr>
                    <td>
                        <input type="hidden" id="hdnUserId" />
                    </td>
                </tr>
              <tr>
                    <td>
                         <asp:Label runat="server" Style=""> Email :  </asp:Label>
                    </td>
                     <td>
                          <asp:TextBox ID="txtEmailEdit" Style="border-radius: 25px; " placeholder="Enter Email" runat="server" required="true"></asp:TextBox>
                    </td>
                     <td>
            
                        
                          <asp:RegularExpressionValidator ID="regexEmailEdit" runat="server" 
               ControlToValidate="txtEmailEdit" CssClass="stlValidator" ErrorMessage="Please enter valid email" 
               ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*">
            </asp:RegularExpressionValidator>   
                          <asp:RequiredFieldValidator ID="rfvEmailEdit" runat="server" ControlToValidate="txtEmailEdit" ErrorMessage="Please Enter Email" CssClass="stlValidator"></asp:RequiredFieldValidator>
          </td>
                </tr>
                <tr>
                    <td>
                          <asp:Label runat="server" Style=""> Password :  </asp:Label>
                    </td>
                     <td>
                          <asp:TextBox ID="txtPasswordEdit" Style="border-radius: 25px; " TextMode="Password" placeholder="Enter Password" required="true" runat="server"></asp:TextBox>
                    </td>
                    <td>
                         <asp:RequiredFieldValidator ID="rfvPasswordEdit" runat="server" ControlToValidate="txtPasswordEdit" ErrorMessage="Please Enter Password" CssClass="stlValidator"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td>
                         <asp:Label runat="server" Style=""> Name :  </asp:Label>
                    </td>
                     <td>
                           <asp:TextBox ID="txtNameEdit" Style="border-radius: 25px; "  placeholder="Enter Name" required="true" runat="server"></asp:TextBox>
                    </td>
                    <td>
                       
                         <asp:RequiredFieldValidator ID="rfvNameEdit" runat="server" ControlToValidate="txtNameEdit" ErrorMessage="Please Enter Name" CssClass="stlValidator"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td>
                         <asp:Label runat="server" Style=""> Mobile Number :  </asp:Label>
                    </td>
                     <td>
                           <asp:TextBox ID="txtMobNumberEdit" Style="border-radius: 25px; " placeholder="Enter Mobile Number" runat="server" required="true" > </asp:TextBox>
                                                                                
                    </td>
                    <td>
                         <asp:RequiredFieldValidator ID="rfvMobNumberEdit" runat="server" ControlToValidate="txtMobNumberEdit" ErrorMessage="Please Enter Mobile Number" CssClass="stlValidator"></asp:RequiredFieldValidator>
                         <asp:RegularExpressionValidator ID="regexMobNumberEdit" runat="server" ControlToValidate="txtMobNumberEdit" ErrorMessage="Numbers only Please" CssClass="stlValidator" ValidationExpression="^\d+$"></asp:RegularExpressionValidator>
                       
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:Button ID="btnSubmitEdit" Style="border-radius: 25px; background: #404f62;color:#fff;float:right;" Text="Submit" runat="server" CssClass="btn btn-primary;" OnClick="btnSubmitEdit_Click" CausesValidation="true" />
                    </td>
                </tr>
            </table>
            
        </div>
      

        <div id="divConfirmDialog" style="display: none;">
            <span style="color: #000;">
                <label id="lblConfirmMessage"></label>
            </span>
        </div>

        <div id="divSuccessDialog" style="display: none;">
            <span style="color: #000;">
                <label id="lblSuccessMessage"></label>
            </span>
        </div>

        <div id="divInformationDialog" style="display: none;">
            <span style="color: #000;">
                <label id="lblInformationMessage"></label>
            </span>
        </div>

        <div id="divErrorDialog" style="display: none;">
            <span style="color: #000;">
                <label id="lblErrorMessage"></label>
            </span>
        </div>

        <!--end: dialog boxes-->
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
       
        <script src="../assets/js/jQuery/jquery-ui-custom-mmsDialog.js"></script>
        <script type="text/javascript" charset="utf8" src="../assets/DataTables/js/jquery.dataTables.js"></script>
        <script type="text/javascript" src="../assets/PageJs/accounts.js"></script>
        <script type="text/javascript" src="../assets/PageJs/dialogManager.js"></script>

        <script>
         
            wow = new WOW({}).init();
            $(document).ready(function () {
                $('#tblAccounts').DataTable();
                if (IsAdmin)
                    $('#menuListAccounts').css('display', 'block');
                else
                    $('#menuListAccounts').css('display', 'none');

            });
        </script>
    </form>
</body>
</html>

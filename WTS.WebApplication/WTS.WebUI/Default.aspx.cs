using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WTS.DataContracts.Messages;
using WTS.DataContracts.UserManagement;
using WTS.ServiceImplementation;
using WTS.WebUI.Session;
namespace WTS.WebUI
{
    public partial class Default : System.Web.UI.Page
    {
        private MResponse response = null;
        private MRequest request = null;
        string redirectUrl = null;
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnSubmit_Click(object sender, EventArgs e)
         {
            redirectUrl = "~/Recorded/Default.aspx";
            string userName = txtUserName.Text;
            string password = txtPassword.Text;

            request = new MRequest();
            request.User = new UserInfo { UserName = userName, Password = password };

            response = new UserManagementService().ValidateLogIn(request);
            if (response.LoginUser.IsValidUser)
            {
                SessionHandler.UserName = userName;
                SessionHandler.Hospital = response.LoginUser.Hospital;
                if (response.LoginUser.IsAdmin == 1)
                    SessionHandler.AdminUser = "true";
                else
                    SessionHandler.AdminUser = "false";
                Response.Redirect(redirectUrl);
                spnLogIn.Style["display"] = "block";
                spnInvalidUser.Style["display"] = "none";
            }
           else
            {
                spnInvalidUser.InnerText = "Invalid User/Password";
                spnInvalidUser.Style["display"] = "block";
                spnLogIn.Style["display"] = "none";
               
            }
               
              
            
        }
    }
}
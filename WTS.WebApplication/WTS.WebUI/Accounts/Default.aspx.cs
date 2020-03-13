using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WTS.WebUI.Accounts
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            if (Page.IsValid)
            {
               // lblmsg.Text = "Thank You";
            }
            else
            {
               // lblmsg.Text = "Fill up all the fields";
            }
        }

        protected void btnSubmitEdit_Click(object sender, EventArgs e)
        {

        }
    }
}
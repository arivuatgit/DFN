using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.SessionState;
using WTS.DataContracts.Messages;
using WTS.DataContracts.MessageBase;
using WTS.ServiceImplementation;
using WTS.DataContracts.UserManagement;
using WTS.DataContracts.UserManagementEntities;
using WTS.WebUI.Session;
using WTS.WebUI.Classes.Common;
namespace WTS.WebUI.Handlers.Accounts
{
    /// <summary>
    /// Summary description for AccountsHandler
    /// </summary>
    public class AccountsHandler :BaseHandler, IHttpHandler
    {
        public HttpRequest request { get; set; }
        public HttpResponse response { get; set; }
        public JavaScriptSerializer JSONSerializer { get; set; }
        public HttpSessionState session { get; set; }
        private MRequest mrequest { get; set; }
        private MResponse mresponse { get; set; }
        const string chkBoxCellFormat = @"<input id=""chkRow-{0}""name=""chkRow-{0}"" type=""checkbox"" />";
        public void ProcessRequest(HttpContext context)
        {
            //context.Response.ContentType = "text/plain";
            //context.Response.Write("Hello World");
            request = context.Request;
            response = context.Response;
            JSONSerializer = new JavaScriptSerializer();
            context.Response.ContentType = "application/plain";
            string method = context.Request.QueryString["method"];
            switch (method)
            {
                case "PageLoadAcoounts":
                    PageLoadAcoounts(context);
                    break;
                case "AddNewUser":
                    AddNewUser(context);
                    break;
                case "AddEditedUser":
                    AddEditedUser(context);
                    break;
                case "DeleteUser":
                    DeleteUser(context);
                    break;
                default:
                    break;
            }

        }
        private void PageLoadAcoounts(HttpContext context)
        {
            // mrequest = JSONUtil.JsonToClass<MRequest>(context.Request["query"]);
            string hospital = context.Request.Form["Hospital"];
           
            mresponse = new UserManagementService().FetchAccounts(hospital);
            var users = mresponse.users;
            var totalRecords = users.Count;
            var renderHtml = createFelxiJson(context, users, totalRecords);

            switch (mresponse.acknowledge)
            {
                case AcknowledgeType.Success:
                    context.Response.Write(renderHtml);
                    break;
                case AcknowledgeType.Failure:

                    break;
                default:
                    break;
            }
        }
        private void AddNewUser(HttpContext context)
        {
            mrequest = new MRequest();
            mrequest.User = new UserInfo();
            mrequest.User.Email = context.Request.Form["Email"];
            mrequest.User.Password = context.Request.Form["Password"];
            mrequest.User.UserName = context.Request.Form["Name"];
            mrequest.User.MobileNumber = context.Request.Form["MobNumber"];
            mrequest.User.Hospital = context.Request.Form["Hospital"];
            mresponse = new UserManagementService().InsertAccounts(mrequest);
            var users = mresponse.users;
            var totalRecords = users.Count;
            var renderHtml = createFelxiJson(context, users, totalRecords);

            switch (mresponse.acknowledge)
            {
                case AcknowledgeType.Success:
                    context.Response.Write(renderHtml);
                    break;
                case AcknowledgeType.Failure:

                    break;
                default:
                    break;
            }
            //context.Response.Write(new JavaScriptSerializer().Serialize(new
            //{
            //    success = true,
            //    message = "Record saved",
            //    data = renderHtml
            //}));
        }
        private void AddEditedUser(HttpContext context)
        {
            mrequest = new MRequest();
            mrequest.User = new UserInfo();
            mrequest.User.Email = context.Request.Form["Email"];
            mrequest.User.Password = context.Request.Form["Password"];
            mrequest.User.UserName = context.Request.Form["Name"];
            mrequest.User.MobileNumber = context.Request.Form["MobNumber"];
            mrequest.User.Hospital = context.Request.Form["Hospital"];
            mrequest.User.UserId =Convert.ToInt32(context.Request.Form["UId"]);
            mresponse = new UserManagementService().UpdateAccount(mrequest);
            var users = mresponse.users;
            var totalRecords = users.Count;
            var renderHtml = createFelxiJson(context, users, totalRecords);

            switch (mresponse.acknowledge)
            {
                case AcknowledgeType.Success:
                    context.Response.Write(renderHtml);
                    break;
                case AcknowledgeType.Failure:

                    break;
                default:
                    break;
            }
            //context.Response.Write(new JavaScriptSerializer().Serialize(new
            //{
            //    success=true,
            //    message="Record Edited Successfully",
            //    data="",
            //}));
        }
        private void DeleteUser(HttpContext context)
        {
            mrequest = new MRequest();
            mrequest.User = new UserInfo();
          
            mrequest.User.Hospital = context.Request.Form["Hospital"];
            mrequest.User.UserId = Convert.ToInt32(context.Request.Form["UId"]);
            mresponse = new UserManagementService().DeleteAccount(mrequest);
            var users = mresponse.users;
            var totalRecords = users.Count;
            var renderHtml = createFelxiJson(context, users, totalRecords);

            switch (mresponse.acknowledge)
            {
                case AcknowledgeType.Success:
                    context.Response.Write(renderHtml);
                    break;
                case AcknowledgeType.Failure:

                    break;
                default:
                    break;
            }
        }
        public string createFelxiJson(HttpContext context,IEnumerable<UserInfoEntities> items,int totalRecords)
        {
            int rowNo = 0;
            var dataCalls = new
            {
                rows = items.Select(c => new
                {
                    uHospital = c.Hospital,
                    uName = c.UserName,
                    uMobileNumber = c.MobileNumber,
                    uEmail=c.Email,
                    uPassWord=c.Password,
                    uId=c.UserId,
                    cell = new
                    {
                      //  colChkBox = string.Format(chkBoxCellFormat, rowNo + 1),
                        colSNo = ++rowNo,
                        colHospital = c.Hospital,
                        colName = c.UserName,
                        colMobileNumber = c.MobileNumber,
                        colEmail = c.Email,
                        colPassword=c.Password,
                    },
                })
            };
            return Newtonsoft.Json.JsonConvert.SerializeObject(dataCalls);
        }
        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}
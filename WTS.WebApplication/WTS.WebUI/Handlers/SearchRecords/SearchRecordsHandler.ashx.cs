using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Text;
using System.Web.SessionState;
using WTS.DataContracts.Messages;
using WTS.DataContracts.MessageBase;
using WTS.ServiceImplementation;
using WTS.DataContracts.SearchRecordsEntities;
using Newtonsoft.Json;
using WTS.WebUI.Session;
using WTS.DataContracts.UserManagement;
namespace WTS.WebUI.Handlers.SearchRecords
{
    /// <summary>
    /// Summary description for SearchRecordsHandler
    /// </summary>
    public class SearchRecordsHandler : BaseHandler, IHttpHandler
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
            request = context.Request;
            response = context.Response;
            JSONSerializer = new JavaScriptSerializer();
            context.Response.ContentType = "application/plain";
            string method = context.Request.QueryString["method"];
            switch (method)
            {
                case "PageLoadSearchRecords":
                    PageLoadSearchRecords(context);
                    break;
            }
            //   PageLoadSearchRecords(context);
            //context.Response.Write("Hello World");
        }
        public void PageLoadSearchRecords(HttpContext context)
        {
            //string hospital = SessionHandler.Hospital.ToString();
            // mrequest.User = new UserInfo { Hospital = hospital };
            string hospital = context.Request.Form["Hospital"];
            mresponse = new SearchRecordsService().SearchRecords(hospital);
            var records = mresponse.records;
            int totalRecords = mresponse.records.Count;

            var renderHtml = createFlexiJson(context, records, totalRecords);
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
        public string createFlexiJson(HttpContext context, IEnumerable<RecordsInfo> items, int totalRecords)
        {
            int rowNo = 0;
            var dataCalls = new
            {               
                rows = items.Select(c => new
                {                   
                    hospital = c.Hospital,
                    pId = c.PatientId,
                    pName = c.PatientName,
                    oDate = c.ODate,//c.FileName.Substring(0, 10),
                    oTime = c.OTime,//c.FileName.Substring((c.FileName.Length - 8), 8),
                    rDoctor = c.RefDoctor,
                    diagnosis = c.Diagnosis,
                    filename = c.FileName,
                    lastvisit=c.LastVisit,
                  

                    cell = new
                    {
                        colChkBox = string.Format(chkBoxCellFormat, rowNo+1),
                        colSNo = ++rowNo,
                        colHospital = c.Hospital,
                        ColPId = c.PatientId,
                        colPName = c.PatientName,
                        colODate =c.ODate, //c.FileName.Substring(0, 10),
                        colOTime =c.OTime, //c.FileName.Substring((c.FileName.Length - 8), 8),
                        colRDoctor = c.RefDoctor,
                        colDiagnosis = c.Diagnosis,
                        colFilename = c.FileName
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
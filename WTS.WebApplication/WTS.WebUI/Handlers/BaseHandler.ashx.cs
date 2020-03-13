using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Web.Script.Serialization;
using System.Text;
namespace WTS.WebUI.Handlers
{
    /// <summary>
    /// Summary description for BaseHandler
    /// </summary>
    public class BaseHandler : IHttpHandler
    {

        public HttpRequest Request { get; set; }
        public HttpResponse Response { get; set; }
        public JavaScriptSerializer JSONSerializer { get; set; }

        protected HttpContext _httpContext;
        public void ProcessRequest(HttpContext context)
        {
            //context.Response.ContentType = "text/plain";
            //context.Response.Write("Hello World");
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
        #region --- Utility Functions ---

        public static string ResolveUrl(string originalUrl)
        {
            if (originalUrl == null)
            {
                return null;
            }
            // *** Absolute path - just return
            if (originalUrl.IndexOf("://") != -1)
            {
                return originalUrl;
            }

            // *** Fix up image path for ~ root app dir directory
            if (originalUrl.StartsWith("~"))
            {
                string newUrl = "";

                if (HttpContext.Current != null)
                {
                    newUrl = HttpContext.Current.Request.ApplicationPath +
                          originalUrl.Substring(1).Replace("//", "/");
                }
                else
                {   // *** Not context: assume current directory is the base directory

                    throw new ArgumentException("Invalid URL: Relative URL not allowed.");
                }
                // *** Just to be sure fix up any double slashes
                return newUrl;
            }
            return originalUrl;
        }

        protected string GetQueryParam(string paramName)
        {
            return _httpContext.Request.QueryString[paramName];
        }

        protected bool HasParam(string paramName)
        {
            return _httpContext.Request.QueryString[paramName] != null;
        }


        protected void MethodNotAllowed()
        {
            WriteHtmlResponse("method not allowed", HttpStatusCode.MethodNotAllowed, "");
        }

        protected void BadRequest()
        {
            WriteHtmlResponse("badRequest", HttpStatusCode.BadRequest, "");
        }

        protected void WriteResponse(string content, HttpStatusCode statusCode, string statusDescription,
                                     string contentType)
        {
            HttpResponse response = _httpContext.Response;
            response.ContentType = contentType;
            response.StatusCode = (int)statusCode;
            response.StatusDescription = statusDescription;
            response.ContentEncoding = Encoding.UTF8;
            response.Write(content);
        }

        protected void WriteResponse(string content, HttpStatusCode statusCode, string statusDescription)
        {
            WriteResponse(content, statusCode, statusDescription, "application/octet-stream");
        }

        protected void WriteHtmlResponse(string content)
        {
            WriteHtmlResponse(content + Environment.NewLine, HttpStatusCode.OK, "OK");
        }

        protected void WriteHtmlResponse(string content, HttpStatusCode statusCode, string statusDescription)
        {
            byte[] buffer = Encoding.UTF8.GetBytes(content);
            WriteResponse(content, statusCode, statusDescription, "text/html");
        }

        protected void WriteJsonResponse(string content, HttpStatusCode statusCode, string statusDescription)
        {

            byte[] buffer = Encoding.UTF8.GetBytes(content);
            WriteResponse(content, statusCode, statusDescription, "application/json");
        }

        protected void WriteTxtResponse(string content, HttpStatusCode statusCode, string statusDescription)
        {

            byte[] buffer = Encoding.UTF8.GetBytes(content);
            WriteResponse(content, statusCode, statusDescription, "text/plain");
        }

        protected void WriteJsonResponse(string content)
        {
            WriteTxtResponse(content, HttpStatusCode.OK, "OK");
        }

        #endregion
    }
}
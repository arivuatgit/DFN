using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WTS.WebUI.Session
{
    public static class SessionHandler
    {
        public const string _userName = "UserName";
        public const string _hospital = "Hospital";
        public const string _isAdmin = "AdminUser";
        public static string UserName
        {
            get { return (string)HttpContext.Current.Session[_userName]; }
            set { HttpContext.Current.Session[SessionHandler._userName] = value; }
        }
        public static string Hospital
        {
            get { return (string)HttpContext.Current.Session[_hospital]; }
            set { HttpContext.Current.Session[SessionHandler._hospital] = value; }
        }
        public static string AdminUser
        {
            get { return (string)HttpContext.Current.Session[_isAdmin]; }
            set { HttpContext.Current.Session[SessionHandler._isAdmin] = value; }
        }
    }
}
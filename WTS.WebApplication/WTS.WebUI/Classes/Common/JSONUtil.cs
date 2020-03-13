using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Globalization;
using System.Web.Script.Serialization;
using System.Text;
namespace WTS.WebUI.Classes.Common
{
    public class JSONUtil
    {
        public static T JsonToClass<T>(string str) where T: new()
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            try
            {
                T t = (T)js.Deserialize(str, typeof(T));
                return t;
            }
            catch(Exception ex) { }
            return default(T);
        }
    }
}
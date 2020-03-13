using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Data.SqlClient;
using System.Xml.Linq;

namespace WTS.DataAccess
{
    internal static class DALHelper
    {
        public static SqlConnection GetConnection()
        {
            //string CONFIG_PATH = ConfigurationManager.AppSettings["web"];
            //var xDoc = XDocument.Load(CONFIG_PATH);
            string conn = ConfigurationManager.ConnectionStrings["DALConnectionString"].ConnectionString; // xDoc.Root.Element("DALConnectionString").Value;
            return new SqlConnection(conn);
        }
    }
}

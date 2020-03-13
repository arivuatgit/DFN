using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WTS.DataContracts.SearchRecordsEntities;
using WTS.DataAccess;
using System.Data;
using System.Data.SqlClient;
namespace WTS.DataAccess
{
    public class SearchRecordsDAL
    {
        public List<RecordsInfo> SearchRecords(string hospital)
        {
            RecordsInfo records = null;
            List<RecordsInfo> lRecords = new List<RecordsInfo>();

            try
            {
                using (var conn = DALHelper.GetConnection())
                using(var cmd = conn.CreateCommand())
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = DBConstants.Recorded.Init_Fetch_Records;
                    cmd.Parameters.AddWithValue("@Hospital", hospital);
                    conn.Open();
                    SqlDataReader dr = cmd.ExecuteReader();
                    while (dr.Read())
                    {
                        records = new RecordsInfo();
                        records.RecordsID = Convert.ToInt64( dr["RECORDSID"]);
                        records.PatientId = Convert.ToString(dr["PATIENTID"]);
                        records.PatientName = Convert.ToString(dr["FIRSTNAME"]);
                        records.LastName = Convert.ToString(dr["LASTNAME"]);
                        records.DOB = Convert.ToDateTime(dr["DOB"]);
                        records.Age = Convert.ToInt32(dr["AGE"]);
                        records.Gender = Convert.ToString(dr["GENDER"]);
                      
                        records.Address1 = Convert.ToString(dr["ADDRESS1"]);
                        records.Address2 = Convert.ToString(dr["ADDRESS2"]);
                        records.City = Convert.ToString(dr["CITY"]);
                        records.PState = Convert.ToString(dr["PSTATE"]);
                        records.PCountry = Convert.ToString(dr["PCOUNTRY"]);
                        records.ZIPCode = Convert.ToString(dr["ZIPCODE"]);
                      
                        records.ContactNumber1 = Convert.ToString(dr["CONTACTNUM1"]);
                        records.ContactNumber2 = Convert.ToString(dr["CONTACTNUM2"]);
                        records.PEmail = Convert.ToString(dr["PEMAIL"]);
                        records.RefDoctor = Convert.ToString(dr["REFERENCEDOCTOR"]);
                        records.LastVisit = Convert.ToDateTime(dr["LASTVISIT"]);
                        records.Diagnosis = Convert.ToString(dr["DIAGNOSIS"]);
                        records.FileName = Convert.ToString(dr["FILENAME"]);
                        records.Hospital = Convert.ToString(dr["HOSPITAL"]);
                        records.ODate = Convert.ToString(dr["ODATE"]);
                        records.OTime = Convert.ToString(dr["OTIME"]);
                        lRecords.Add(records);
                    }

                 }
            }
            catch(Exception ex)
            {

            }
            return lRecords;
        }
    }
}

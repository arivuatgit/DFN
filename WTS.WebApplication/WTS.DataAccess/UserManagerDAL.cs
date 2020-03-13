using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WTS.DataContracts.UserManagement;
using WTS.DataContracts.UserManagementEntities;
using System.Data.SqlClient;
using System.Data;
using WTS.DataContracts.Messages;
namespace WTS.DataAccess
{
    public class UserManagerDAL
    {
        public UserInfo ValidateLogInUser(string userName, string password)
        {
            UserInfo loginUser = null;
            List<UserInfo> userinfo = new List<UserInfo>();

            try
            {
                using (var conn = DALHelper.GetConnection())
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = DBConstants.UserManagement.Validate_Login_User;
                    cmd.Parameters.AddWithValue("@Email", userName);
                    cmd.Parameters.AddWithValue("@Password", password);
                    conn.Open();

                    SqlDataReader dr = cmd.ExecuteReader();
                    if (dr.HasRows)
                    {
                        while (dr.Read())
                        {
                            loginUser = new UserInfo();
                            loginUser.Hospital = Convert.ToString(dr["Hospital"]);
                            loginUser.IsAdmin = (byte)(dr["IsAdmin"]);
                            loginUser.IsValidUser = true;
                        }
                    }
                    else
                    {
                        loginUser = new UserInfo();
                        loginUser.IsValidUser = false;
                    }
                    //int i = Convert.ToInt32(cmd.ExecuteScalar());
                    //if (i > 0)
                    //{
                    //    loginUser = new UserInfo();
                    //    loginUser.IsValidUser = true;
                    //}
                    //else
                    //{
                    //    loginUser = new UserInfo();
                    //    loginUser.IsValidUser = false;
                    //}

                    conn.Close();
                }
            }
            catch (Exception ex)
            {

            }
            return loginUser;
        }
        public List<UserInfoEntities> FetchAccounts(string hospital)
        {
            UserInfoEntities users = null;
            List<UserInfoEntities> accounts = new List<UserInfoEntities>();
            try
            {
                using (var conn = DALHelper.GetConnection())
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = DBConstants.UserManagement.Fetch_Users;
                    cmd.Parameters.AddWithValue("@Hospital", hospital);
                    conn.Open();
                    SqlDataReader dr = cmd.ExecuteReader();
                    while (dr.Read())
                    {
                        users = new UserInfoEntities();
                        users.UserId = Convert.ToInt32(dr["UserId"]);
                        users.UserName = Convert.ToString(dr["UserName"]);
                        users.Password = Convert.ToString(dr["UserPassword"]);
                        users.MobileNumber = Convert.ToString(dr["MobileNumber"]);
                        users.Email = Convert.ToString(dr["Email"]);
                        users.Hospital = Convert.ToString(dr["Hospital"]);
                        accounts.Add(users);
                    }
                    conn.Close();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }


            return accounts;
        }
        public List<UserInfoEntities> InsertAccount(MRequest request)
        {
            UserInfoEntities users = null;
            List<UserInfoEntities> accounts = new List<UserInfoEntities>();
            try
            {


                using (var conn = DALHelper.GetConnection())
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = DBConstants.UserManagement.Insert_Account;
                    cmd.Parameters.AddWithValue("@UserName", request.User.UserName);
                    cmd.Parameters.AddWithValue("@UserPassword", request.User.Password);
                    cmd.Parameters.AddWithValue("@MobileNumber", request.User.MobileNumber);
                    cmd.Parameters.AddWithValue("@Email", request.User.Email);
                    cmd.Parameters.AddWithValue("@Hospital", request.User.Hospital);
                    conn.Open();

                    // UserId = Convert.ToInt32(cmd.ExecuteScalar());
                    // UserId = Convert.ToInt32(cmd.ExecuteScalar());
                    SqlDataReader dr = cmd.ExecuteReader();
                    if (dr.HasRows)
                    {
                        while (dr.Read())
                        {
                            users = new UserInfoEntities();
                            users.UserId = Convert.ToInt32(dr["UserId"]);
                            users.UserName = Convert.ToString(dr["UserName"]);
                            users.Password = Convert.ToString(dr["UserPassword"]);
                            users.MobileNumber = Convert.ToString(dr["MobileNumber"]);
                            users.Email = Convert.ToString(dr["Email"]);
                            users.Hospital = Convert.ToString(dr["Hospital"]);
                            accounts.Add(users);
                        }
                    }
                    conn.Close();

                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return accounts;


        }

        public List<UserInfoEntities> UpdateAccount(MRequest request)
        {
            UserInfoEntities users = null;
            List<UserInfoEntities> accounts = new List<UserInfoEntities>();
            try
            {


                using (var conn = DALHelper.GetConnection())
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = DBConstants.UserManagement.Update_Account;
                    cmd.Parameters.AddWithValue("@UserName", request.User.UserName);
                    cmd.Parameters.AddWithValue("@UserPassword", request.User.Password);
                    cmd.Parameters.AddWithValue("@MobileNumber", request.User.MobileNumber);
                    cmd.Parameters.AddWithValue("@Email", request.User.Email);
                    cmd.Parameters.AddWithValue("@Hospital", request.User.Hospital);
                    cmd.Parameters.AddWithValue("@UserId", request.User.UserId);
                    conn.Open();

                    // UserId = Convert.ToInt32(cmd.ExecuteScalar());
                    SqlDataReader dr = cmd.ExecuteReader();
                    if (dr.HasRows)
                    {
                        while (dr.Read())
                        {
                            users = new UserInfoEntities();
                            users.UserId = Convert.ToInt32(dr["UserId"]);
                            users.UserName = Convert.ToString(dr["UserName"]);
                            users.Password = Convert.ToString(dr["UserPassword"]);
                            users.MobileNumber = Convert.ToString(dr["MobileNumber"]);
                            users.Email = Convert.ToString(dr["Email"]);
                            users.Hospital = Convert.ToString(dr["Hospital"]);
                            accounts.Add(users);
                        }
                    }
                    conn.Close();

                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return accounts;


        }

        public List<UserInfoEntities> DeleteAccount(MRequest request)
        {
            UserInfoEntities users = null;
            List<UserInfoEntities> accounts = new List<UserInfoEntities>();
            try
            {


                using (var conn = DALHelper.GetConnection())
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = DBConstants.UserManagement.Delete_Account;

                    cmd.Parameters.AddWithValue("@Hospital", request.User.Hospital);
                    cmd.Parameters.AddWithValue("@UserId", request.User.UserId);
                    conn.Open();

                    // UserId = Convert.ToInt32(cmd.ExecuteScalar());
                    SqlDataReader dr = cmd.ExecuteReader();
                    if (dr.HasRows)
                    {
                        while (dr.Read())
                        {
                            users = new UserInfoEntities();
                            users.UserId = Convert.ToInt32(dr["UserId"]);
                            users.UserName = Convert.ToString(dr["UserName"]);
                            users.Password = Convert.ToString(dr["UserPassword"]);
                            users.MobileNumber = Convert.ToString(dr["MobileNumber"]);
                            users.Email = Convert.ToString(dr["Email"]);
                            users.Hospital = Convert.ToString(dr["Hospital"]);
                            accounts.Add(users);
                        }
                    }
                    conn.Close();

                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return accounts;


        }
    }
}

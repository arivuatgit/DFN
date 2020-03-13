using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WTS.DataAccess
{
   public static class DBConstants
    {
        public struct Recorded
        {
            public const string Init_Fetch_Records = "sp_InitFetchRecords";
        }
        public struct UserManagement
        {
            public const string Validate_Login_User = "sp_Validate_User";
            public const string Fetch_Users = "sp_fetch_users";
            public const string Insert_Account = "sp_insert_account";
            public const string Update_Account = "sp_update_account";
            public const string Delete_Account = "sp_delete_account";
        }
    }
}

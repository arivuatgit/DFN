using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WTS.DataContracts.UserManagement
{
    [Serializable]
    public class UserInfo
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string MobileNumber { get; set; }
        public string Email { get; set; }
        public string Hospital { get; set; }
        public DateTime CreatedDate { get; set; }
       public bool IsValidUser { get; set; }
        public byte IsAdmin { get; set; }
    }
}
